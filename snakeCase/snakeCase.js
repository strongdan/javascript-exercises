var snakeCase = function(s) {
  let punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let finalString = punctuationless.split(' ').join('_');
  return finalString;
}

module.exports = snakeCase
