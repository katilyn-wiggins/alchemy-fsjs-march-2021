# Buffer

Buffers are used to manipulate and interact with binary
data in node.

## Exercise 1

[Example](https://github.com/alchemycodelab/fsjs-be-demos/tree/master/02_node/06_buffers/exercise-1)

Create a new `Buffer` with `alloc`. All `Buffer`s have a length
that cannot change.

* create a `buffer.test.js` file
* `Buffer` is part of the global object, so no need to require anything
* create a test `it('creates a buffer of length 10', () => {});`
* Use `Buffer.alloc` to create an empty buffer of length 10
  * How could you "fill" this buffer?

## Exercise 2

[Example](https://github.com/alchemycodelab/fsjs-be-demos/tree/master/02_node/06_buffers/exercise-2)

Create a buffer from a string value

* Use `Buffer.from` to create a buffer from a string
* create a test `it('creates a buffer from a string', () => {});`
  * `console.log` your buffer to see what it looks like
  * expect it to have length
  * expect `.toString()` to equal the original string
* try:
  * use `map` to iterate over your buffer and change each item to 104
    * console.log the result
    * console.log the `toString()` result
    * write a test for the result
    * what if you use a value other than 104?

## Exercise 3

[Example](https://github.com/alchemycodelab/fsjs-be-demos/tree/master/02_node/06_buffers/exercise-3)

* create from hex codes
  * `const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);`
  * console.log the result
  * console.log the `toString()` result
  * what else can you print?
  * how can you write this in decimal?
  * how can you write this in binary?
* write a test for this
