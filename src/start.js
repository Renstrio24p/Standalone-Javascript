import classNames from "classnames/bind";
import { ES10 } from "./js/es10";
import styles from './sass/modules/app.module.scss'
import Render from "./security/Render";

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
                    src='./src/images/javascript.png' 
                    alt='javascript logo'
                    width="100"
                    height="100"    
                /></a>
                <h1 class=${cx('font-weight-400')}>Standalone - Javascript ES10</h1>
                <a href="https://webpack.js.org/">
                    <img class=${cx('webpack-image')} 
                         src='./src/images/webpack.png' 
                         alt='webpack logo'
                         width="150"
                         height="150"  
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