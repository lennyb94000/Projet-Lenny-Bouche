const boxes = document.querySelectorAll('.boxo');

boxes.forEach(function(boxo) {
  boxo.addEventListener('click', function() {
    // code à exécuter lorsque l'utilisateur clique sur le bouton
    console.log('Bouton cliqué !');
  });
});
