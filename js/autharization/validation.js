const form = document.querySelector('.authorization__form');
const card = document.querySelector('.authorization__form__container__card');
const phone = document.querySelector('.authorization__form__container__phone');
const Patterns = {
    card: /^([0-9]{8}$)/,
    phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
};



form.addEventListener("submit", e =>{
    e.preventDefault()
    card.nextElementSibling.style.display = 'none'
    phone.nextElementSibling.style.display = 'none'
    if(validate()) {
        console.log("Вы успешно авторизовались!")
        // Передача данных на сервер
    }
})

const validate = () => {
    if (Patterns.card.test(card.value)&Patterns.phone.test(phone.value)){
        card.value = ""
        phone.value = ""
        return true
    }
    if (!Patterns.card.test(card.value)) {
        card.nextElementSibling.style.display = 'block'
    }
    if (!Patterns.phone.test(phone.value)) {
        phone.nextElementSibling.style.display = 'block'
    }
    return false
}