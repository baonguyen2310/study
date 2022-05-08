let myString = "<h1>Hello, Worlds! Hello, Regular Expression. Jellooooooo, 23101997! Aaaaaa</h1>";

let myRegex = /Hello|Hi/;
console.log(myRegex.test(myString));

let ignoreCase = /hello/gi;
console.log(ignoreCase.test(myString));

console.log(myString.match(ignoreCase));

let wildcardCharacter = /.ello/g;
console.log(myString.match(wildcardCharacter));

let characterClasses = /r[el]/gi;
console.log(myString.match(characterClasses));

let alphabet = /[a-z0-9]/gi;
console.log(myString.match(alphabet));

let symbol = /[^0-9a-z]/gi;
console.log(myString.match(symbol));

let oneMore = /s+/g;
console.log(myString.match(oneMore));

let zeroMore = /Aa*/g;
console.log(myString.match(zeroMore));

let lazyMatch = /<.*?>/gi;
console.log(myString.match(lazyMatch));

let beginningRegex = /^<h1>/;
console.log(beginningRegex.test(myString));

let endingRegex = /<h1>$/;
console.log(endingRegex.test(myString));

let allCharacter = /\w+/gi;
console.log(myString.match(allCharacter));

let denyCharactor = /\W/gi;
console.log(myString.match(denyCharactor));

let digits = /\d/g;
console.log(myString.match(digits));

let notNumber = /\D/g;
console.log(myString.match(notNumber));

let notSpace = /\S+/g;
console.log(myString.match(notSpace));

let numberOfCharacter = /Jello{3,}/gi;
console.log(myString.match(numberOfCharacter));

let checkRegex = /J?ello/gi;
console.log(checkRegex.test(myString));

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
console.log(result);

/*Username
    1. have least 8 characters
    2. can only alpha-numeric characters
    3. can be lowercase and uppercase
    4. cannot start with the number
*/

let userNames = ["bao2310", "baonguyen2310", "_baonguyen", "2310baonguyen"];
let userCheckRegex =/^[a-z][a-z0-9]{7,}/i;
for (let i in userNames) {
    console.log(userCheckRegex.test(userNames[i]));
}
