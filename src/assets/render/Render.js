import Footer from "../../components/Footer";
import { setupCounter } from "../../components/counter";
import Rows from "../../components/row";
import UniqueHash from "../security/HashCode";

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