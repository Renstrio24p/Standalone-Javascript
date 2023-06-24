import styles from '../sass/modules/app.module.scss'

export default function Navbar(Nav){

    let a = 1, b = 2;

    function Add(a,b){
        return a + b;
    }

    Nav.innerHTML = `
          <h1 class=${styles['font-weight-400']}>Navbar is Rendered and the sum between ${a} and ${b} is : ${Add(a,b)}</h1>
          <ul class=${styles['d-flex-gap-10']}>
            <li> Home  </li>
            <li> About  </li>
            <li> Contact  </li>
          </ul>
    `
}