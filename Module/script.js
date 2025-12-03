// Détection du jour actuel (1 à 24 décembre)
const today = new Date();
const month = today.getMonth(); // 0 = janvier, 11 = décembre
const day = today.getDate();

document.querySelectorAll('.day').forEach(div => {
  const numero = parseInt(div.dataset.day, 10);

  if (month === 11) { // décembre
    if (numero < day) {
      div.classList.add('passed'); // jours passés visibles
    } else if (numero === day) {
      div.classList.add('today'); // jour actuel
    } else {
      div.classList.add('locked'); // jours futurs masqués
    }
  } else {
    // Si on n'est pas en décembre, tout est verrouillé
    div.classList.add('locked');
  }
});
