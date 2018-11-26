import capitalize from './capitalize.js';
import words from './words.js';

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @see lowerCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
const camelCase = string =>
  // lowerdash: replace template literal to toString for 50% faster.
  words(string.toString().replace(/['\u2019]/g, '')).reduce(
    (result, word, index) => {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    },
    ''
  );

export default camelCase;
