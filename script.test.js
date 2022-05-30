import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./script";

test("First letter is capitalized!", () =>
  expect(capitalize("sOmEtHiNg")).toMatch(/Something/));

test("Reverse string", () => expect(reverseString("Hello!")).toMatch(/!olleH/));

test("Add", () => expect(calculator.add(8, "5")).toBe(13));

test("Subtract", () => expect(calculator.subtract(8, "5")).toBe(3));

test("Multiply", () => expect(calculator.multiply(8, "5")).toBe(40));

test("Divide", () => expect(calculator.divide(8, "2")).toBe(4));

test("Cypher", () =>
  expect(caesarCipher("defend the east wall of the castle", 1)).toMatch(
    /efgfoe uif fbtu xbmm pg uif dbtumf/
  ));

test("Analyze array of numbers", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));
