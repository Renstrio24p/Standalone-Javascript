import Footer from "./js/Footer";
import Navbar from "./js/Navbar";
import { setupCounter } from "./js/counter"
import { ES10 } from "./js/es10";
import Rows from "./js/row";
import styles from './sass/modules/app.module.scss'

export default function Start(DOM) {
    // Function here
    let APP,
        Nav,
        Row,
        Foot;

    ES10();


    DOM.innerHTML = (
        `
        <?php echo 'PHP in Javascript' ?>
        <div class=${styles['d-flex-center-max']}>
            <div class=${styles['d-flex-center-gap-20']}>
                <a href="https://javascript.info/"><img class=${styles['js-image']} src='./src/images/javascript.png' alt='javascript logo'/></a>
                <h1 class=${styles['font-weight-400']}>Standalone - Javascript ES10</h1>
                <a href="https://webpack.js.org/"><img class=${styles['webpack-image']} src='./src/images/webpack.png' alt='webpack logo'/></a>
            </div>
            <div>
                <button class=${styles['button-style']} id='count'></button>
            </div>
            <div  class=${styles['d-flex-gap-20']} id="rows"></div>
            <footer class=${styles['footer-abs-between']} id="footer"></footer>
        </div>

        
        `
    )

    /*
        this field goes to render an element from a funtion
    */
    APP = document.getElementById('count');
    setupCounter(APP);

    // // Rendering Navbar
    // Nav = document.getElementById('navbar');
    // Navbar(Nav);

    Row = document.getElementById('rows');
    Rows(Row);

    Foot = document.getElementById('footer');
    Footer(Foot);
}