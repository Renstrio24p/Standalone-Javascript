import Start from "./start";
import './sass/index.scss';
import { Hashed } from "./security/HashCode";

const DOM = document.querySelector('#root');
DOM.id = Hashed;
Start(DOM); // Renders the Element ID