# Transitions

**CSS transitions** provide a way to control animation speed when `changing CSS properties`. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized.

Animations that involve transitioning between two states are often called implicit transitions as the states in between the start and final states are implicitly defined by the browser.

![Transitions Principle](TransitionsPrinciple.png)

CSS transitions let you decide which properties to animate (by listing them explicitly), when the animation will start (by setting a delay), how long the transition will last (by setting a duration), and how the transition will run (by defining a timing function, e.g. linearly or quick at the beginning, slow at the end).

## Not all CSS properties can be transitioned

The Web author can define which property has to be animated and in which way. This allows the creation of complex transitions. As it doesn't make sense to animate some properties, the [list of animatable properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) is limited to a finite set.

For example it makes sense to transition between two `font-size` property values, but not between `font-family` property values.

## Defining transitions

CSS Transitions are controlled using the shorthand transition property. This is the best way to configure transitions, as it makes it easier to avoid out of sync parameters, which can be very frustrating to have to spend lots of time debugging in CSS.

```text
transition: <property> <duration> <timing-function> <delay>;
```

You can control the individual components of the transition with the following sub-properties:

### `transition-property`

Specifies the name or names of the CSS properties to which transitions should be applied. Only properties listed here are animated during transitions; changes to all other properties occur instantaneously as usual.

### `transition-duration`

Specifies the duration over which transitions should occur. You can specify a single duration that applies to all properties during the transition, or multiple values to allow each property to transition over a different period of time.

### `transition-timing-function`

Specifies a function to define how intermediate values for properties are computed. Timing functions determine how intermediate values of the transition are calculated. Most timing functions can be specified by providing the graph of the corresponding function, as defined by four points defining a cubic bezier. You can also choose easing from [Easing Functions Cheat Sheet](https://easings.net/).

### `transition-delay`

Defines how long to wait between the time a property is changed and the transition actually begins.

## Examples

In this example, the fontsize will change when 'hovering' over an element with id `delay`. Only the `font-size` property will be transformed after 2 seconds, and the transition will take 4 seconds to complete.

```css
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

In the next example, multiple properties will all be transitioned with a duration of 2 seconds. All transitions happen at once.

```css
.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
    background-color: #FFCCCC;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
}
```
