import { getNowPlayingMovies, getPopularMovies } from "../api.js"
import { printMovieCard } from "../movieCard.js";


const printPopularsMovies = async () => {
    const response = await getPopularMovies();
    const populars = response.results.splice(0, 12);
    let html = '';
    populars.map(movie => {
        html += printMovieCard(movie.id, movie.poster_path, movie.title)
    })
    document.querySelector('#populars .columns').innerHTML = html;
}

const printNowPlayingMovies = async () => {
    const response = await getNowPlayingMovies();
    const nowPLaying = response.results.splice(0, 12);
    let html = '';
    nowPLaying.map(movie => {
        html += printMovieCard(movie.id, movie.poster_path, movie.title)
    })
    document.querySelector('#nowPlaying .columns').innerHTML = html;
}

export const loadHome = async () => {
    printPopularsMovies();
    printNowPlayingMovies();

}