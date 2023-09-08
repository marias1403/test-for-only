function calculatePointerPosition() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttons = document.querySelectorAll('.button');

  const button1Left = screenWidth * 0.29;
  const button1Top = screenHeight * 0.26;
  const button2Left = screenWidth * 0.23;
  const button2Top = screenWidth * 0.36;
  const button3Left = screenWidth * 0.72;
  const button3Top = screenWidth * 0.11;
  const button4Left = screenWidth * 0.74;
  const button4Top = screenWidth * 0.25;
  const button5Left = screenWidth * 0.56;
  const button5Top = screenWidth * 0.32;
  const button6Left = screenWidth * 0.85;
  const button6Top = screenWidth * 0.38;
  const button7Left = screenWidth * 0.35;
  const button7Top = screenWidth * 0.25;
  const button8Left = screenWidth * 0.6;
  const button8Top = screenWidth * 0.2;
  const button9Left = screenWidth * 0.58;
  const button9Top = screenWidth * 0.42;
  const button10Left = screenWidth * 0.68;
  const button10Top = screenWidth * 0.34;

  buttons[0].style.left = button1Left + 'px';
  buttons[0].style.top = button1Top + 'px';
  buttons[1].style.left = button2Left + 'px';
  buttons[1].style.top = button2Top + 'px';
  buttons[2].style.left = button3Left + 'px';
  buttons[2].style.top = button3Top + 'px';
  buttons[3].style.left = button4Left + 'px';
  buttons[3].style.top = button4Top + 'px';
  buttons[4].style.left = button5Left + 'px';
  buttons[4].style.top = button5Top + 'px';
  buttons[5].style.left = button6Left + 'px';
  buttons[5].style.top = button6Top + 'px';
  buttons[6].style.left = button7Left + 'px';
  buttons[6].style.top = button7Top + 'px';
  buttons[7].style.left = button8Left + 'px';
  buttons[7].style.top = button8Top + 'px';
  buttons[8].style.left = button9Left + 'px';
  buttons[8].style.top = button9Top + 'px';
  buttons[9].style.left = button10Left + 'px';
  buttons[9].style.top = button10Top + 'px';
}

window.addEventListener('load', calculatePointerPosition);
window.addEventListener('resize', calculatePointerPosition);

const buttons = document.querySelectorAll(".button");
let isToggled = false;
const buttonTexts = ["Текст 1", "Текст 2", "Текст 3", "Текст4", "Текст5", "Текст6", "Текст7", "Текст8", "Текст9", "Текст10"];
let currentIndex = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    isToggled = !isToggled;
    currentIndex = (currentIndex + 1) % buttonTexts.length;

    if (isToggled) {
      button.classList.add('button_opened');
    } else {
      button.classList.remove('button_opened');
    }
    button.textContent = isToggled ? buttonTexts[currentIndex] : '';
  });
});
