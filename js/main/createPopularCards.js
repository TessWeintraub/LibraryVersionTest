import {getRequesting} from "../catalog/getRequesting.js";

export const createPopularCards = (url) => {

    const popularCards = document.querySelector('.popular__cards')
    const data = getRequesting(url);
    const popularCardsData = data.sort((elem1,elem2) => elem1.book_rating > elem2.book_rating? -1 : 1).slice(0,5);

    popularCardsData.forEach(element => {

        const a = document.createElement('a');

        a.setAttribute('href', './card.html')
        a.classList.add('card__book')
        a.innerHTML=`
                                <img src="${element.book_image_1}">
                                <div class="card__book__info">
                                    <h2 class="card__book__info__h2">${element.book_name}</h2>
                                     <div class="card__book__info__block">
                                        <div class="card__book__info__block__info">
                                            <p class="card__book__info__block__info__author">${element.book_author} </p>
                                            <p class="card__book__info__block__info__nal__${Boolean(element.book_quantity)}">${Boolean(element.book_quantity) ? 'Есть в наличии' : 'Нет в наличии'}</p>
                                        </div>
                                        <p class="card__book__info__block__ageLimit">${element.book_age_limit}+</p>
                                     </div>
                                 </div>
                                `
        popularCards.appendChild(a);
    })}