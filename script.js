
// category toggle
document.addEventListener('DOMContentLoaded', () => {
    if (/(?:^|\/)categories(?:\/|$)/.test(location.pathname) && window.matchMedia('(min-width: 769px)').matches) {
        console.log(location.pathname);
        const btn = document.querySelector('.food-category-btn');
        const panel = document.querySelector('.food-category-content');
        if (btn && panel) {
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        panel.classList.add('show');
        }
    }
});

// Config category
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.food-category-btn');
    if (!btn) return;

    const panel = btn.parentElement.querySelector('.food-category-content');
    const isOpen = panel.classList.toggle('show');
    btn.classList.toggle('active', isOpen);
});

