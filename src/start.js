export default async function Start(DOM) {

    const stylesModule = await import('./assets/sass/modules/app.module.scss');
    const styles = stylesModule.default;
  
    DOM.innerHTML = `
      <div id='container' class=${styles['d-flex-center-max']}>
  
          <div class=${styles['d-flex-center-gap-20']}>
              <a href="https://devdocs.io/javascript/">
                  <img 
                      class=${styles['js-image']} 
                      src='images/javascript.png' 
                      alt='javascript logo'   
                  />
              </a>
              <h1 class=${styles['font-weight-400']}>Standalone - JavaScript</h1>
              <a href="https://webpack.js.org/">
                  <img class=${styles['webpack-image']} 
                   src='images/webpack.png' 
                   alt='webpack logo'
                  />
              </a>
          </div>
          <div>
              <button class=${styles['button-style']} id='count'></button>
          </div>
          <div  class=${styles['d-flex-gap-20']} id="rows"></div>
          <footer class=${styles['footer-abs-between']} id="footer"></footer>
  
      </div>
    `;
  
    const { default: Render } = await import('./assets/render/Render');
    Render();
  }
  