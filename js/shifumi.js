/**
 * Pierre, Feuille, Ciseaux
 * 
 * version js
 */
var buttons = document.querySelectorAll(".shifumiJs button");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {

        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        var resultat = '';

        //Logique du jeu:
        if (joueur === robot) {
            resultat = 'Egalité !';
        } else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuilles") || (joueur === "Feuilles" && robot === "Pierre")) {
            resultat = 'Gagné !';
        } else if ((joueur === "Puit" && robot === "Ciseaux") || (joueur === "Puit" && robot === "Pierre") || (joueur === "Feuilles" && robot === "Puit")) {
            resultat = 'Gagné avec la technique secrète !<br/>';
        } else {
            resultat = 'Perdu !';
        }

        document.querySelector('.resultat').innerHTML = '<p>Joueur: ' + joueur + '</br> Robot: ' + robot + '</br> ' + resultat + '<br/></p>';
    });

    document.querySelector('.shifumiJs').addEventListener("mouseleave", function() {
        document.querySelector('.resultat').innerHTML = '';
    });
}