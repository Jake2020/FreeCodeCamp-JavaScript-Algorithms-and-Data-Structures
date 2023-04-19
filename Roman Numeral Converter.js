/*
Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    // Initilize var to hold remaining value to convert
    let remaining = num;
    // Initilize str to output numeral
    let numeralStr = "";

    // Loop, decrementing remaining value to convert, and adding numeral to str
    while (remaining > 0) {
        switch (true) {
            case remaining >= 1000:
                numeralStr += "M";
                remaining -= 1000;
                break;
            case remaining >= 900:
                numeralStr += "CM";
                remaining -= 900;
                break;
            case remaining >= 500:
                numeralStr += "D";
                remaining -= 500;
                break;
            case remaining >= 400:
                numeralStr += "CD";
                remaining -= 400;
                break;
            case remaining >= 100:
                numeralStr += "C";
                remaining -= 100;
                break;
            case remaining >= 90:
                numeralStr += "XC";
                remaining -= 90;
                break;
            case remaining >= 50:
                numeralStr += "L";
                remaining -= 50;
                break;
            case remaining >= 40:
                numeralStr += "XL";
                remaining -= 40;
                break;
            case remaining >= 10:
                numeralStr += "X";
                remaining -= 10;
                break;
            case remaining >= 9:
                numeralStr += "IX";
                remaining -= 9;
                break;
            case remaining >= 5:
                numeralStr += "V";
                remaining -= 5;
                break;
            case remaining >= 4:
                numeralStr += "IV";
                remaining -= 4;
                break;
            case remaining >= 1:
                numeralStr += "I";
                remaining -= 1;
                break;
        }
    }
    // Return compleated string of Roman Numerals
    return numeralStr;
}

convertToRoman(2); // Output: II
convertToRoman(3); // Output: III
convertToRoman(4); // Output: IV
convertToRoman(5); // Output: V
convertToRoman(9); // Output: IX
convertToRoman(12); // Output: XII
convertToRoman(16); // Output: XVI
convertToRoman(29); // Output: XXIX
convertToRoman(44); // Output: XLIV
convertToRoman(45); // Output: XLV
convertToRoman(68); // Output: LXVIII
convertToRoman(83); // Output: LXXXIII
convertToRoman(97); // Output: XCVII
convertToRoman(99); // Output: XCIX
convertToRoman(400); // Output: CD
convertToRoman(500); // Output: D
convertToRoman(501); // Output: DI
convertToRoman(649); // Output: DCXLIX
convertToRoman(798); // Output: DCCXCVIII
convertToRoman(891); // Output: DCCCXCI
convertToRoman(1000); // Output: M
convertToRoman(1004); // Output: MIV
convertToRoman(1006); // Output: MVI
convertToRoman(1023); // Output: MXXIII
convertToRoman(2014); // Output: MMXIV
convertToRoman(3999); // Output: MMMCMXCIX