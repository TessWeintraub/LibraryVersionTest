import {createPopularCards} from "./main/createPopularCards.js";


$(document).ready(function(){
    $('.slider').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        pager: true,
    });
});
window.onload = createPopularCards('https://github.com/TessWeintraub/LibraryVersionTest/blob/main/db/books.json')
