import Palindrome from './src/palindrome.js';

const rec = new Palindrome();

console.log(rec.checkPalindromeStr('aabb'));
console.log(rec.checkPalindromeStrRecursion('aabbaa'));
console.log(rec.checkPalindromeNumber(121));
