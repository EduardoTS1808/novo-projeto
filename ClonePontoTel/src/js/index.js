import '../sass/index.scss';

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')

let btn = document.querySelector('#"btnMenubar');
const lincks = document.querySelector("#navLincks");
const page = document.querySelector(".body");

btn.onclick = () => {
    lincks.classList.toggle('active');
    page.classList.toggle('active');
    btn.classList.add('bi-x-lg');


}