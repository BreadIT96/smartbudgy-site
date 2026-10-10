(function () {
    function initNav() {
        const toggle = document.getElementById('nav-toggle');
        const drawer = document.getElementById('nav-drawer');
        if (!toggle || !drawer) return;

        toggle.addEventListener('click', () => {
            const open = drawer.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            drawer.hidden = !open;
        });

        drawer.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                drawer.classList.remove('is-open');
                drawer.hidden = true;
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNav);
    } else {
        initNav();
    }
})();
