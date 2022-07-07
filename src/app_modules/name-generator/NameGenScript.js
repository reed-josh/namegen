import { generateName } from "./NameGenerator.mjs"

const commandArguments = process.argv

const syllist = commandArguments[2]


const result = generateName(
    {
        syllable_count: 2
    },
    syllist ? syllist : 'OLD_NORSE'
)


console.log('RESULT --)) ', result)