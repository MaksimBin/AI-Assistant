console.log('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');


function startApp() {
  const screen = document.getElementById('start-screen');
  screen.classList.add('hidden'); // плавное исчезновение
  setTimeout(() => {
    screen.style.display = 'none'; // убираем после анимации
    
  }, 600); // совпадает с transition в CSS
}