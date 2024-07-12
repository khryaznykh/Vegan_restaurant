const btn = document.querySelector("#btn");

btn.addEventListener ('click', feedback);

function feedback() {
    document.querySelector(".question").style.display = "none";
    document.querySelector(".feedbackbox").style.display = "block";
    
}


// Получаем доступ к элементам формы
const form = document.querySelector('form');
const select = document.querySelectorAll('.selected');
const button = document.querySelector('.submitbtn');

// Добавляем подслушку на изменения на каждый элемент select
select.forEach(item => {
  item.addEventListener('change', function() {
    // Проверяем, выбрана ли опция
    if (item.value !== '') {
      // Если опция выбрана, активируем кнопку отправки
      button.disabled = false;
    } else {
      // Если опция не выбрана, деактивируем кнопку отправки
      button.disabled = true;
    }
  });

})

// Добавляем подслушку на отправку формы
form.addEventListener('submit', function(e) {
  // Предотвращаем стандартное действие отправки формы, если кнопка отправки неактивна
  if (button.disabled) {
    e.preventDefault();
    alert('Пожалуйста, выберите опцию перед отправкой формы.');
  }
  else {
      Swal.fire({
      title: 'Thank You!',
      text: "You'll get you Free Drink coupone on the email that you provided",
      imageUrl: 'https://cdn.glitch.global/65dcb037-c70a-47e8-9721-c81a2c259aa2/congrats.webp?v=1695646452799',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
       
    })
  }
});



       