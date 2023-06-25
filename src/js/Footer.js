import { cx } from '../start';

export default function Footer(Footer){

    Footer.innerHTML = `
        <div class=${cx('d-flex-between')}>
            <span>Version 1.0.3</span>
            <img class=${cx('sass_img')} src='./src/images/sass.png' alt='sass logo' width="70" height="50"/>
        </div>
        <div class=${cx('d-flex-between')}>
            <img class=${cx('github_img')} src='./src/images/github.png' alt='github' width="100" height="40" />
            <span>Codespaces</span>
        </div>
    `
}