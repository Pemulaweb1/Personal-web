// Inisialisasi variabel
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

// Mengambil elemen dari DOM
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const resultDisplay = document.getElementById('result');
const attemptCountDisplay = document.getElementById('attempt-count');
const restartButton = document.getElementById('restart-button');

// Fungsi untuk memeriksa tebakan
function checkGuess() {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    resultDisplay.textContent = 'Masukkan angka valid antara 1 dan 100!';
    resultDisplay.style.color = 'red';
    return;
  }

  attemptsLeft--;

  if (guess === randomNumber) {
    resultDisplay.textContent = 'Selamat! Kamu menebak dengan benar!';
    resultDisplay.style.color = 'green';
    endGame();
  } else if (guess > randomNumber) {
    resultDisplay.textContent = 'Terlalu besar! Coba angka yang lebih kecil.';
    resultDisplay.style.color = 'orange';
  } else {
    resultDisplay.textContent = 'Terlalu kecil! Coba angka yang lebih besar.';
    resultDisplay.style.color = 'orange';
  }

  attemptCountDisplay.textContent = attemptsLeft;

  if (attemptsLeft === 0) {
    resultDisplay.textContent = `Game over! Angka yang benar adalah ${randomNumber}.`;
    resultDisplay.style.color = 'red';
    endGame();
  }
}

// Fungsi untuk mengakhiri game
function endGame() {
  guessInput.disabled = true;
  guessButton.disabled = true;
  restartButton.style.display = 'block';
}

// Fungsi untuk mengulang game
function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;

  guessInput.disabled = false;
  guessButton.disabled = false;
  guessInput.value = '';
  resultDisplay.textContent = '';
  attemptCountDisplay.textContent = attemptsLeft;
  restartButton.style.display = 'none';
}

// Event listener
guessButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);
