function translate(string) {
	let splitString = string.split(' ');
	let newString = [];
	for (let i = 0; i < splitString.length; i++) {
		if (splitString[i].substring(0,1) === 'a' || 'e' || 'i' || 'o' || 'u') {
			pigWord = `${splitString[i]}way`;
			newString.push(pigWord);
		} else if (splitString[i].substring(0,2) === 'ch' || 'sh' || 'sm' || 'st' || 'th' || 'st' || 'gl') {
			pigWord = `${splitString[i].substring(2,splitString.length)}${splitString[i].substring(0,2)}ay`;
			newString.push(pigWord);
		} else if (splitString[i].substring(0,1) !== 'a' || 'e' || 'i' || 'o' || 'u') {
			pigWord = `${splitString[i].substring(1,splitString.length)}${splitString[i].substring(0,1)}ay`;
			newString.push(pigWord);
		} else {
			return 'Error';
		}
	}
	return newString.join(' ');
}


module.exports = {
	translate
}
