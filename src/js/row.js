import styles from '../sass/modules/app.module.scss';

export default function Rows(rows){
    rows.innerHTML = `
        <div class=${styles.box}>
            <p>supports ES6+</p>
        </div>
        <div class=${styles.box}>
            <p>Modular SCSS</p>
        </div>
        <div class=${styles.box}>
            <p>Web Security Features</p>
        </div>
    `
}