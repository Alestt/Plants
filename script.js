document.querySelector('.user-menu__point--search').onclick = () => {
    document.querySelector('.search').classList.toggle('active');
}

document.querySelector('.search__button--close').onclick = () => {
    document.querySelector('.search').classList.remove('active');
}