// Fonction pour gérer l'affichage du menu déroulant
document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
  });
  