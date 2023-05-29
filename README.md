# [FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures](https://jake2020.github.io/FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures/)
A repository to host my FreeCodeCamp 'JavaScript Algorithms and Data Structures' projects and certification.

Each project has been hosted on GitHub Pages as a simple interactive and responsive webpage made up of HTML, CSS, JavaScript, and Bootstrap, so the user can test the code as well as read it. Please enjoy my very bright, very mediocre, front end designs.

GitHub Pages Link (for my reference): https://jake2020.github.io/FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures/

## The following projects/coding challenges were completed to gain this certification:

1. [Palindrome Checker](https://jake2020.github.io/FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures/PalindromeChecker.html)
2. [Roman Numeral Converter](https://jake2020.github.io/FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures/RomanNumeralConvertor.html)
3. [Caesars Cipher](https://jake2020.github.io/FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures/CaesarsCipher.html)
4. [Telephone Number Validator](https://jake2020.github.io/FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures/TelephoneNumberValidator.html)
5. [Cash Register](https://jake2020.github.io/FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures/CashRegister.html)

## Project 1: [Palindrome Checker](https://jake2020.github.io/FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures/PalindromeChecker.html)
*Note: Example text is provided but any input can be checked*

Problem Description:

Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

Expected Outputs:

- palindrome("eye") should return a boolean.
- palindrome("eye") should return true.
- palindrome("_eye") should return true.
- palindrome("race car") should return true.
- palindrome("not a palindrome") should return false.
- palindrome("A man, a plan, a canal. Panama") should return true.
- palindrome("never odd or even") should return true.
- palindrome("nope") should return false.
- palindrome("almostomla") should return false.
- palindrome("My age is 0, 0 si ega ym.") should return true.
- palindrome("1 eye for of 1 eye.") should return false.
- palindrome("0_0 (: /-\ :) 0-0") should return true.
- palindrome("five|\_/|four") should return false.

## Project 2: [Roman Numeral Converter](https://jake2020.github.io/FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures/RomanNumeralConvertor.html)

Problem Description:

Convert the given number into a roman numeral.

| Roman numerals | Arabic numerals |
|---------------|-----------------|
| M             | 1000            |
| CM            | 900             |
| D             | 500             |
| CD            | 400             |
| C             | 100             |
| XC            | 90              |
| L             | 50              |
| XL            | 40              |
| X             | 10              |
| IX            | 9               |
| V             | 5               |
| IV            | 4               |
| I             | 1               |

All roman numerals answers should be provided in upper-case.

Expected Outputs:

convertToRoman(2) should return the string II.
- convertToRoman(3) should return the string III.
- convertToRoman(4) should return the string IV.
- convertToRoman(5) should return the string V.
- convertToRoman(9) should return the string IX.
- convertToRoman(12) should return the string XII.
- convertToRoman(16) should return the string XVI.
- convertToRoman(29) should return the string XXIX.
- convertToRoman(44) should return the string XLIV.
- convertToRoman(45) should return the string XLV.
- convertToRoman(68) should return the string LXVIII.
- convertToRoman(83) should return the string LXXXIII.
- convertToRoman(97) should return the string XCVII.
- convertToRoman(99) should return the string XCIX.
- convertToRoman(400) should return the string CD.
- convertToRoman(500) should return the string D.
- convertToRoman(501) should return the string DI.
- convertToRoman(649) should return the string DCXLIX.
- convertToRoman(798) should return the string DCCXCVIII.
- convertToRoman(891) should return the string DCCCXCI.
- convertToRoman(1000) should return the string M.
- convertToRoman(1004) should return the string MIV.
- convertToRoman(1006) should return the string MVI.
- convertToRoman(1023) should return the string MXXIII.
- convertToRoman(2014) should return the string MMXIV.
- convertToRoman(3999) should return the string MMMCMXCIX.

## Project 3: [Caesars Cipher](https://jake2020.github.io/FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures/CaesarsCipher.html)
*Note: 3 exaples ciphers are included to decode but the user can use any input text. Might add encoding later but this was not part of the project requirements*
*Note: If using your own inputs the program only convers UPPERCASE charachters*

Problem Description:

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Expected Outputs:

- rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
- rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
- rot13("SERR YBIR?") should decode to the string FREE LOVE?
- rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

## Project 4: [Telephone Number Validator](https://jake2020.github.io/FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures/TelephoneNumberValidator.html)
*Note: Works with US phone numbers only*

Problem Description:

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Expected Outputs:

- telephoneCheck("555-555-5555") should return a boolean.
- telephoneCheck("1 555-555-5555") should return true.
- telephoneCheck("1 (555) 555-5555") should return true.
- telephoneCheck("5555555555") should return true.
- telephoneCheck("555-555-5555") should return true.
- telephoneCheck("(555)555-5555") should return true.
- telephoneCheck("1(555)555-5555") should return true.
- telephoneCheck("555-5555") should return false.
- telephoneCheck("5555555") should return false.
- telephoneCheck("1 555)555-5555") should return false.
- telephoneCheck("1 555 555 5555") should return true.
- telephoneCheck("1 456 789 4444") should return true.
- telephoneCheck("123**&!!asdf#") should return false.
- telephoneCheck("55555555") should return false.
- telephoneCheck("(6054756961)") should return false.
- telephoneCheck("2 (757) 622-7382") should return false.
- telephoneCheck("0 (757) 622-7382") should return false.
- telephoneCheck("-1 (757) 622-7382") should return false.
- telephoneCheck("2 757 622-7382") should return false.
- telephoneCheck("10 (757) 622-7382") should return false.
- telephoneCheck("27576227382") should return false.
- telephoneCheck("(275)76227382") should return false.
- telephoneCheck("2(757)6227382") should return false.
- telephoneCheck("2(757)622-7382") should return false.
- telephoneCheck("555)-555-5555") should return false.
- telephoneCheck("(555-555-5555") should return false.
- telephoneCheck("(555)5(55?)-5555") should return false.
- telephoneCheck("55 55-55-555-5") should return false.
- telephoneCheck("11 555-555-5555") should return false.

## Project 5: [Cash Register](https://jake2020.github.io/FreeCodeCamp-JavaScript-Algorithms-and-Data-Structures/CashRegister.html)
*Note: This project has really awkward test inputs including long arrays so isn't particurarly interactive to host on a webpage, so Instead I have just hosted my code solution.*

Problem Description:

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

See below for an example of a cash-in-drawer array:
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

Expected Outputs:

- checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
- checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
- checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
- checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
- checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
- checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
