function echo(input) {
	return input;
}

function shout(input) {
	return input.toUpperCase();
}

function repeat(input) {
	return `${input} ${input}`;
}

function pieceOfWord(word, piece) {
	return word.substring(0, piece);
}

function firstWord(string) {
	words = string.split(' ');
	return words[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(string) {
	words = string.split(' ');
	for (let i = 0; i < words[i]; i++) {
		if (i = 0 || word.length >= 4)
		return capitalize(word);
	} else {
		return word;
	}
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}
