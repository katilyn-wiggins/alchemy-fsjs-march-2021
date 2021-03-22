# Buffers

## Process

`process` is a global object that stores information about the currently
running node process.

property/method | description
--------------- | -----------
`uptime()`      | how long the current node process has been running
`argv`          | an array of arguments used to start the node process
`exit(code)`    | stop the node process with exit code `code`
`env`           | an object containing environment variables

## Environment Variables

Environment variables are key/value pairs of information stored by the
operating system and copied to each running process. Since each process
gets a copy of these variables we can use them to configure our node
applications (processes), updating the values whenever we want to change
the behavior of our application.

We can set custom environment variables when we start our application:

```sh
MY_ENV_VAR=hi node index.js
```

```js
// index.js
console.log(process.env.MY_ENV_VAR) // prints hi
```

This can become painful as the number of environment variables increase.
To help manage environment variables we create a `.env` file which will
contain all of our environment variables

```sh
MY_ENV_VAR=hi
MY_SECOND_VAR=there
```

Then we use the dotenv module `npm i dotenv` to load the environment from
our `.env` file:

```js
require('dotenv').config();

console.log(process.env.MY_ENV_VAR) // prints hi
console.log(process.env.MY_SECOND_VAR) // prints there
```

## Numeral Systems

### Binary

Base 2 numeral system. Consists of only the digits 0 and 1.

```
  1
+ 0
----
  1
```

```
  1
+ 1
----
 10
```

### Hexadecimal

Base 16 numeral system. Consists of the digits 0-9 and A-F,
to make up a total of 16 digits.

```
  9
+ 1
----
  A

```
  A
+ 1
----
  B

```
  F
+ 1
----
 10
```

```
 19
+ 1
----
 1A
```

```
 1F
+ 1
----
 20
```

## Bytes

A bytes is a bite size of data. This is usually represented
by 8 bits.

numeral system | value
-------------- | -----
decimal        | 255
binary         | 11111111
hex            | FF

## Buffer

A buffer is an Array like data type where each item
is a byte.
