import styles from '../sass/modules/app.module.scss';

export default function Footer(Footer){

    Footer.innerHTML = `
        <span>Version 1.0.2</span>
        <div class=${styles['d-flex-between']}>
            <img class=${styles['github_img']} src='./src/images/github.png' alt='github' />
            <span>Codespaces</span>
        </div>
    `
}