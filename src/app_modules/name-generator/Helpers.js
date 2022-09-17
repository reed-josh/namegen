
// get random integer
export function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

// make first character of a string uppercase
export function firstCharToUpper (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// get a random syllable form an array of syllables
export function getRandomSyllable (syllables) {
  return syllables[getRandomInt(syllables.length)]
}

// // read json files for syllable list
// function getSyllableList(listName) {
//   const location = path.resolve(path.join(__dirname, "syllables", listName + '.json'))
//   return fs.readFileSync(location, 'utf8')
//   return fs.readFileSync('./syllables/'+listName+'.json', 'utf8');
// }

export default {
  getRandomInt,
  firstCharToUpper,
  getRandomSyllable
}
