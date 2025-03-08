const form = document.forms.regForm;

form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  let errors = [];

  const checkValidity = (input) => {
  let validity = input.validity;
  if (validity.valueMissing) {
    errors.push('Поле ' + input.placeholder + ' не заполнено');
  }

  if (validity.patternMismatch) {
    errors.push('Неверный формат заполнения!');
  }

  if (validity.rangeUnderflow) {
    let min = input.getAttribute('min');
    errors.push('Минимальное значение не может быть больше, чем ' + min);
  }

  if (validity.rangeOverflow) {
    let max = input.getAttribute('max');
    errors.push('Максимальное значение не может быть больше, чем ' + max);
  }
}

  const checkAll = () => {
    errors = [];
    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
      checkValidity(input);
    }

    if (form.profession.value === "") {
      errors.push('Выберите профессию');
    }
  
    const formInput = document.querySelector('.form__input');
    if (!formInput.checked) {
      errors.push('Подтвердите ваше согласие с обработкой данных!')
    }

    document.getElementById('errorMessage').innerHTML = errors.join(', <br>');

  const submitButton = document.querySelector('.form__button');
  submitButton.disabled = errors.length > 0;

  if (errors.length === 0) {
    console.log('Ваши данные приняты!', { 
      name: form.name.value,
      email: form.email.value,
      age: form.age.value,
      gender: form.gender.value,
      profession: form.profession.value,
      password: form.pass.value});

  form.reset();
}
}

form.addEventListener('submit', function(evt) {
  checkAll();
});

});  

