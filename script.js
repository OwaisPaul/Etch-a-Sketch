
const container = document.getElementById('container');


const button = document.getElementById('btn');

button.addEventListener('click', ()=>{
    const input = prompt('enter the size')
});


const box = document.createElement('div');
box.addEventListener('mouseover', ()=>{
    box.style.background = 'orange';
})
box.classList.add('item')
box.style.backgroundColor = 'purple';

container.appendChild(box);
