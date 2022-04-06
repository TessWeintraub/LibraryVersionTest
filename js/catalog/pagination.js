

import {getRequesting} from "./getRequesting.js";
import {bookCardsCreating} from "./bookCardsCreating.js";
import {filtering} from "./filtering.js";
import {buttonCreating} from "./buttonCreating.js";
import {selectCreating} from "./selectCreating.js";


const bookData = getRequesting("https://tessweintraub.github.io/db/books.json")
const author = getRequesting("https://tessweintraub.github.io/db/db/author.json")
const genre =getRequesting("https://tessweintraub.github.io/db/db/genre.json")
const publishing =getRequesting("https://tessweintraub.github.io/db//publishingHouse.json")
document.querySelector('.search__form__container__button').onclick = ()=>{filtering(bookData)}

$(document).ready(function(){
    $('.search__form__container__input__author').selectize();
    $('.search__form__container__input__genre').selectize();
    $('.search__form__container__input__publishing').selectize();
});

// const popular = bookData => {
//     let array = bookData.map(element =>{return element.book_rating})
//     array.sort((element_1, element_2) => element_2-element_1)
//     array.splice(5)
// }
// popular(bookData)


selectCreating(author,'author','author_name')
selectCreating(genre,'genre','genre_name')
selectCreating(publishing,'publishing','publishing_name')



bookCardsCreating(bookData)
buttonCreating(bookData)
