import { cx } from '../start';

export default function Footer(Footer){

    Footer.innerHTML = `
        <div class=${cx('d-flex-between')}>
            <span>Version 1.0.3</span>
            <img class=${cx('sass_img')} src='sass.png' alt='sass logo' />
        </div>
        <div class=${cx('d-flex-between')}>
            <img class=${cx('github_img')} src='github.png' alt='github' />
            <span>Codespaces</span>
        </div>
    `
}