const topButton = document.getElementById('topButton');
window.onscroll = () => scrollFunction();

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topButton.style.display = 'block';
    }
    else {
        topButton.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}