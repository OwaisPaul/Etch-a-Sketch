
const container = document.getElementById('container');
const button = document.getElementById('btn');

button.addEventListener('click', ()=>{
    // clearing the previous grid
        container.innerText = '';
    const input = prompt('enter the size')
  const size = parseInt(input)
    //  check if the input is a valid number
  if (isNaN(size) || size >= 100){
    alert('invalid input')
    return;
}

// creating grid

 for(let i=0; i < size * size; i++){

        const box = document.createElement('div');
       
        box.classList.add('item');
        box.style.backgroundColor = 'purple';
        // box.style.width = `${100 / size}%`; // width based on grid size
        // box.style.height = `${100 / size}%`; // height based on grid size

        // Changing the color on mouseover

        box.addEventListener('mouseover', ()=>{
            box.style.background = 'orange';
        });
        container.appendChild(box);
    }
        container.style.display = 'grid';
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
});