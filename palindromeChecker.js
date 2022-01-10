function palindrome(str) {

    const newStr = str.toLowerCase();
    const removeSymbol = newStr.match(/[a-z0-9]/g);
    const test = newStr.match(/[a-z0-9]/g);
    const reverseArray = removeSymbol.reverse().join('');
  
  
    
  
    if (test.join('') === reverseArray)
      return true;
    else
      return false;
  }
  
  palindrome("eyer");