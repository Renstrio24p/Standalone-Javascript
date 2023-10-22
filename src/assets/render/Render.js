async function importAllComponents() {
  const context = require.context('../../components', true, /\.js$/); // Fetch all .js files
  const componentModules = await Promise.all(
    context.keys().map(context)
  );

  const components = {};

  componentModules.forEach((module) => {
    const componentName = module.default ? module.default.name : null;
    if (componentName) {
      components[componentName] = module.default;
    }
  });

  return components;
}

export default async function Render() {
  const components = await importAllComponents();

  const componentElements = document.querySelectorAll('[component]');

  for (const element of componentElements) {
    const componentName = element.getAttribute('component');
    
    if (components[componentName]) {
      components[componentName](element);
    } else {
      console.warn(`Component ${componentName} not found.`);
    }
  }

  // Hash Applied (if needed)
  window.addEventListener('DOMContentLoaded', () => {
    // Your hash code here
  });
}
