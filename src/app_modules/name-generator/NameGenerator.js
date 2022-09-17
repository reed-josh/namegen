import Helpers from './Helpers.js'

/**
 *
 * @param {string} fileName
 * @returns {object} returns syll list
 */
export async function getSylList (fileName) {
  try {
    const res = await import(`./syllables/${fileName}.js`)
    return res.default
  } catch (error) {
    return null
  }
}

/**
 *
 * need to return an array of possible syl types or options for generateName function
 *
 * @returns {Array} array
 */
export async function buildSylOptions () {
  return []
}

/**
 * generates a fictional name from random syllables
 *
 * @param {object} options Configurations, like syllable_count
 * @param {string} sylType which syllable list to use
 * @returns {string} This returns a string; a combination of syllables
 */
export const generateName = async function (options, sylType) {
  const syllables = await getSylList(sylType)
  let name = ''
  const multiSyll = options.syllable_count > 1
  if (multiSyll) {
    options.syllable_count = options.syllable_count - 1
  }
  for (let i = 0; i < options.syllable_count; i++) {
    name += Helpers.getRandomSyllable(syllables.start)
  }
  if (multiSyll) {
    name = Helpers.firstCharToUpper(name) + Helpers.getRandomSyllable(syllables.end)
  }
  return name
}
