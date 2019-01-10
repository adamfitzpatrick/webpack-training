import yoda from './yoda.jpg'

function addImage () {
    const img = document.createElement('img');
    img.alt = 'Yoda';
    img.width = 200;
    img.src = yoda;
    
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;