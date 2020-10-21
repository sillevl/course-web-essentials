# Variables

**Custom properties** (sometimes referred to as **CSS variables** or **cascading variables**) are entities defined by CSS authors that contain specific values to be _reused_ throughout a document. They are set using custom property notation (e.g., `--main-color: black;`) and are accessed using the `var()` function (e.g., `color: var(--main-color);`).

Complex websites have very large amounts of CSS, often with a lot of repeated values. For example, the same color might be used in hundreds of different places, requiring global search and replace if that color needs to change. Custom properties allow a value to be stored in one place, then referenced in multiple other places. An additional benefit is _semantic identifiers_. For example, `--main-text-color` is easier to understand than `#00ff00`, especially if this same color is also used in other contexts.

Custom properties are subject to the cascade and inherit their value from their parent.

## Basic usage

Declaring a custom property is done using a custom property name that begins with a double hyphen (`--`), and a property value that can be any valid CSS value. Like any other property, this is written inside a ruleset, like so:

```css
element {
  --main-bg-color: brown;
}
```

Note that the selector given to the ruleset defines the **scope** that the custom property can be used in. A common best practice is to define custom properties on the `:root` pseudo-class, so that it can be applied _globally_ across your HTML document:

```css
:root {
  --main-bg-color: brown;
}
```

::: warning Case sensitivity
Custom property names are case sensitive — `--my-color` will be treated as a separate custom property to `--My-color`.
:::

## Scoping CSS Variables

However, this doesn't always have to be the case: you maybe have a good reason for _limiting the scope_ of your custom properties.

As mentioned earlier, you use the custom property value by specifying your custom property name inside the var() function, in place of a regular property value:

```css
element {
  background-color: var(--main-bg-color);
}
```

CSS variables follow the same inheritance and cascade rules.

## Fallback values

Using the `var()` function, you can define multiple fallback values when the given variable is not yet defined;

```css
.two {
  color: var(--my-var, red); /* Red if --my-var is not defined */
}
```

## Why variables are so important

If you’re new to variables in preprocessors or native CSS, here are a few reasons why variables are important.

### Reason #1: More readable code

Without saying much, you can quickly tell how readable and more maintainable variables make any code base.

### Reason #2: Ease of change across large documents

If you have all your constants saved in a separate file, you don’t have to jump through thousands of lines of code when you want make a change to a variable.

It becomes super-easy. Just change it in one place, and voilà.

### Reason #3: You can spot typos faster

It’s a pain to search through lines of codes trying to spot an error. It’s even more annoying if the error was due to a simple typo. They are difficult to spot. The good use of variables eliminates these hassles.

To this end, readability and maintainability are the big wins.

## Example

In the next example, a specific color can be reused multiple times using CSS variables.

```css
:root {
  --vives-red: #e31d1a;
}

.btn {
  border: 2px solid var(--vives-red);
  color: var(--vives-red);
}
```

Theming webpages:

```css
.theme-light {
   --color-primary: #0060df;
   --color-secondary: #fbfbfe;
   --color-accent: #fd6f53;
   --font-color: #000000;
}

.theme-dark {
   --color-primary: #17ed90;
   --color-secondary: #243133;
   --color-accent: #12cdea;
   --font-color: #ffffff;
}
```

Checkout the result on [codepen.io](https://codepen.io/haxzie/pen/xxKNEGM)
