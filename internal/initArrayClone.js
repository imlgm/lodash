var arrayCopy = require('./arrayCopy');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Array} Returns the initialized array clone.
 */
function initArrayClone(array, isDeep) {
  var length = array.length,
      result = new array.constructor(length);

  if (length) {
    if (!isDeep) {
      arrayCopy(array, result);
    }
    // Add array properties assigned by `RegExp#exec`.
    if (typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
  }
  return result;
}

module.exports = initArrayClone;
