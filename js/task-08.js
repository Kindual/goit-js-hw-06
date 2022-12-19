const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('[name="email"]');
const inputPasswordEl = document.querySelector('[name="password"]');
const btnEl = document.querySelector('[type="submit"]');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const formEls = event.currentTarget.elements;
    // console.dir(formEls);

    if (!formEls.email.value || !formEls.password.value) {
        return alert('всі поля повинні бути заповнені')
    }

    const userData = {
        email: formEls.email.value,
        password: formEls.password.value,
    };

    console.log(userData);

    event.currentTarget.reset();
}


/* <form class="login-form">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form> */