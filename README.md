meteor-highlight
================

This package is based on an old **jquery** plugin implemented by Johann Burkard
and then refined in 2009 ([look here](https://github.com/bartaz/sandbox.js/blob/master/jquery.highlight.js))
by Bartek Szopka (the author of [impress.js](https://github.com/bartaz/impress.js)).
Please keep in mind, that **the package is only designed to works with the latest rendering engine**
(i.e. the `blaze` branch).

## Instalation

Assuming your are already using **atmosphere** just type
```
mrt add highlight
```

## Usage

Since this is a **jquery** plugin you can always do things like
```javascript
$('p').highlight('some phrase');
$('p').unhighlight();
```
If you are expecting reactivity and don't want to write everything from scratch,
you can also use the `highlight` helper
```html
<template name="someTemplate">
  {{#highlight keywords="text"}}
    <p>This text will be highlighted.</p>
  {{/highlight}}
</template>
```
Please note that calling block helper with hash parameters will overwrite
the current data context. This can be solved by creating a `keywords`
helper for our template, so
```javascript
Template.someTemplate.helpers({
  keywords: function () {
    return 'text'; // or whatever ...
  }
});
```
and then the code
```html
<template name="someTemplate">
  {{#highlight}}
    <p>This text will be highlighted.</p>
  {{/highlight}}
</template>
```
will work as well.

## Customizing

The way the highlighted text look is controlled by `.highlight` class. By default it is just
```css
.highlight {
  background-color: yellow;
}
```
so if you want more fancy look just overwrite the stylesheet.

## TODO

There is still much to do so you are very wellcome to contribute :)

- better documentation
- some examples with reactivity
- inline version of the helper
