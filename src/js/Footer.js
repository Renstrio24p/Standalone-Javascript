
export default function Footer(Footer){

    function Minus(a,b){
        return a - b;
    }

    Footer.innerHTML = `
        <h2>This is a footer has been Rendered by ES10.</h2>
        <span>&copy; ES10 2023 ${Minus(5,4)}</span>
    `
}