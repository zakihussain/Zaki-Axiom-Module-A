const menuToggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

open.addEventListener('click', () => modal.classList.add('show-model') );

close.addEventListener('click', () => modal.classList.remove('show-model') );

window.addEventListener('click', e => 
    e.target === modal ? modal.classList.remove('show-model') :false   
);