// récupère tous les boutons d'offres
const buttons = document.querySelectorAll('.offre-button');

// ajoute un gestionnaire d'événements à chaque bouton
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // récupère l'ID de l'offre sélectionnée
    const offreId = button.getAttribute('data-offre-id');

    // modifie le contenu de la div d'informations avec les informations de l'offre sélectionnée
    const informationsDiv = document.getElementById('informations');
    informationsDiv.innerHTML = `Informations pour l'offre ${offreId}`;
  });
});
