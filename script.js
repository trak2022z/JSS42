let namePatternF = new RegExp(/[A-Z][a-z]+ [A-Z][a-z]+/);
let namePatternT = new RegExp(/[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+/);
console.log(namePatternF.test("Andrew Fitz Gibbon")); // 
console.log(namePatternF.test("Andrew ")); // false

let studentIdPatternF = new RegExp(/1\d{6}/);
let studentIdPatternT = new RegExp(/^\-1\d{2}$/);
console.log(studentIdPatternT.test("-123"));
console.log(studentIdPatternT.test("123"));

let newStr = "My cats are good cats".replace(/cat/, "kitten");
console.log(newStr);