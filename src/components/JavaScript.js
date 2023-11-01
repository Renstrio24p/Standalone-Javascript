
import { GitImg, JSImg, WebpackImg } from './Images';

export default function JavaScript(DOM) {

    let counter = 0;

    function handleCounterChange(amount) {
    
        const newCount = counter + amount;
        counter = newCount < 0 ? 0 : newCount;
        counterSpan.textContent = counter;
    }

    DOM.innerHTML = (`
    <div>
        <div class="js-div">
            <div class="logo">
                <a href="http://js.dev">
                    <img src=${JSImg} class="js" alt="image" />
                </a>
            </div>
        <div>
            <h1>Standalone JavaScript</h1>
        <div class="js-div2">
          <p>Learn Vanilla JS </p>
          <div class="js">
            <img src=${JSImg} alt="js-img"/>
          </div>
          at
          <pre class="apps">src/Start.js</pre>
        </div>
        <div class="buttons">
            <button id="incrementBtn">+1</button>
            <button>Count : <span class="counter-span">${counter}</span></button>
            <button id="decrementBtn">-1</button>
        </div>
      </div>
      <div class="logo">
        <a href="http://webpack.js.org">
          <img src=${WebpackImg} class="webpack" alt="" />
        </a>
      </div>
    </div>
    <div class="footer">
      <div class="version">version 1.0.6</div>
      <div class="github">
        <div class="gitlogo">
          <img src=${GitImg} class="git" alt="github" />
        </div>
        <p>Codespace</p>
      </div>
    </div>
  </div>
      `);

    const incrementButton = DOM.querySelector('#incrementBtn');
    incrementButton.addEventListener('click', () => handleCounterChange(1));

    const decrementButton = DOM.querySelector('#decrementBtn');
    decrementButton.addEventListener('click', () => handleCounterChange(-1));

    const counterSpan = DOM.querySelector('.counter-span');

}
