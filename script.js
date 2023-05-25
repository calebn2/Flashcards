var currentCardIndex = 0;
var flashcardElement = document.getElementById('flashcard');
var flashcards;

function loadFlashcards() {
  fetch('flashcards.json')
    .then(response => response.json())
    .then(data => {
      flashcards = data;
      updateFlashcard();
    })
    .catch(error => console.error('Error loading flashcards:', error));
}

function toggleFlashcard() {
  var currentCard = flashcards[currentCardIndex];
  if (flashcardElement.innerHTML === currentCard.front) {
    flashcardElement.innerHTML = currentCard.back;
  } else {
    flashcardElement.innerHTML = currentCard.front;
  }
}

function previousCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
  }
  updateFlashcard();
}

function nextCard() {
  if (currentCardIndex < flashcards.length - 1) {
    currentCardIndex++;
  }
  updateFlashcard();
}

function updateFlashcard() {
  var currentCard = flashcards[currentCardIndex];
  flashcardElement.innerHTML = currentCard.front;
}

loadFlashcards();
