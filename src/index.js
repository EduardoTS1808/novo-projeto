import './style.scss';
import img from './Captura de tela 2022-11-22 191329.png'

function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}
function titleTest(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'boa noite sr. Eduardo!'
    elemH1.classList.add('title')

    return elemH1
}
function imageComponet (){
    const  elemImage = new Image()
    elemImage.src = img 
    return elemImage
}
rootStyle()
document.getElementById('root').appendChild(titleTest())
document.getElementById('root').appendChild(imageComponet())