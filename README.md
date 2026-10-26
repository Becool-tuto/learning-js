# JavaScript Learning Notes

A collection of small browser-based exercises exploring JavaScript fundamentals, the DOM, jQuery, and a jQuery UI plugin. This README gathers the main concepts demonstrated in the files and links to the examples.

## How to explore the examples

Open an HTML file in a browser, or serve this folder with a local static web server. The jQuery lessons load libraries from a CDN, so an internet connection is required for those pages. Each exercise is independent; open the matching HTML page to try it.

## Concepts covered

### 1. JavaScript in a web page

- Run JavaScript from an HTML `script` element or load a separate `.js` file with `src`.
- React to page load and user actions such as clicking a button.
- Use browser-provided APIs such as `alert`, `console`, `Date`, and `document`.
- Read text from an input, validate that it is not empty, and update page content.

Examples: [HelloWorld.html](HelloWorld.html), [C9JS_02.html](C9JS_02.html), [C9JS_11.html](C9JS_11.html).

### 2. Variables, values, operators, and expressions

- Declare variables and assign or reassign values.
- Work with strings, numbers, and booleans; inspect a value's type with `typeof`.
- Use arithmetic operators (`+`, `-`, `*`, `/`), increment/decrement, and compound assignment (`+=`, `-=` and related operators).
- Combine strings and values, and observe how JavaScript converts values in expressions.

Example: [C9JS_05.html](C9JS_05.html).

### 3. Decisions and branching

- Choose a path with `if`, `else if`, and `else`.
- Compare values with relational operators and strict equality/inequality (`===`, `!==`).
- Combine or negate conditions with `&&` and `!`.
- Select among cases with `switch`, including cases based on the current hour.
- The examples also introduce the conditional (ternary) operator.

Example: [C9JS_06.html](C9JS_06.html).

### 4. Functions

- Declare and call functions, pass parameters, and return a result.
- Store a function in a variable and use an anonymous function.
- Read a variable number of arguments through the legacy `arguments` object.
- Create an immediately invoked function expression (IIFE).

Example: [C9JS_07.html](C9JS_07.html).

### 5. Arrays and loops

- Create arrays, access indexed items, and mix values such as strings, numbers, and dates.
- Repeat work using `while`, `do...while`, and `for` loops.
- Use `for...in` to enumerate properties in the examples.

Examples: [C9JS_08.html](C9JS_08.html), [C9JS_09.html](C9JS_09.html).

### 6. Scope

- See how variables declared with `var` are scoped to a function rather than to a block.
- Use an IIFE to keep a variable local instead of placing it in the global scope.

Example: [C9JS_10.html](C9JS_10.html).

### 7. Objects and constructors

- Group related data and behavior in object literals.
- Read and change properties; use nested objects, arrays of objects, and object methods.
- Inspect properties and add a property dynamically.
- Define a constructor function and create objects with `new`.

Examples: [script.js](script.js), [C9JS_12.html](C9JS_12.html).

### 8. The DOM and browser events

- Find elements by ID or tag name and inspect relationships in the DOM tree.
- Read or update element content and attributes, and navigate parent/child/sibling nodes.
- Attach a function to a button click and respond to user interaction.

Examples: [C9JS_13.html](C9JS_13.html), [script13.js](script13.js).

### 9. jQuery: selecting and changing page elements

- Wait until the document is ready before accessing page elements.
- Select elements by ID, tag, class, attributes, and combinations of selectors.
- Filter selections by text, position, empty content, or the absence of an attribute.
- Traverse related elements, such as a previous sibling or a parent.
- Add content before or after existing content, change attributes, and apply CSS classes.

Examples: [C9JS_14.html](C9JS_14.html), [script14.js](script14.js), [C9JS_15.html](C9JS_15.html), [script15.js](script15.js), [style14.css](style14.css), [style15.css](style15.css).

### 10. jQuery events, effects, and simple state

- Handle click and hover events.
- Keep a score in a variable, update the displayed value, and reset it in response to an action.
- Show and hide elements and use simple effects such as `fadeOut`.
- Change appearance by adding and removing CSS classes.

Example: [C9JS_16.html](C9JS_16.html), [script16.js](script16.js), [style16.css](style16.css), and [cat.jpg](cat.jpg).

### 11. jQuery UI plugins

[C9JS_17.html](C9JS_17.html) introduces loading jQuery UI and provides tab-shaped markup as a plugin example. The repository does not currently contain the referenced `script17.js` initializer, so the interactive tabs may not work as intended.

## Lesson index

| File | Topic |
| --- | --- |
| [HelloWorld.html](HelloWorld.html) | A first browser alert on page load |
| [C9JS_02.html](C9JS_02.html) | Input validation and updating a heading |
| [C9JS_05.html](C9JS_05.html) | Variables, types, operators, and expressions |
| [C9JS_06.html](C9JS_06.html) | Conditional logic and `switch` |
| [C9JS_07.html](C9JS_07.html) | Functions and arguments |
| [C9JS_08.html](C9JS_08.html) | Arrays |
| [C9JS_09.html](C9JS_09.html) | Loops |
| [C9JS_10.html](C9JS_10.html) | Global and function scope |
| [C9JS_11.html](C9JS_11.html) | Loading an external JavaScript file |
| [C9JS_12.html](C9JS_12.html) | Object literals |
| [C9JS_13.html](C9JS_13.html) | The Document Object Model (DOM) |
| [C9JS_14.html](C9JS_14.html) | Getting started with jQuery |
| [C9JS_15.html](C9JS_15.html) | jQuery selectors |
| [C9JS_16.html](C9JS_16.html) | jQuery events and effects |
| [C9JS_17.html](C9JS_17.html) | jQuery UI plugin example |

## Notes for modern JavaScript

These are introductory, older-style exercises. When applying the ideas in new projects, prefer `const` and `let` over `var`, `===` over loose equality, and `for...of` or array methods for iterating arrays. Prefer `addEventListener` for DOM events and `textContent` for plain text rather than inline event attributes or `innerHTML`. Use object literals for simple records; use classes or modern constructor patterns only when they fit the design. jQuery remains useful in existing projects, but modern browsers can do most of these DOM and event tasks natively.
