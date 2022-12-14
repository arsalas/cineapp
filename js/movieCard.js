import { IMG_URL } from "./api.js"

export const printMovieCard = (id, image, title) => {
    return /*html*/`<div class="column is-6-mobile is-4-tablet is-2-desktop">
    <a href="#details/${id}">
    <div class="movie-card card">
        <figure class="image is-2by3">
            <img src="${IMG_URL + image}" onError="this.src='./images/placeholder.png'">
        </figure>
        <div class="movie-info">
        ${title}
        </div>
    </div>
    </a>
</div>`
}