const form = document.querySelector(".form");
const userName = document.querySelector("#name");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const agree = document.querySelector("#agree");

form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();
    fetch('https://polinashneider.space/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: Andreyanna'
            },
            body: JSON.stringify({
                name: `${userName.value}`,
                secondName: `${secondName.value}`,
                email: `${email.value}`,
                phone: `${phone.value}`,
                agree: `${agree.checked}`
            })
        })
        .then((result) => {
            return result.json()
        })
        .then((data) => {
            console.log(data);
        })
        .catch(() => {
            form.reset();
            alert('Ошибка! Попробуйте еще раз.');
        })
        .finally(() => {
            form.reset();
            alert('Данные отправлены!');
        })
});