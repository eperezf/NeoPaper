// Toggle the menu open and close when on mobile
export default function toggleMenu() {
    const burgerButton = document.querySelector('.burger');
		const burgerMenu = document.querySelector('.burger-menu')
    burgerButton.addEventListener('click', function () {
        burgerMenu.classList.toggle('hidden');
    });
}