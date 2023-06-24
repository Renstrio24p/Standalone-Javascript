import { setupCounter } from "./js/counter"

export default function Start(DOM) {

    function Add(a,b){
        return a + b;
    }

    DOM.innerHTML = (
        `<div>
            <h1>Hello Javascript from Webpack</h1>
            <button id='count'></button>
            <p>${Add(1,2)}</p>
        </div>`
    )

    setupCounter(document.getElementById('count'));
}