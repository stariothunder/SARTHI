 document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href');
            navigateToPage(targetPage);
        });
    });
});

function navigateToPage(page) {
    window.location.href = page;
}