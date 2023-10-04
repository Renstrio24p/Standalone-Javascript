export default async function Render() {
    // Dynamically import the components and modules
    const { default: Footer } = await import("../../components/Footer");
    const { setupCounter } = await import("../../components/counter");
    const { default: Rows } = await import("../../components/row");
    const { default: UniqueHash } = await import("../security/hascode");
  
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
    });
  
    // Render's the JS Component
    setupCounter(APP);
    Rows(Row);
    Footer(Foot);
  }
  