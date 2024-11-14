# num2let

num2let is a lightweight JavaScript library designed to convert numbers into their word representations. It supports mathematical expressions, allowing users to input calculations and receive the result in word form. This library is particularly useful for applications that require a human-readable format of numbers, such as in invoices, reports, or educational tools.

## Features

- **Number to Words Conversion**: Converts integers and decimal numbers into their corresponding word representations.
- **Math Expression Support**: Evaluates simple mathematical expressions (e.g., "2 + 2") and returns the result in words.
- **Customizable**: Easily extendable for additional features or customizations.

## Installation

You can install `num2let` using npm. Open your terminal and run:

```bash
npm install num2let
```

## Usage

To use the `num2let` library, first require it in your JavaScript file:

```js
const numbertoletter = require("num2let");
```

### Basic Examples

Here are some examples of how to use the library:

```js
console.log(numbertoletter(123)); // Output: "one hundred twenty three"
console.log(numbertoletter(0)); // Output: "zero"
console.log(numbertoletter(1001)); // Output: "one thousand one"
console.log(numbertoletter(1234567)); // Output: "one million two hundred thirty four thousand five hundred sixty seven"
```

### Mathematical Expressions

You can also input mathematical expressions as strings:

```js
console.log(numbertoletter("2 + 2")); // Output: "four"
console.log(numbertoletter("sin(30)")); // Output: "one half" (if supported)
console.log(numbertoletter("invalid")); // Output: "Invalid mathematical expression"
```

### Decimal Numbers

The library can handle decimal numbers as well:

```js
console.log(numbertoletter(123.45)); // Output: "one hundred twenty three point four five"
```

## Error Handling

The library includes basic error handling for out-of-range numbers and invalid mathematical expressions. Here are some examples:

```js
console.log(numbertoletter(-5)); // Output: "Number out of range"
console.log(numbertoletter("invalid")); // Output: "Invalid mathematical expression"
```

## Contributing

Contributions are welcome! If you'd like to contribute to the `num2let` library, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Submit a pull request detailing your changes.

## License

`num2let` is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgments

Thank you for using `num2let`. We hope this library helps simplify number representation in your applications!
