<img src="./banner.jpg">

## What is Amidst?

Amidst is a styling library that makes your webapps more accessible and consistent with only 1 line of code. Amidst will also **(in the future)** expose styling tools and classes that you can take advantage of to achieve a more responsive, accessible and consistent look across your app.

<br>

## What do I need to know?

There are very few things you need to think about when using Amidst, but here are a few things Amidst does that is worth knowing about:

- Preventing the page-with from jumping when moving from a non-scrollable page to a scrollable one. This issue mostly affects windows users.
- Enhances the behaviour when tabbing through a site. Automatically applies outline to focused elements when tabbing without disturbing the usual behaviour when clicking around on the webpage.
- Sets the value `1rem = 10px` without disturbing the accessability features of the user agent stylesheet. This enables developers to calculate relative font-sizes much easier. (`1.8rem = 18px` etc...)

For more information, look at the fully commented `amidst.css` file in the root of [this](https://github.com/matssom/amidst.git) repository.

<br>

## Installation
<hr>

:warning: **WARNING:**
> This library is in very early development and current features may brake in future updates.

<br>

Amidst can be used on static and dynamic pages. The library was designed with `react` in mind; however, does not depend on it.

<br>

:exclamation: **Note:**
Amidst works with `normalize.css`, but include `normalize.css` **first** for the best results.

<br>

### With npm:
<hr>

Install the package:

```.js
npm install amidst --save
```

Import the package in your root `index.js` file:

```.js 
import amidst from 'amidst';
```

<br>

### Include locally:
<hr>

Download `amidst.js` from the root of [this](https://github.com/matssom/amidst.git) repository.

Link to the file locally in the head of your `index.html` file:

```.html
<head>
    ...

    <script src="./path/to/amidst.js"></script>
    
    ...
</head>
```

<br>

:exclamation: **Note:**
You can optionally download and include the stylesheet in the head of your `index.html` and move the `amidst.js` file to the bottom of the `<body>` tag if you have problems with [flashes of unstyled content](https://en.wikipedia.org/wiki/Flash_of_unstyled_content). By default, the stylesheet is included in the script tag.

```.html
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
<br>

## Configuration

There will come configuration options for sertain styles and behaviours in the future.
