var palindromes = function(s) {
  let punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let finalString = punctuationless.replace(/\s{2,}/g," ");
  if (finalString.split('').reverse().join('') === finalString) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindromes
