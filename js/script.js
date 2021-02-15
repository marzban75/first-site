const collapse = document.getElementById('collapse');
const menu_items = document.getElementById('menu-items');
const items_li = document.querySelectorAll('#header .header .menu ul li a')
const header = document.querySelector('#header .header');


collapse.addEventListener('click',()=>{
    collapse.classList.toggle('active');
    menu_items.classList.toggle('active');
})

menu_items.addEventListener('click',()=>{
    collapse.classList.toggle('active');
    menu_items.classList.toggle('active');
})

document.addEventListener('scroll',()=>{
    let scroll_position = window.scrollY;
    if (scroll_position > 250){
        header.style.backgroundColor = '#29323c';
    }else{
        header.style.backgroundColor = 'transparent';
    }
})

