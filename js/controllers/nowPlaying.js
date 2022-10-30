import { getNowPlayingMovies } from "../api.js";
import { printMovieCard } from "../movieCard.js";

const printNowPlayingMovies = async () => {
    const response = await getNowPlayingMovies();
    const nowPLaying = response.results;
    let html = '';
    nowPLaying.map(movie => {
        html += printMovieCard(movie.id, movie.poster_path, movie.title)
    })
    document.querySelector('#nowPlaying .columns').innerHTML = html;
}

export const loadNowPlaying = async () => {
    printNowPlayingMovies();

}