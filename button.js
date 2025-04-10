const but = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelectorAll('.main, .hero, .hero1, .reviewsec, .updatesec, footer');

let isOpen = false;

but.addEventListener('click', () => {
    if (!isOpen) {
        sidebar.style.transform = "translateX(0)";
        sidebar.style.opacity=1;
        mainContent.forEach(section => {
            section.style.filter = "blur(5px)";
            section.style.pointerEvents = "none";
        });
    } else {
        sidebar.style.transform = "translateX(100%)"; 
        sidebar.style.opacity=0;
        mainContent.forEach(section => {
            section.style.filter = "none";
            section.style.pointerEvents = "auto";
        });
    }
    isOpen = !isOpen;
});
