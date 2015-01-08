var baseProperty = require('../internal/baseProperty');

/**
 * Creates a "_.property" style function which returns the property value
 * of `key` on a given object.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {string} key The name of the property to get.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var users = [
 *   { 'user': 'fred' },
 *   { 'user': 'barney' }
 * ];
 *
 * var getName = _.property('user');
 *
 * _.map(users, getName);
 * // => ['fred', barney']
 *
 * _.pluck(_.sortBy(users, getName), 'user');
 * // => ['barney', 'fred']
 */
function property(key) {
  return baseProperty(key + '');
}

module.exports = property;
