const header = document.getElementById('head');
let previousScrollPosition = window.scrollY;

// Проверка скролла
window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > previousScrollPosition) { // Скролл вниз
    head.classList.add('hidden'); // Скрыть header
  } else {
    head.classList.remove('hidden'); // Показать header
  }

  previousScrollPosition = currentScrollPosition; // Обновляем предыдущее положение скролла
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
    
    const emailInput = document.getElementById("emailInput");
    const validationMessage = document.getElementById("validationMessage");
    const termsCheckbox = document.getElementById("readConfirmation");
    const submitBtn = document.getElementById("submitBtn");
    const successMessage = document.getElementById("successMessage");
    const suscribe__block = document.getElementById("suscribe__block");
    const iconError = document.getElementById("iconError");
    const iconOk = document.getElementById("iconOk");
    const emailBlocklOpenClose = document.getElementById("SuscribieteEmailBlocklOpenClose")
    const statusEnviado = document.getElementById("statusEnviado")

function updateButtonState() {
    const emailValid = validateEmail(emailInput.value);
    const termsChecked = termsCheckbox.checked;

    if (emailValid && termsChecked) {
      submitBtn.disabled = false;
      validationMessage.style.display = "none";
      emailInput.style.borderColor = "#BEDB39";
      iconOk.style.display = "flex";
      iconError.style.display = "none";
    } else {
      submitBtn.disabled = true; 
      if (!emailValid) {
        validationMessage.style.display = "block";
        emailInput.style.borderColor = "#EF9700";
        iconError.style.display = "block";
        iconOk.style.display = "none";
      }
    }
  }
  emailInput.addEventListener("blur", updateButtonState);
  termsCheckbox.addEventListener("change", updateButtonState);

  submitBtn.addEventListener("click", () => {
    SuscribieteEmailBlocklOpenClose.style.display = "none";
    statusEnviado.style.display = "block";
});

const menuFooter__item = document.querySelectorAll('.menuFooter__item');
menuFooter__item.forEach(item => {
  const header = item.querySelector('.nameMenuFooter__item');
  const content = item.querySelector('.accordion');
  header.addEventListener('click', () => {
    content.classList.toggle('closed');
  });
});