export const selectCreating = (object,nameClass,nameKeys)=>{
    const select = document.querySelector(`.search__form__container__input__${nameClass}`);
    const option = document.createElement('option');
    object.forEach(element => {
        option.innerHTML = element[nameKeys];
        select.appendChild(option.cloneNode(true));
    })
}