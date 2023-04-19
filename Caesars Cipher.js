/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {

    // Str to hold decoded cipher
    let decoded = "";

    // Loop thru passed in str
    for (let i = 0; i < str.length; i++) {

        // Get current char code 
        let charCode = str.charCodeAt(i);

        // Conver if an uppercase char
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + 13) % 26) + 65;
        }

        // Otherwise keep same and append to decoded str
        decoded += String.fromCharCode(charCode);
    }

    // Return decoded str
    return decoded;

}

rot13("SERR PBQR PNZC"); // Output: FREE CODE CAMP
rot13("SERR CVMMN!"); // Output: FREE PIZZA!
rot13("SERR YBIR?"); // Output: FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // Output: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.