"use strict";

const capitalize = function (str) {
  const strLowerCased = str.trim().toLowerCase();
  return strLowerCased[0].toUpperCase() + strLowerCased.slice(1);
};

const reverseString = (str) => [...str].reverse().join("");

const calculator = {
  add(num1, num2) {
    return Number(num1) + Number(num2);
  },
  subtract(num1, num2) {
    return Number(num1) - Number(num2);
  },
  multiply(num1, num2) {
    return Number(num1) * Number(num2);
  },
  divide(num1, num2) {
    return Number(num1) / Number(num2);
  },
};

const caesarCipher = (plainText, key) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const letters = plainText.trim().toLowerCase().split("");
  const keyChecked = Number(key) > 25 ? 25 : Number(key);
  const shiftedLetters = [];

  for (const letter of letters) {
    if (alphabet.indexOf(letter) === -1) {
      shiftedLetters.push(letter);
    } else {
      shiftedLetters.push(
        alphabet[
          alphabet.indexOf(letter) + keyChecked >= alphabet.length
            ? alphabet.indexOf(letter) + keyChecked - alphabet.length
            : alphabet.indexOf(letter) + keyChecked
        ]
      );
    }
  }

  const cipherText = shiftedLetters.join("");

  return cipherText;
};

const analyzeArray = (arrNumbers) => {
  const average =
    arrNumbers.reduce((prev, curr) => prev + curr) / arrNumbers.length;
  const max = Math.max(...arrNumbers);
  const min = Math.min(...arrNumbers);
  const length = arrNumbers.length;

  return { average, min, max, length };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
