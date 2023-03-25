let navbar = document.getElementById('nav-bar');
let about = document.getElementById('about');
let navBorder = document.querySelector('.nav-border');
let navbarNavAltMarkup = document.getElementById('navbarNavAltMarkup');
let allNavLinks = document.querySelector('.all-nav-links');
window.addEventListener('scroll' ,()=>{
    if( (window.scrollY + navbar.offsetHeight)   >= about.offsetTop ){
        navBorder.classList.add('border-dark');
        allNavLinks.classList.remove('all-nav-links');
    }else{
        navBorder.classList.remove('border-dark');
        allNavLinks.classList.add('all-nav-links');
       
    }

})