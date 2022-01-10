function rot13(str) {
  const alphabet = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
  ];

  let count = "";

  for (let i = 0; i < str.length; i++){
    const isLetter = alphabet.includes(str[i]);

    if (!isLetter) {
      count += str[i];
    }
    else{
      const index = alphabet.findIndex((c) => c === str[i]);

      count += alphabet[index +13] || alphabet[index - 13];
    }
  }

  return count;
}

rot13("SERR PBQR PNZC");