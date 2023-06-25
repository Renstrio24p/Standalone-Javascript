import Footer from "../js/Footer";
import { setupCounter } from "../js/counter";
import Rows from "../js/row";
import { Hashed } from "./HashCode";

export default function Render() {
    // Get Render's ID
    const ContainerDOM = document.getElementById('container');
    const APP = document.getElementById('count');
    const Row = document.getElementById('rows');
    const Foot = document.getElementById('footer');

    // Hash Applied
    window.addEventListener('DOMContentLoaded', () => {
        ContainerDOM.id = Hashed;
        APP.id = Hashed;
        Row.id = Hashed;
        Foot.id = Hashed;
    })

    // Render's the JS Component
    setupCounter(APP);
    Rows(Row);
    Footer(Foot);
} 