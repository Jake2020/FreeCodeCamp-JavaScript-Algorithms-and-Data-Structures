/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {

    // Calculate total in draw
    let totalInDrawer = 0;

    // Initilize change as values so can be converted
    const currencyUnits = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    // Loop through cid array to add up total
    for (let i = 0; i < cid.length; i++) {
        totalInDrawer += cid[i][1];
    }

    // Round & convert back to float
    totalInDrawer = parseFloat(totalInDrawer.toFixed(2));
    totalInDrawer = parseFloat(totalInDrawer);


    // Calculate change due and handle insufficient or perfect
    let changeDue = cash - price;

    // Insufficient
    if (totalInDrawer < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    // Perfect
    if (totalInDrawer === changeDue) {
        return { status: "CLOSED", change: cid };
    }


    // Calculate change owed & remaining in draw

    // Initilise arr to hold change returned
    const change = [];

    // Loop backwards thru array reducing amount owed by biggest sum first
    for (let i = cid.length - 1; i >= 0; i--) {

        // Initilize vars
        const currencyUnit = cid[i][0];
        const currencyValue = currencyUnits[currencyUnit];
        let currencyAmount = cid[i][1];
        let currencyCount = 0;

        // While we have enough of each currency in drawer...
        while (changeDue >= currencyValue && currencyAmount > 0) {
            changeDue -= currencyValue;
            currencyAmount -= currencyValue;
            currencyCount += 1;
            changeDue = Math.round(changeDue * 100) / 100;
        }

        // Push to change arr
        if (currencyCount > 0) {
            change.push([currencyUnit, currencyCount * currencyValue]);
        }
    }

    // If we run out, return insufficient
    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    // Return change array
    return { status: "OPEN", change: change };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // expected output: an object
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // expected output: {status: "OPEN", change: [["QUARTER", 0.5]]}
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // expected output: {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // expected output: {status: "INSUFFICIENT_FUNDS", change: []}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // expected output: {status: "INSUFFICIENT_FUNDS", change: []}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // expected output: {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}