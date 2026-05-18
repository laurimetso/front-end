// FAQ accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    if (!faqContainer) return;

    faqContainer.addEventListener('click', (e) => {
        const faqGroupHeader = e.target.closest('.faq-group-header');

        if (!faqGroupHeader) return;

        const faqGroup = faqGroupHeader.parentElement;
        const faqGroupBody = faqGroup.querySelector('.faq-group-body');
        const icon = faqGroupHeader.querySelector('i');

        if (!faqGroupBody || !icon) return;

        // toggle icon
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');

        // toggle body visibility
        faqGroupBody.classList.toggle('open');

        //close other open faq groups
        const otherFaqGroups = faqContainer.querySelectorAll('.faq-group');
        otherFaqGroups.forEach((group) => {
            if (group !== faqGroup) {
                const groupBody = group.querySelector('.faq-group-body');
                const groupIcon = group.querySelector('i');
                if (groupBody && groupIcon) {
                    groupBody.classList.remove('open');
                    groupIcon.classList.remove('fa-chevron-up');
                    groupIcon.classList.add('fa-chevron-down');
                }
            }
        });
    });
});


// Mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!hamburgerButton || !mobileMenu) return;

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});