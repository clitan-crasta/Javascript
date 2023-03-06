export default class Palindrome {
  /**
   * palindrome
   * type - str
   *
   *  ---- O(n/2)
   */

  checkPalindromeStr = (str) => {
    let l = 0;
    let h = str.length - 1;

    if (str.length === 1) {
      return true;
    }

    while (l < h) {
      if (str[l++] !== str[h--]) {
        return false;
      }
    }
    return true;
  };

  checkPalindromeStrRecursion = (str) => {
    if (str.length === 1 || str.length == 0) {
      return true;
    }

    if (str[0] === str[str.length - 1]) {
      return this.checkPalindromeStrRecursion(str.substring(1, str.length - 1));
    } else return false;
  };

  checkPalindromeNumber = (value) => {
    let temp = value;
    let sum = 0;

    while (value > 0) {
      let r = value % 10;
      sum = sum * 10 + r;
      value = Math.floor(value / 10);
    }
    return temp === sum;
  };
}
