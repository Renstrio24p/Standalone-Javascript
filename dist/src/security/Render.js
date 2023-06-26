import Footer from "../js/Footer";
import { setupCounter } from "../js/counter";
import Rows from "../js/row";
import UniqueHash from "./HashCode";

export default function Render() {
    // Get Render's ID
    const ContainerDOM = document.getElementById('container');
    const APP = document.getElementById('count');
    const Row = document.getElementById('rows');
    const Foot = document.getElementById('footer');

    // Hash Applied
    window.addEventListener('DOMContentLoaded', () => {
        ContainerDOM.id = UniqueHash();
        APP.id = UniqueHash();
        Row.id = UniqueHash();
        Foot.id = UniqueHash();
    })

    // Render's the JS Component
    setupCounter(APP);
    Rows(Row);
    Footer(Foot);
} 