const cards = document.querySelectorAll('.card');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');

let current = 0;

function updateCards() {
  cards.forEach((card, i) => {
    card.classList.remove('active', 'left', 'right', 'hidden');

    if (i === current) {
      card.classList.add('active');
    } else if (i === (current - 1 + cards.length) % cards.length) {
      card.classList.add('left');
    } else if (i === (current + 1) % cards.length) {
      card.classList.add('right');
    } else {
      card.classList.add('hidden');
    }
  });
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) {
      const link = card.getAttribute('data-link');
      if (link) {
        window.location.href = link; // navigate to another HTML file
      }
    }
  });
});
rightBtn.addEventListener('click', () => {
  current = (current + 1) % cards.length;
  updateCards();
});

leftBtn.addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length;
  updateCards();
});

// Initialize
updateCards();
