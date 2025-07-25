// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 */
function createGreaterThanFilter(base) {

}

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base.
 */
function createLessThanFilter(base) {
  
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 */
function createStartsWithFilter(startsWith) {
  
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 */
function createEndsWithFilter(endsWith) {

}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 *
 * Example:
 *
 *   modifyStrings(['a', 'b'], function(str){ return str.toUpperCAase() }); //-> ['A', 'B']
 */
function modifyStrings(strings, modify) {
  
}

/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 *
 * Example:
 *
 *   allStringsPass(['a', 'b'], function(str){ return str.length === 1 }); //-> true
 *   allStringsPass(['a', 'bac'], function(str){ return str.length === 1 }); //-> false
 */
function allStringsPass(strings, test) {

}

////////////////////////////
// DON'T REMOVE THIS CODE //
////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}
