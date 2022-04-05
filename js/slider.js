import {createPopularCards} from "./main/createPopularCards.js";


$(document).ready(function(){
    $('.slider').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        pager: true,
    });
});
window.onload = createPopularCards('../../db/books.json')
