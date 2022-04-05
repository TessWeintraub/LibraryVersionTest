import {pageCreating} from "./pageCreating.js";

export  function buttonCreating (bookData) {
    const catalogCards = document.querySelector('.catalog__cards');
    const paginationUl = document.querySelector('.pagination__ul');
    let cardsOnPage = 15; // Количество карточек на странице
    catalogCards.innerHTML =``;
    paginationUl.innerHTML = ``;

    const countButton = Math.ceil(bookData.length / cardsOnPage); // Количество кнопок
    let paginationButtonArr = [] // Массив ячеек списка, работающих как кнопки


    for (let item = 0; item < countButton; item++) {
        const paginationButton = document.createElement('li');
        paginationButton.innerHTML = item + 1;
        paginationUl.append(paginationButton);
        paginationButtonArr.push(paginationButton);// Добавление ячейки в массив
    }

    pageCreating(paginationButtonArr[0], bookData);

    paginationButtonArr.forEach(element => {
        element.addEventListener('click', () => {
            pageCreating(element, bookData)
            element.classList.add('pagination__active')
        })
    })
}