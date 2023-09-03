import classNames from "classnames/bind";
import styles from './assets/sass/modules/app.module.scss'
import Render from "./assets/render/Render";
import { ES10 } from "./components/es10";

export const cx = classNames.bind(styles);

export default function Start(DOM) {
    // Function here
    
    ES10();
 
    DOM.innerHTML = (
        `
        <div id='container' class=${cx('d-flex-center-max')}>

            <div class=${cx('d-flex-center-gap-20')}>
                <a href="https://javascript.info/">
                <img 
                    class=${cx('js-image')} 
                    src='images/javascript.png' 
                    alt='javascript logo'   
                /></a>
                <h1 class=${cx('font-weight-400')}>Standalone - Javascript</h1>
                <a href="https://webpack.js.org/">
                    <img class=${cx('webpack-image')} 
                         src='images/webpack.png' 
                         alt='webpack logo'
                    /></a>
            </div>
            <div>
                <button class=${cx('button-style')} id='count'></button>
            </div>
            <div  class=${cx('d-flex-gap-20')} id="rows"></div>
            <footer class=${cx('footer-abs-between')} id="footer"></footer>
        
        </div>

        `
    )

  Render(); // Renders all the Element ID's
}