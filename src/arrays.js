/**
 * As a representation of Chars array please use our sample: ./data/characters.json
 * return an array of characters names
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - char names
 */

    const charactersData = require('./data/characters.json');

    function getCharactersNames(chars) {
        return chars.map(char => char.name);
    }

    const characterNames = getCharactersNames(charactersData);
    console.log(characterNames);


/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
    
    function printCharacterNames(chars) {
        chars.map(char => char.name).forEach(name => console.log(name));
    }

    printCharacterNames(charactersData);


/**
 * return an array of non-human (species !== 'Human') characters
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - non human characters
 */

    function getNonHumanCharacters(chars) {
        return chars.filter(char => char.species !== 'Human');
    }

    const nonHumanCharacters = getNonHumanCharacters(charactersData);
    console.log(nonHumanCharacters);


/**
 * return info about character named 'Jerry Smith'
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
    
    function getJerryInfo(chars) {
        return chars.find(char => char.name === 'Jerry Smith');
    }

    const jerryInfo = getJerryInfo(charactersData);
    console.log(jerryInfo);


/**
 * check if all characters are human (species attribute). return true if all, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */

    function isAllHuman(chars) {
        return chars.every(char => char.species === 'Human');
    }

    const allHuman = isAllHuman(charactersData);
    console.log(allHuman);


/**
 * check if there are any 'type == Fish-Person' characters. return true if any, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
    function isAnyFishPerson(chars) {
        return chars.some(char => char.type === 'Fish-Person');
    }

    const anyFishPerson = isAnyFishPerson(charactersData);
    console.log(anyFishPerson);


/**
 * write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 */
    function minItem(arr) {
        return arr.reduce((minIndex, currentValue, currentIndex, array) => {
            return currentValue < array[minIndex] ? currentIndex : minIndex;
    }, 0);

    }

    console.log(minItem([2,5,6,3,1,8]));


module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem,
};
