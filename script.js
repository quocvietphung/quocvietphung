/*================ scroll sections active link ========*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach(sec => {
        let top = sec.offsetTop - 150;
        let bottom = top + sec.offsetHeight;
        let id = sec.getAttribute('id');
        let navLink = document.querySelector(`a[href='#${id}']`);

        if (currentPosition >= top && currentPosition <= bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
};


