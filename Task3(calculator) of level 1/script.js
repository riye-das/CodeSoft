const input = document.querySelector('.input');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === '=') {
      try {
        if (input.value.includes('%')) {
            input.value = (parseFloat(input.value) / 100).toString();
          } else {
            input.value = eval(input.value);
          }
      } catch (error) {
        input.value = 'Error';
      }
    } else if (buttonText === 'AC') {
      input.value = '';
    } else if (buttonText === 'DEL') {
      input.value = input.value.slice(0, -1);
    } else {
      input.value += buttonText;
    }
  });
});

