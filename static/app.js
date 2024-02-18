
//  NAVBAR ACTIVE LINK 
const navLinkElements = document.querySelectorAll('.nav_link');
navLinkElements.forEach(navLinkElement => {
    navLinkElement.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLinkElement.classList.add('active');
    });
});