/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/

function palindrome(str) {

    // Remove spaces, punctiation, from str, and convert to lower
    let cleanedStr = str.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();


    // Check if palindrome
    // Convert str to array
    let cleanedArr = cleanedStr.split('');

    // Reverse array
    let reversedArr = [];
    for (let i = cleanedArr.length - 1; i >= 0; i--) {
        reversedArr.push(cleanedArr[i])
    }

    // Convert array back to str
    let reveresdStr = reversedArr.join('');

    // Compare cleaned str and cleaned reversedStr & return result
    return cleanedStr === reveresdStr;
}

palindrome("eye"); // true
palindrome("_eye"); // true
palindrome("race car"); // true
palindrome("not a palindrome"); // false
palindrome("A man, a plan, a canal. Panama"); // true
palindrome("never odd or even"); // true
palindrome("nope"); // false
palindrome("almostomla"); // false
palindrome("My age is 0, 0 si ega ym."); // true
palindrome("1 eye for of 1 eye."); // false
palindrome("0_0 (: /-\ :) 0-0"); // true
palindrome("five|\\_/|four"); // false