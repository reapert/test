const body = document.querySelector('body');
const navOpen = document.getElementById(navOpen);
const navClose = document.getElementById('navClose');
const navMenu = document.getElementById('menuContent');
const navLinks = document.getElementById('.nav-link');

if(navOpen){
                navOpen.addEventListener( 'click',() ⇒ {
                        navMenu.classList.add('open'),
                        console.log('clicked')
                });
            }