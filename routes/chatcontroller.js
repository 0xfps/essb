const db = require("../db/schema")

const {
    alphabets,
    firstNames,
    lastNames,
    triggerStrings
} = require("../utils/triggers")

const triggers = triggerStrings.split(" ")

/**
 * DATA EXTRACTION, VALIDATION AND REPLY.
 * 
 * This is a simple code for extracting and returning data from variable search text.
 * This text is expected to be structured in a way that it must contain any of the trigger
 * words cotained in triggerStrings in the trigers.js file.
 * E.G: "Get me information on Somtoo Okeke.", 'on' being the trigger word here.
 */
const chatController = async (req, res) => {
    const { search } = req.body
    const splitSearch = search.split(" ")
    const indexOfTrigger = getTriggerIndex(splitSearch)

    // One of the trigger words in triggers.js was found in the search string.
    if (indexOfTrigger != false) {
        if ((splitSearch.length - (indexOfTrigger + 1)) > 1) {
            // There are two words after the trigger word.
            const word1 = removeSpecialChars(splitSearch[indexOfTrigger + 1])
            const word2 = removeSpecialChars(splitSearch[indexOfTrigger + 2])
            /**
             * Check if any of the words is found in the DB
             * If the first word is a first name or last name we can associate it with 
             * true for future cases.
             */
            const isFirstWordInLocalDB = (firstNames.includes(word1.toUpperCase())) || (lastNames.includes(word1.toUpperCase()))
            const isSecondWordInLocalDB = (firstNames.includes(word2.toUpperCase())) || (lastNames.includes(word2.toUpperCase()))

            /**
             * In a situation where both cases are true we can:
             * First: Check if the first and second words are first and last names respectively.
             * Second: Flip and check if the second and first words are first and last names respectively.
             * Third:   In a situation where both above return nothing, we can then search for both separately
             *          both as first names and both as last names, returning whatever we find.
             * All, done on the main DB, not the local.
             * 
             * In a situation where one of the situation is false, we take the true case and then apply just the
             * third scenario.
             */

            // First case if both are true.
            if (isFirstWordInLocalDB && isSecondWordInLocalDB) {
                const firstWord = word1
                const secondWord = word2

                const classmateData = await getInfoOnBothWords(firstWord, secondWord)
                if (classmateData == false) {
                    res.send({ msg: pickRandomResponse(false) })
                    return
                }

                res.send({
                    msg: pickRandomResponse(true, extractClassmateData(classmateData))
                })
                return
            } else if (isFirstWordInLocalDB || isSecondWordInLocalDB) {
                const wordInDB = isFirstWordInLocalDB == true ? word1 : word2
                const classmateData = await getInfoOnOneWord(wordInDB)
                console.log(classmateData)
                if (classmateData == false) {
                    res.send({ msg: pickRandomResponse(false) })
                    return
                }

                res.send({
                    msg: pickRandomResponse(true, extractClassmateData(classmateData))
                })
                return
            } else {
                res.send({ msg: pickRandomResponse(false) })
                return
            }
        } else if ((splitSearch.length - (indexOfTrigger + 1)) == 1 && !Number(splitSearch[indexOfTrigger + 1])) {
            // There's just one word after the trigger word.
            const word1 = removeSpecialChars(splitSearch[indexOfTrigger + 1])
            const isFirstWordInLocalDB = (firstNames.includes(word1.toUpperCase())) || (lastNames.includes(word1.toUpperCase()))
            if (isFirstWordInLocalDB) {
                const classmateData = await getInfoOnOneWord(word1)
                if (classmateData == false) {
                    res.send({ msg: pickRandomResponse(false) })
                    return
                }

                res.send({
                    msg: pickRandomResponse(true, extractClassmateData(classmateData))
                })
                return
            } else {
                res.send({ msg: pickRandomResponse(false) })
                return
            }
        } else if ((splitSearch.length - (indexOfTrigger + 1)) == 1 && Number(splitSearch[indexOfTrigger + 1])) {
            const reg = Number(splitSearch[indexOfTrigger + 1])
            const classmateData = await getInfoByRegNo(reg)
            if (classmateData == false) {
                res.send({ msg: pickRandomResponse(false) })
                return
            }

            res.send({
                msg: pickRandomResponse(true, extractClassmateData(classmateData))
            })
            return
        } else {
            // There is no word after the trigger word.
            res.send({ msg: "You did not pass any word." })
            return
        }
    } else {
        // There is no trigger word.
        // Here, we possibly check if the names were passed directly.
        // Example: body = {search: "Somtoo Okeke"}
        if (splitSearch.length > 1) {
            const word1 = removeSpecialChars(splitSearch[0])
            const word2 = removeSpecialChars(splitSearch[1])

            /**
             * Check if any of the words is found in the DB
             * If the first word is a first name or last name we can associate it with 
             * true for future cases.
             */
            const isFirstWordInLocalDB = (firstNames.includes(word1.toUpperCase())) || (lastNames.includes(word1.toUpperCase()))
            const isSecondWordInLocalDB = (firstNames.includes(word2.toUpperCase())) || (lastNames.includes(word2.toUpperCase()))

            /**
             * In a situation where both cases are true we can:
             * First: Check if the first and second words are first and last names respectively.
             * Second: Flip and check if the second and first words are first and last names respectively.
             * Third:   In a situation where both above return nothing, we can then search for both separately
             *          both as first names and both as last names, returning whatever we find.
             * All, done on the main DB, not the local.
             * 
             * In a situation where one of the situation is false, we take the true case and then apply just the
             * third scenario.
             */

            // First case if both are true.
            if (isFirstWordInLocalDB && isSecondWordInLocalDB) {
                const firstWord = word1
                const secondWord = word2

                const classmateData = await getInfoOnBothWords(firstWord, secondWord)
                if (classmateData == false) {
                    res.send({ msg: pickRandomResponse(false) })
                    return
                }

                res.send({
                    msg: pickRandomResponse(true, extractClassmateData(classmateData))
                })
                return
            } else if (isFirstWordInLocalDB || isSecondWordInLocalDB) {
                const wordInDB = isFirstWordInLocalDB == true ? word1 : word2
                const classmateData = await getInfoOnOneWord(wordInDB)
                console.log(classmateData)
                if (classmateData == false) {
                    res.send({ msg: pickRandomResponse(false) })
                    return
                }

                res.send({
                    msg: pickRandomResponse(true, extractClassmateData(classmateData))
                })
                return
            } else {
                res.send({ msg: pickRandomResponse(false) })
                return
            }
        } else if (splitSearch.length == 1 && !Number(splitSearch[0])) {
            // There's just one word after the trigger word.
            const word1 = removeSpecialChars(splitSearch[0])
            const isFirstWordInLocalDB = (firstNames.includes(word1.toUpperCase())) || (lastNames.includes(word1.toUpperCase()))
            if (isFirstWordInLocalDB) {
                const classmateData = await getInfoOnOneWord(word1)
                if (classmateData == false) {
                    res.send({ msg: pickRandomResponse(false) })
                    return
                }

                res.send({
                    msg: pickRandomResponse(true, extractClassmateData(classmateData))
                })
                return
            } else {
                res.send({ msg: pickRandomResponse(false) })
                return
            }
        } else if (splitSearch.length == 1 && Number(splitSearch[0])) {
            const reg = Number(splitSearch[0])
            const classmateData = await getInfoByRegNo(reg)
            if (classmateData == false) {
                res.send({ msg: pickRandomResponse(false) })
                return
            }

            res.send({
                msg: pickRandomResponse(true, extractClassmateData(classmateData))
            })
            return
        } else {
            // There is no word after the trigger word.
            res.send({ msg: "You did not pass any word." })
            return
        }
    }
}

/**
 * To return the triggerIndex in the split search, this code goes
 * over all the words in the search and gets the index of the first
 * trigger word found.
 */
const getTriggerIndex = (splitSearch) => {
    let i = 0

    while (i < triggers.length) {
        let currentTrigger = triggers[i]

        for (j = 0; j < splitSearch.length; j++) {
            if (splitSearch[j] == currentTrigger) {
                return j
            }
        }

        i++
    }

    return false
}

/**
 * This piece of code in the context of what is being built,
 * takes a single word at a time, and strips it of any character that
 * is not an alphabet (small or capital). It returns the stripped new word.
 */
const removeSpecialChars = (word) => {
    let newWord = ""

    let i = 0
    while (i < word.length) {
        if (!alphabets.includes(word[i])) i++
        else newWord += word[i]
        i++
    }

    return newWord
}

/**
 * As stated earlier, the firstWord and secondWord are taken and
 * passed as queries in a db, with hopes of getting a match from the 
 * original Mongo database.
 * 
 * First search is made firstWord secondWord
 * Second search is made secondWord firstWord, if and only if the above returns 
 * nothing.
 */
const getInfoOnBothWords = async (firstWord, secondWord) => {
    const query = { lastName: "", firstName: "" }
    query.firstName = firstWord.toUpperCase()
    query.lastName = secondWord.toUpperCase()

    let findClassMate = await db.find(query)

    if (findClassMate.length > 0) return findClassMate

    query.firstName = secondWord.toUpperCase()
    query.lastName = firstWord.toUpperCase()

    findClassMate = await db.find({
        query
    })

    if (findClassMate.length > 0) return findClassMate

    return false
}

/**
 * Just the above, but for one word.
 */
const getInfoOnOneWord = async (word) => {
    let query = { firstName: word.toUpperCase() }

    let reply = []

    let findClassMate = await db.find(query)

    if (findClassMate.length > 0) {
        for (i = 0; i < findClassMate.length; i++) {
            reply.push(findClassMate[i])
        }
    }

    query = {}
    query = { lastName: word.toUpperCase() }

    findClassMate = await db.find(query)

    if (findClassMate.length > 0) {
        for (i = 0; i < findClassMate.length; i++) {
            reply.push(findClassMate[i])
        }
    }

    if (reply.length > 0) return reply

    return false
}

/**
 * This function takes in an array of data and returns the firstnames,
 * lastnames and regNos, in different formats.
 * It is certain that to get to this point, dataArray is populated.
 */
const extractClassmateData = (dataArray) => {
    let dataBox = []
    let dataObject = {}

    if (dataArray.length > 0) {
        for (i = 0; i < dataArray.length; i++) {
            dataObject.fName = dataArray[i].firstName
            dataObject.lName = dataArray[i].lastName
            dataObject.regNo = dataArray[i].regNo

            dataBox.push(dataObject)
            dataObject = {}
        }

        return dataBox
    }

    return ""
}

const pickRandomResponse = (ok, arr = []) => {
    if (!ok) return "I'm sorry, that name does not exist in our class database."
    const isAre = arr.length == 1 ? "is" : "are"
    const matches = arr.length == 1 ? "match" : "matches"
    let resp = `There ${isAre} ${arr.length} ${matches} for that name: `


    for (i = 0; i < arr.length; i++) {
        const buildResp = ` ${arr[i].lName} ${arr[i].fName} with registration number ${arr[i].regNo}.`
        resp += buildResp
    }

    return resp
}

const getInfoByRegNo = async (reg) => {
    let query = { regNo: reg }

    let findClassMate = await db.find(query)

    if (findClassMate.length > 0) return findClassMate

    return false
}


module.exports = chatController