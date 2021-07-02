$(document).ready(function() {

    var p = $('.p').html();
    var f = $('.f').html();
    var c = $('.c').html();
    var startImg = 'images\/imageAdécouper0.png';
    var arrImg = ['images\/shifumiPierre.png',
        'images\/shifumiFeuille.png',
        'images\/shifumiCiseaux.png'
    ];
    var arrRobot = [p,
        f,
        c
    ];
    var imgJ = $('.pone');
    var imgR = $('.bot');
    var resultat = $('.screenResult');


    $('.shifumi button').on('click', function() {

        var joueur = $(this).html();
        var robot = arrRobot[Math.floor(Math.random() * arrRobot.length)];

        //Changement de l'image du joueur:
        if (joueur === p) {
            imgJ.attr('src', arrImg[0]);
        } else if (joueur === f) {
            imgJ.attr('src', arrImg[1]);
        } else if (joueur === c) {
            imgJ.attr('src', arrImg[2]);
        }

        //Chamgement de l'image du robot:
        if (robot === p) {
            imgR.attr('src', arrImg[0]);
        } else if (robot === f) {
            imgR.attr('src', arrImg[1]);
        } else if (robot === c) {
            imgR.attr('src', arrImg[2]);
        }

        //Logique du jeu:
        if (joueur === robot) {
            resultat.text('Egalité !');
        } else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuille") || (joueur === "Feuille" && robot === "Pierre")) {
            resultat.text('Vous avez, Gagné !');
        } else if ((joueur === "Puit" && robot === "Ciseaux") || (joueur === "Puit" && robot === "Pierre") || (joueur === 'Feuille' && robot === "Puit")) {
            resultat.text('Gagné avec la technique secrète !');
        } else {
            resultat.text('Vous avez, Perdu !');
        }
    });

    $('.btn').mouseleave(function(event) {
        imgJ.attr('src', startImg);
        imgR.attr('src', startImg);
        resultat.text('');
    });
});