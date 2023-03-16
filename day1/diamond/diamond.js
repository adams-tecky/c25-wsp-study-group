function printDiamond(letter) {
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var letterIndex = alphabet.indexOf(letter);
  // diamond width & height
  var diamondSize = ((letterIndex-0) * 2) + 1;

  // Build upper half of diamond
  var diamond = '';
  for (var i = 0; i <= letterIndex; i++) {
      console.log("check i 1:")
      
    var currentLetter = alphabet[i];
    console.log("current processing char",currentLetter)
    // ····A····
    var spaces;
    var middleSpaces 
    if(i ==0){
        spaces = '.'.repeat((diamondSize - 1)/2);
        // spaces = '....'
    }
    else{
        // ···B·B···
        // ··C···C··
        // ·D·····D·
        // E·······E
        spaces = '.'.repeat((diamondSize -1)/2 - i)
        middleSpaces = '.'.repeat(diamondSize - (((diamondSize -1)/2 - i)*2-2))
    }

    if (i === 0) {
        // ····A····
      diamond += spaces + currentLetter +spaces+ '\n';
      console.log('check case a row',diamond)
    } else {
      diamond += spaces + currentLetter + middleSpaces + currentLetter +spaces+ '\n';
    }
  }

  // Build lower half of diamond
//   for (var i = letterIndex - 1; i >= 0; i--) {
//     var currentLetter = alphabet[i];
//     var spaces = ' '.repeat(letterIndex - i);
//     var middleSpaces = ' '.repeat((i * 2) - 1);

//     if (i === 0) {
//       diamond += spaces + currentLetter + '\n';
//     } else {
//       diamond += spaces + currentLetter + middleSpaces + currentLetter + '\n';
//     }
//   }

  console.log(diamond);
}

// Example usage
// printDiamond('A');
printDiamond('C');
printDiamond('E');
