import { router } from "./js/router.js";

const btn = document.querySelector('#btn-menu');
const menu = document.querySelector('#items-menu');

window.addEventListener('popstate', router);

document.querySelector('#form-search').addEventListener('submit', (e) => {
    e.preventDefault();
    location.hash = '#search?query=' + document.querySelector('#input-search').value
    document.querySelector('#input-search').value = '';
})


btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    menu.classList.toggle('is-active');

})


const setTheme = (theme) => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        document.querySelector('#iconTheme').classList.remove('fa-sun');
        document.querySelector('#iconTheme').classList.add('fa-moon');
    } else {
        document.querySelector('#iconTheme').classList.add('fa-sun');
        document.querySelector('#iconTheme').classList.remove('fa-moon');

    }

}
const getTheme = () => {
    let theme = localStorage.getItem('theme');
    if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    setTheme(theme);
}
document.querySelector('#iconTheme').addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'light') setTheme('dark')
    else setTheme('light')
})
getTheme();
router();