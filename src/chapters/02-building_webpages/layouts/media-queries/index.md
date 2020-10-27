
# Media Queries

**Media queries** are useful when you want to modify your site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width).

Media queries are used for the following:

* To conditionally apply styles with the CSS `@media` and `@import` at-rules.
* To target specific media for the `<link>`, `<source>`, and other HTML elements.
* To test and monitor media states using the `Window.matchMedia()` and `MediaQueryList.addListener()` JavaScript methods.

## Syntax

A media query is composed of an optional media type and any number of *media feature expressions*. Multiple queries can be combined in various ways by using *logical operators*. Media queries are case-insensitive.

A media query computes to true when the media type (if specified) matches the device on which a document is being displayed and all media feature expressions compute as true. Queries involving unknown media types are always false.

### Media types

Media types describe the general category of a device. Except when using the `not` or `only` logical operators, the media type is optional and the `all` type will be implied.

* `all`: Suitable for all devices.
* `print`: Intended for paged material and documents viewed on a screen in print preview mode. (Please see paged media for information about formatting issues that are specific to these formats.)
* `screen`: Intended primarily for screens.
* `speech`: Intended for speech synthesizers.

### Media features

*Media features* describe specific characteristics of the user agent, output device, or environment. Media feature expressions test for their presence or value, and are entirely optional. Each media feature expression must be surrounded by parentheses.

* `width`: Width of the viewport
* `height`: Height of the viewport
* `aspect-ratio`: Width-to-height aspect ratio of the viewport
* `orientation`: Orientation of the viewport
* `resolution`: Pixel density of the output device

More media features are defined at: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features)

### Logical operators

The logical operators `not`, `and`, and `only` can be used to compose a complex media query. You can also combine multiple media queries into a single rule by separating them with commas.

* `and`: The `and` operator is used for combining multiple media features together into a single media query, requiring each chained feature to return true in order for the query to be true. It is also used for joining media features with media types.
* `not`: The `not` operator is used to negate a media query, returning true if the query would otherwise return false. If present in a comma-separated list of queries, it will only negate the specific query to which it is applied. If you use the not operator, you must also specify a media type.
* `only`: The `only` operator is used to apply a style only if an entire query matches, and is useful for preventing older browsers from applying selected styles. If you use the only operator, you must also specify a media type.
* `,` (comma): Commas are used to combine multiple media queries into a single rule. Each query in a comma-separated list is treated separately from the others. Thus, if any of the queries in a list is true, the entire media statement returns true. In other words, lists behave like a logical `or` operator.

## Targeting media types

Media types describe the general category of a given device. Although websites are commonly designed with screens in mind, you may want to create styles that target special devices such as printers or audio-based screenreaders. For example, this CSS targets printers:

```css
@media print { ... }
```

You can also target multiple devices. For instance, this `@media` rule uses two media queries to target both screen and print devices:

```css
@media screen, print { ... }
```

See Media types for a list of all media types. Because they describe devices in only very broad terms, just a few are available; to target more specific attributes, use media features instead.

## Targeting media features

Media features describe the specific characteristics of a given user agent, output device, or environment. For instance, you can apply specific styles to widescreen monitors, computers that use mice, or to devices that are being used in low-light conditions. This example applies styles when the user's primary input mechanism (such as a mouse) can hover over elements:

```css
@media (hover: hover) { ... }
```

Many media features are range features, which means they can be prefixed with "`min-`" or "`max-`" to express "**minimum condition**" or "**maximum condition**" constraints. For example, this CSS will apply styles only if your browser's viewport width is equal to or narrower than 12450px:

```css
@media (max-width: 12450px) { ... }
```

If you create a media feature query without specifying a value, the nested styles will be used as long as the feature's value is not zero (or none, in Level 4). For example, this CSS will apply to any device with a color screen:

```css
@media (color) { ... }
```

If a feature doesn't apply to the device on which the browser is running, expressions involving that media feature are always false. For example, the styles nested inside the following query will never be used, because no speech-only device has a screen aspect ratio:

```css
@media speech and (aspect-ratio: 11/5) { ... }
```

## Creating complex media queries

Sometimes you may want to create a media query that depends on multiple conditions. This is where the logical operators come in: `not`, `and`, and `only`. Furthermore, you can combine multiple media queries into a comma-separated list; this allows you to apply the same styles in different situations.

In the previous example, we've already seen the `and` operator used to group a media *type* with a media *feature*. The `and` operator can also combine multiple media features into a single media query. The `not` operator, meanwhile, negates a media query, basically reversing its normal meaning. The `only` operator prevents older browsers from applying the styles.

### Combining multiple types or features

The `and` keyword combines a media feature with a media type or other media features. This example combines two media features to restrict styles to landscape-oriented devices with a width of at least 30 ems:

```css
@media (min-width: 30em) and (orientation: landscape) { ... }
```

To limit the styles to devices with a screen, you can chain the media features to the `screen` media type:

```css
@media screen and (min-width: 30em) and (orientation: landscape) { ... }
```

### Testing for multiple queries

You can use a comma-separated list to apply styles when the user's device matches any one of various media types, features, or states. For instance, the following rule will apply its styles if the user's device has either a minimum height of 680px or is a screen device in portrait mode:

```css
@media (min-height: 680px), screen and (orientation: portrait) { ... }
```

Taking the above example, if the user had a printer with a page height of 800px, the media statement would return true because the first query would apply. Likewise, if the user were on a smartphone in portrait mode with a viewport height of 480px, the second query would apply and the media statement would still return true.

### Inverting a query's meaning

The `not` keyword inverts the meaning of an entire media query. It will only negate the specific media query it is applied to. (Thus, it will not apply to every media query in a comma-separated list of media queries.) The `not` keyword can't be used to negate an individual feature query, only an entire media query. The `not` is evaluated last in the following query:

```css
@media not all and (monochrome) { ... }
```

... so that the above query is evaluated like this:

```css
@media not (all and (monochrome)) { ... }
```

... rather than like this:

```css
@media (not all) and (monochrome) { ... }
As another example, the following media query:
```

```css
@media not screen and (color), print and (color) { ... }
```

... is evaluated like this:

```css
@media (not (screen and (color))), print and (color) { ... }
```

 Source: [Mozilla Developer Center](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) Creative Commons Attribution-ShareAlike license ([CC-BY-SA](https://creativecommons.org/licenses/by-sa/2.5/)), v2.5

<!-- https://www.w3schools.com/css/css_rwd_mediaqueries.asp -->