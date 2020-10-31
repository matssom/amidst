<img src="./banner.jpg">

## What is Amidst?

Amidst is a `css` reset library with a hint of `js` that makes your webapps more accessible with only 1 line of code. The goal of amidst is NOT to be a replacement of other libraries like `normailze.css`, but to add accessible features to them instead. The bundle file that includes both the `css` and `js` is under 6kb in size and if you choose to include the `css` and `js` separately, the total size comes in under 2kb.

<br>

## What does it do?

There are very few things you need to think about when using Amidst, but here are a few things Amidst does that is worth knowing about:

- Preventing the page-width from jumping when moving from a non-scrollable page to a scrollable one. This issue mostly affects windows users.
- Enhances the behaviour when tabbing through a site. Automatically applies outline to focused elements when tabbing without disturbing the usual behaviour when clicking around on the webpage.
- Sets the value `1rem = 10px` without disturbing the accessability features of the user agent stylesheet. This enables developers to calculate relative font-sizes much easier. (`1.8rem = 18px` etc...)

For more information, look at the fully commented `amidst.css` file in the `src` foler of [this](https://github.com/matssom/amidst.git) repository.

<br>

## Installation
<hr>

:warning: **WARNING:**
> This library is still in early development and current features may brake in future updates.

<br>

Amidst can be used on static and dynamic pages. You can either import the `css` and `js` separately, or just include the js bundle that also includes the styles.

<br>

:exclamation: **Note:**
Amidst works with `normalize.css`, but include `normalize.css` **first** for the best results.

<br>

### With npm:
<hr>

Install the package:

```js
npm install amidst --save
```

Import the package in your root `index.js` file:

```js 
import 'amidst';
```

:exclamation: **Note:**
If you want to minimize the file footprint (2kb instead of 6kb), you can include the js and css separately:

```js
import { amidstCSS, amidstJs } from 'amidst';
```

<br>

### Include locally:
<hr>

Download `amidst.bundle.js` from the root of [this](https://github.com/matssom/amidst.git) repository.

Link to the file locally in the head of your `index.html` file:

```html
<head>
    ...

    <script src="./path/to/amidst.bundle.js"></script>
    
    ...
</head>
```

<br>

:exclamation: **Note:**
You can optionally download and include the stylesheet `amidst.css` in the head of your `index.html` and include the `amidst.js` file to the bottom of the `<body>` tag if you have problems with [flashes of unstyled content](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) or want a smaller file footprint (2kb instead of 6kb). By default, the stylesheet is included in the script tag.

```html
<head>
    ...
    
    <link rel="stylesheet" href="./path/to/amidst.css">
    
    ...
</head>
<body>
    ...

    <script src="./path/to/amidst.js"></script>
</body>
```
