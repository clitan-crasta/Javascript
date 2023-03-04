export default class recursion {
  constructor(str) {
    this.str = str;
  }

  /**
   * palindrome
   * type - str
   */

  checkPalindromeStr = () => {
    let l = 0;
    let h = this.str.length - 1;

    // while (l < h) {
    //   if (this.str[l] !== this.str[h]) {
    //     return false;
    //   }
    // }
    return true;
    // return this.str === this.str.split('').reverse().join(''); --- O(n)
  };
}
