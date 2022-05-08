var myString = "   I'd like to buy a bottle of water, please!";
//String is not mutable

console.log(myString);

console.log(myString.indexOf('o', 11));
console.log(myString.lastIndexOf('o'));
console.log(myString.search('like')); //RegEx
console.log(myString.includes('bottle'));
console.log(myString.slice(4,8));
console.log(myString.replace('like', 'want'));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.trim());

var languages = 'JS, HTML, CSS';
console.log(languages.split(', '));