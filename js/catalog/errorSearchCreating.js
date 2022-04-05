export const errorSearchCreating = () => {
    document.querySelector('.catalog__cards').innerHTML = ``; // Обнуление карточек в каталоге
    document.querySelector('.pagination__ul').innerHTML = ``; // Обнуление кнопок пагинации
    const errorSearch = document.createElement('h1')
    errorSearch.classList.add('catalog__error__h1');
    errorSearch.innerHTML = `Ничего не найдено`;
    document.querySelector('.catalog__cards').appendChild(errorSearch); // Сообщение об ошибке поиска
}