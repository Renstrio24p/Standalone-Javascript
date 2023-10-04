import styles from './assets/sass/modules/app.module.scss'
import Render from "./assets/render/Render";
import { ES10 } from "./components/es10";


export default function Start(DOM) {
     
    DOM.innerHTML = (
        `
        <div id='container' class=${styles['d-flex-center-max']}>

            <div class=${styles['d-flex-center-gap-20']}>
                <a href="https://javascript.info/">
                <img 
                    class=${styles['js-image']} 
                    src='images/javascript.png' 
                    alt='javascript logo'   
                /></a>
                <h1 class=${styles['font-weight-400']}>Standalone - Javascript</h1>
                <a href="https://webpack.js.org/">
                    <img class=${styles['webpack-image']} 
                         src='images/webpack.png' 
                         alt='webpack logo'
                    /></a>
            </div>
            <div>
                <button class=${styles['button-style']} id='count'></button>
            </div>
            <div  class=${styles['d-flex-gap-20']} id="rows"></div>
            <footer class=${styles['footer-abs-between']} id="footer"></footer>
        
        </div>

        `
    )

    ES10();

  Render(); // Renders all the Element ID's
}