# Pseudo Classes

Pseudo-classes are CSS classes used to define the state of an element. They target elements that can’t be targeted with combinators or simple selectors like id or class. They are used to select elements based on their attributes, states, and relative position.
Pseudo-class Syntax

A pseudo-class has a simple syntax. They are identified by a colon (`:`) placed just after a CSS selector.

```css
selector:pseudo-class {
 property:value;
}
```

Lets take a look at the HTML example below:

```html
<div class="container">
  <h1>Top 5 Languages </h1>
  <p>In the last year, developers collaborated in more than
    370 primary languages on GitHub. The following are the
    the top five languages with more contributions on GitHub
  </p>
  <div class="list">
    <ul>
      <li class="list-item"> <a href="#"> Javascript </a> </li>
      <li class="list-item"> <a href="#"> Python </a> </li>
      <li class="list-item"> <a href="#"> Java </a> </li>
      <li class="list-item"> <a href="#"> PHP </a> </li>
      <li class="list-item"> <a href="#"> C# </a> </li>
    </ul>
  </div
</div>
```

## Dynamic pseudo-classes

These are the link-related pseudo-class states which were included in CSS1. Each of these states can be applied to an element, usually `<a>`. They include;

Pseudo class |  Description
--- | ---
`:link` | This only selects `<a>` tags with `href` attributes. It will not work if it is missing.
`:active` | Selects the link while it is being activated (being clicked on or otherwise activated). For example, for the "pressed" state of a button-style link.
`:visited` | Selects links that have already been visited by the current browser.
`:hover` | This is the most commonly used state. When the mouse cursor rolls over a link, that link is in its hover state and this will select it.

Referring to our HTML example, we would like to change the background of `<li>` when hovered, give specific colors to all links, active and visited links.

```css
.list-item:hover {
  background-color: aliceblue;
}

.list a:link{
  color: black;
}

.list a:active{
  color: green;
}

.list a:visited{
  color: red;
}
```

## Structural pseudo-classes

These exciting positioning states/selectors were introduced in CSS2. They target elements according to their position in the document tree and relation to other elements. They include;

Pseudo class |  Description
--- | ---
`:root` | This selects the element that is at the root of the document specifically the `<html>` element unless you are specifically working in some other environment that somehow also allows CSS.
`:first-child` | Selects the first element within a parent.
`:last-child` | Selects the last element within a parent.
`:nth-child()` | Selects elements based on a provided algebraic expression (e.g. “2n” or “4n-1”). For example, you could use ‘2n’ for selecting even positions and ‘2n-1’ for odd positions. Has the ability to do other things like select “every fourth element”, “the first six elements”, and things like that. Covered in more detail here.
`:first-of-type` |  Selects the first element of this type within any parent. If for example, you have two `div`s, each with a paragraph, link, paragraph, link. Then div a:first-of-type would select the first link inside the first div and the first link inside the second div.
`:last-of-type` | This works the same as above but it then selects the last element instead of the first element.
`:nth-of-type()` | Works like `:nth-child`, but it is used in places where the elements at the same level are of different types. For example, if inside a `div` you had a number of paragraphs and links. You wanted to select all the odd paragraphs.
`:nth-child` | wouldn’t work in this scenario, therefore, you use `div p:nth-of-type(odd)`.
`:only-of-type` | Selects the element if and only if it is one of its kind within the current parent.
`:nth-last-of-type()` | This works like `:nth-of-type`, but it counts up from the bottom instead of the top.
`:nth-last-child()` | This works like `:nth-child`, but it counts up from the bottom instead of the top.

So hope you’ve understood the structural pseudo-classes. Let’s try to apply them in our example that we created earlier. We are going to give a background of `slategrey` to every odd `<li>` element. We shall demonstrate it in two ways giving the same output.

Method one: Using the `:nth-child()`

```css
.list-item:nth-child(2n-1){
 background-color: slategrey;
}
```

Method two: Using the `:nth-of-type()`

```css
.list-item:nth-of-type(odd){
 background-color: slategrey;
}
```

Other pseudo-class selectors that will not be covered in detail in this article include: `:enabled`, `:disabled`, `:checked`, `:target`, `:focus`, `:required`, `:optional`, `:not()`, `:empty`

## Pseudo-Elements

Content-related pseudo-elements effectively create new elements that are not specified in the markup of the document and can be manipulated much like a regular element. This introduces huge benefits for creating cool effects with minimal markup, also aiding significantly in keeping the presentation of the document out of the HTML and in CSS where it belongs.

Difference between Pseudo-classes and Pseudo-elements:

* A _pseudo-class_ is a selector that assists in the selection of something that cannot be expressed by a simple selector, for example `:hover`.

* A _pseudo-element_, however, allows us to create items that do not normally exist in the document tree, for example `::after`.

So you could simply identify a pseudo-class by a single colon (`:`) and a pseudo-element by two colons (`::`).

Pseudo-elements include;

Pseudo element |  Description
--- | ---
`::before` | This enables us to add content before a certain element. For example, adding an opening quote before a blockquote.
`::after` | This enables us to add content after a certain element. For example, a closing quote to a blockquote. Also used commonly for the clearfix, where an empty space is added after the element which clears the float without any need for extra HTML markup.
`::first-letter` | This is used to add a style to the first letter of the specified selector. For example, to create a drop cap.

example:

```css
.list-item::after {
  content: '➡️';
  display: inline-block;
  height: 8px;
  margin-left: 4px;  
  width: 16px;
}
```

The `content` property here is used to add content to the pseudo element (which is not defined in the HTML source HTML document)

You can run the live project here <https://codepen.io/olukadenis/pen/wvvZRdN>

<!-- Source: https://hackernoon.com/understanding-pseudo-class-selectors-mg443t89 -->
