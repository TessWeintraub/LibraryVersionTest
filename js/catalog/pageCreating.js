import {bookCardsCreating} from "./bookCardsCreating.js";

export  const pageCreating = (item,bookData) => {

    const catalogCards = document.querySelector('.catalog__cards');
    let cardsOnPage = 15; // Количество карточек на странице
    let activeButton = document.querySelector('.pagination__ul li.pagination__active') // Поиск активной кнопки
    if (activeButton) {
        activeButton.classList.remove('pagination__active'); // Удаление класса, если есть активная кнопка
    }
    item.classList.add('pagination__active')// Добавление класса к кнопке из массива

    let pageNum = +item.innerHTML;

    let bookCards = bookData.slice((pageNum-1) * cardsOnPage, ((pageNum-1) * cardsOnPage) + cardsOnPage)
    // Формула деления массива операясь на номер страницы
    catalogCards.innerHTML= ''
    bookCardsCreating(bookCards);
}