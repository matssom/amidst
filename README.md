<img src="./banner.jpg">

## What is Amidst?

Amidst is a styling library that makes your webapps more accessible and consistent with only 1 line of code. Amidst will also **(in the future)** expose styling tools and classes that you can take advantage of to achieve a more responsive, accessible and consistent look across your app.

**Do you remember to think about the user amidst the thousands of lines of code in your project?**

<br>

## Installation
<hr>

:warning: **WARNING:**
> This library is currently in very early development and current features may brake in future updates.

Amidst can be used on static and dynamic pages. The library was designed with `react` in mind; however, does not depend on it.

:exclamation: **Note:**
Amidst works with normalize.css, but include normalize.css first for the best results.

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

    <script src="./path/to/amidst.js">
    
    ...
</head>
```

:exclamation: **Note:**
You can optionally download and include the stylesheet in the head of your `index.html` and move the `amidst.js` file to the bottom of the `<body>` tag if you have problems with [flashes of unstyled content](https://en.wikipedia.org/wiki/Flash_of_unstyled_content).

```.html
<head>
    ...

    <link rel="stylesheet" href="./path/to/amidst.css">
    
    ...
</head>
<body>
    ...

    <script src="./path/to/amidst.js">

    ...
</body>
```