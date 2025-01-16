document.addEventListener('DOMContentLoaded', () => {
    const openNavButton = document.querySelector('.open-navigation');
    const closeNavButton = document.querySelector('.close-navigation');
    const navigation = document.querySelector('.site-navigation');

    openNavButton.addEventListener('change', () => {
        navigation.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeNavButton.addEventListener('change', () => {
        navigation.classList.remove('active');
        document.body.style.overflow = '';
    });
});