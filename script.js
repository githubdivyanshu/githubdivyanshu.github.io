function showPage(pageId) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    // Show selected section
    const selectedSection = document.getElementById(pageId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Set active nav link styles
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-indigo-700', 'font-bold', 'underline');
        if (link.dataset.page === pageId) {
            link.classList.add('text-indigo-700', 'font-bold', 'underline');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.page;
            showPage(pageId);
        });
    });

    const navLinkButtons = document.querySelectorAll('.nav-link-button');
    navLinkButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = button.dataset.page;
            showPage(pageId);
        });
    });

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const pageId = card.dataset.page;
            showPage(pageId);
        });
    });

    // Show the home page initially
    showPage('home-section');
});
