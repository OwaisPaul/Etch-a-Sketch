

const container = document.getElementById('container');
const btn = document.getElementById('btn');


btn.addEventListener('click', () =>{
    const input = prompt('Enter the size');
    

})

        for (let i = 0; i < 16 * 16; i++) {
            const box = document.createElement('div');
            box.classList.add('grid-item');

            container.appendChild(box);
        }

        document.querySelectorAll('.grid-item').forEach(item =>{
            item.addEventListener('mouseover', () => {
                item.style.background = 'black';
                // item.style.transform = 'scale(1.1)';
                // item.style.transition = 'transform 0.3s ease';
        })
       
        // item.addEventListener('mouseleave', () =>{
            // item.style.background = '';
            // item.style.transform = 'scale(1)';
        // })
    });

    