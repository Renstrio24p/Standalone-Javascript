![image](https://github.com/Renstrio24p/Standalone-JavascriptES10/assets/123795328/45f3a25f-9489-4498-8b97-e910ac18ae3a)﻿# Standalone-JavascriptES10

## Pure Vanilla Javascript ECMAScript 10

Standalone Javascript - is a tool where it can renders the same thing as react with Major differences since JS is a Imperative Style.

Features

  - Modular SCSS / Sass / CSS
  - Web Security
  - ES6+ Rendering System

Web Security
  - Add Hashing Generator to Hide the Actual id
  - No Caches Policy

     - Example code: Start.js
        
        
       

     - in index.js

        import Start from './Start'
        import UniqueHash from './security/HashCode'
       
        const DOM = document.querySelector('#app')
        DOM.id = UniqueHash();
        Start(DOM); // Renders the components like JSX in react.

        




