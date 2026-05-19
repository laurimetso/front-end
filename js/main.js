document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (faqContainer) {
        faqContainer.addEventListener('click', (e) => {
            const faqGroupHeader = e.target.closest('.faq-group-header');

            if (!faqGroupHeader) return;

            const faqGroup = faqGroupHeader.parentElement;
            const faqGroupBody = faqGroup.querySelector('.faq-group-body');
            const icon = faqGroupHeader.querySelector('i');

            if (!faqGroupBody || !icon) return;

            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
            faqGroupBody.classList.toggle('open');

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
    }

    if (hamburgerButton && mobileMenu) {
        const overlay = document.querySelector('.mobile-menu-overlay');

        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
        });

        if (overlay) {
            overlay.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
            });
        }
    }
});