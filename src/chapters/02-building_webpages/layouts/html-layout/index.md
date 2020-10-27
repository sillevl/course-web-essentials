# HTML Layout elements

HTML 5 introduces a new set of elements that help define the structure of a page
In this chapter you will see:

* The new HTLM5 layout elements and their uses
* How they offer helpful alternatives to the `<div>` element
* How to ensure older browsers recognize these elements

## Traditional HTML layouts

For a long time, the `<div>` element is used to group together related elements on a page (such as headers, articles, footers or sidebars)
Authors used class and id attributes to indicate the role of the `<div>` element in the structure of the page

![Traditional layouts (browserframe)](./img/traditional-layout.png)

## HTML 5 layout elements

HTML5 introduces a new set of elements that allow you to divide up the parts of a page. The names of these elements indicate the kind of content you will find in them

* `<header>`
* `<nav>`
* `<aside>`
* `<footer>`
* `<article>`
* …

![Modern HTML layout (browserframe)](./img/html5-layout.png)

### Headers and footers

The `<header>` and `<footer>` elements can be used for:

* The main header and footer that appears on the top or bottom of every page on the site
* A header or footer for an individual `<article>` or `<section>` within the page

```html
<header>
  <h1>Yoko's Kitchen</h1>
  <nav>
    <ul>
      <li><a href="" class="current">home</a></li>
      <li><a href="">classes</a></li>
      <li><a href="">catering</a></li>
      <li><a href="">about</a></li>
      <li><a href="">contact</a></li>
    </ul>
  </nav>
</header>
```

```html
<footer>
  &copy; 2011 Yoko's Kitchen
</footer>
```

### Navigation

The `<nav>` element is used to contain the major navigational blocks on the site such as primary site navigation

```html
<nav>
  <ul>
    <li><a href="" class="current">home</a></li>
    <li><a href="">classes</a></li>
    <li><a href="">catering</a></li>
    <li><a href="">about</a></li>
    <li><a href="">contact</a></li>
  </ul>
</nav>
```

### Articles

The `<article>` element acts as a container for any section of a page that could stand alone and potentially syndicated (RSS feeds). E.g: individual blog entries, a comment or forum post or any other independent piece of content

Pages can contain several articles, each would live inside its own `<article>` element. It even can be nested inside other `<article>` elements

```html
<article>
  <figure>
    <img src="images/bok-choi.jpg" alt="Bok Choi" />
    <figcaption>Bok Choi</figcaption>
  </figure>
    <h2>Japanese Vegetarian</h2>
  <p>A five week introduction to traditional
    Japanese vegetarian meals, teaching you a
    selection of rice and noodle dishes.</p>
</article>
<article>
  <figure>
    <img src="images/teriyaki.jpg"
      alt="Teriyaki sauce" />
    <figcaption>Teriyaki Sauce</figcaption>
  </figure>
  <h2>Sauces Masterclass</h2>
  <p>An intensive one-day course looking at how to
    create the most delicious sauces for use in a
    range of Japanese cookery.</p>
</article>
```

### Asides

The `<aside>` element has two purposes, depending on whether its inside an `<article>` element or not

* When the `<aside>` element is used inside an `<article>` element, it should contain information that is related to the article but is not essential to its overall meaning
* When the `<aside>` element is used outside an `<article>` it acts as a container for content that is related to the entire page. E.g: links to other sections of the site, a list of recent posts, a search box…

```html
<aside>
  <section class="popular-recipes">
    <h2>Popular Recipes</h2>
    <a href="">Yakitori (grilled chicken)</a>
    <a href="">Tsukune (minced chicken patties)</a>
    <a href="">Okonomiyaki (savory pancakes)</a>
    <a href="">Mizutaki (chicken stew)</a>
  </section>
  <section class="contact-details">
    <h2>Contact</h2>
    <p>Yoko's Kitchen<br />
      27 Redchurch Street<br />
      Shoreditch<br />
      London E2 7DP</p>
  </section>
</aside>
```

### Section

The `<section>` element is groups related content together and typically each section would have it’s own heading. E.g: a site with different sections such as latest news, top products and newsletter signup. It should not be used to wrap the entire page

```html
<section class="popular-recipes">
  <h2>Popular Recipes</h2>
  <a href="">Yakitori (grilled chicken)</a>
  <a href="">Tsukune (minced chicken patties)</a>
  <a href="">Okonomiyaki (savory pancakes)</a>
  <a href="">Mizutaki (chicken stew)</a>
</section>
<section class="contact-details">
  <h2>Contact</h2>
  <p>Yoko's Kitchen<br />
    27 Redchurch Street<br />
    Shoreditch<br />
    London E2 7DP</p>
</section>
```
