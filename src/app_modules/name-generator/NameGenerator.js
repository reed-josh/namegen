import Helpers from './Helpers.js'

import oldnorse from './syllables/oldnorse.js'
import english from './syllables/english.js'
import thadden from './syllables/thadden.js'

/** @member {object} syllablesMap */
const syllablesMap = {
  OLD_NORSE: oldnorse,
  ENGLISH: english,
  THADDEN: thadden
}

/**
 * generates a fictional name from random syllables
 *
 * @param {object} options Configurations, like syllable_count
 * @param {string} syllType which syllable list to use
 * @returns {string} This returns a string; a combination of syllables
 */
export const generateName = function (options, syllType) {
  const syllables = syllablesMap[syllType]
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
