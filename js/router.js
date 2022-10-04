import { loadDetails } from "./details.js";
import { loadHome } from "./home.js";
import { loadNowPlaying } from "./nowPlaying.js";
import { loadPopulars } from "./populars.js";
import { loadSearch } from "./search.js";

const loadPage = async (file) => {
    const html = await fetch(file).then(res => res.text());
    document.querySelector('#app').innerHTML = html
}

export const router = async () => {
    if (location.hash == '') {
        await loadPage('./views/home.html');
        loadHome();
    } else if (location.hash == '#now-playing') {
        await loadPage('./views/nowPlaying.html');
        loadNowPlaying();
    } else if (location.hash == '#populars') {
        await loadPage('./views/populars.html');
        loadPopulars();
    } else if (location.hash.includes('#details')) {
        const path = location.hash.split('/')
        await loadPage('./views/details.html');
        loadDetails(path[1]);
    } else if (location.hash.includes('#search')) {
        await loadPage('./views/search.html');
        loadSearch();
    } else {
        await loadPage('./views/404.html');
    }


}