// Javascript Lazy load format
const { default: Render } = await import('./assets/render/Render');
import './assets/css/app.css'


export default async function Start(DOM) {
  
    DOM.innerHTML = (`
            <div id='JS'></div>
    `)
  
    Render();
  }
  