# Standalone-JavascriptES10

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
        `
         export default function Start(DOM) {
             DOM.innerHTML = (
               `
                 <h1>Hello World </h1>
               `
             )   
         }

       `

     - in index.js

        import Start from './Start'
        import UniqueHash from './security/HashCode'
       
        const DOM = document.querySelector('#app')
        DOM.id = UniqueHash();
        Start(DOM); // Renders the components like JSX in react.

        




