var caesar = function(string, factor) {
  let splitString = string.split('');
  let newString = [];
  // iterate over string characters
  for (let i = 0; i < string.length; i++) {
    // check if character is a space or punctuation
    String punctuations = "' '.,:;!@#$%^&*()-";
    if (punctuations.contains(string[i])) {
      // push non-word characters and spaces to newString
      newString.push(string[i]);
    } else {
        // if not, convert to character code and add or subtract factor
        // account for uppercase
        // account for end of alphabet
        numeric = string[i].charCodeAt(0) + factor;
        newChar = String.fromCharCode(numeric);
        newString.push(newChar);
    }

  }
  // return string with characters offset by factor
  return newString.join('');
}

module.exports = caesar
