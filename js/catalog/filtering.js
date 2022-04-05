import {errorSearchCreating} from "./errorSearchCreating.js";
import {buttonCreating} from "./buttonCreating.js";

export const filtering = (bookData) => {

    const nameBook = document.querySelector('.search__form__container__input').value;
    const authorBook = document.querySelector('.search__form__container__input__author').value;
    const genreBook = document.querySelector('.search__form__container__input__genre').value;
    const publishingBook = document.querySelector('.search__form__container__input__publishing').value;
    const availabilityBook = document.querySelector('.search__form__container__checkbox').checked;


    if (nameBook) bookData = bookData.filter(element => element.book_name === nameBook)
    if (authorBook) bookData = bookData.filter(element => element.book_author === authorBook)
    if (genreBook) bookData = bookData.filter(element => element.book_genre === genreBook)
    if (publishingBook) bookData = bookData.filter(element => element.book_publishing === publishingBook)
    if (availabilityBook) bookData = bookData.filter(element => Boolean(element.book_quantity) === true)

    if (bookData.length == 0) {
        errorSearchCreating();
        return;
    }
    buttonCreating(bookData)
    return bookData;
}