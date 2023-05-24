var flashcards = [
  { front: "Front 1", back: "Back 1" },
  { front: "Front 2", back: "Back 2" },
  { front: "Front 3", back: "Back 3" }
];

var currentCardIndex = 0;
var flashcardElement = document.querySelector('.flashcard');

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
