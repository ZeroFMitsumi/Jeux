$(document).ready(function() {

    var p = $('.p').html();
    var f = $('.f').html();
    var c = $('.c').html();
    var l = $('.l').html();
    var s = $('.s').html();
    var startImg = 'images\/pierre-logo_2-300x300.jpg';
    var arrImg = ['images\/shifumi-300x300_pierre.png',
        'images\/shifumi-300x300_Papier.png',
        'images\/shifumi-300x300_ciseaux.png',
        'images\/shifumi-300x300_Lezard.png',
        'images\/shifumi-300x300_spock.png'
    ];
    var arrRobot = [p,
        f,
        c,
        l,
        s
    ];
    var imgJ = $('.poneS');
    var imgR = $('.botS');
    var resultat = $('.screenResultS');


    $('.spock button').on('click', function() {

        var joueur = $(this).html();
        var robot = arrRobot[Math.floor(Math.random() * arrRobot.length)];

        //Changement de l'image du joueur:
        if (joueur === p) {
            imgJ.attr('src', arrImg[0]);
        } else if (joueur === f) {
            imgJ.attr('src', arrImg[1]);
        } else if (joueur === c) {
            imgJ.attr('src', arrImg[2]);
        } else if (joueur === l) {
            imgJ.attr('src', arrImg[3]);
        } else if (joueur === s) {
            imgJ.attr('src', arrImg[4]);
        }

        //Chamgement de l'image du robot:
        if (robot === p) {
            imgR.attr('src', arrImg[0]);
        } else if (robot === f) {
            imgR.attr('src', arrImg[1]);
        } else if (robot === c) {
            imgR.attr('src', arrImg[2]);
        } else if (robot === l) {
            imgR.attr('src', arrImg[3]);
        } else if (robot === s) {
            imgR.attr('src', arrImg[4]);
        }

        //Logique du jeu:
        if (joueur === robot) {
            resultat.text('Egalité !');
        } else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Pierre" && robot === "Lézard") || (joueur === "Ciseaux" && robot === "Feuilles") || (joueur === "Ciseaux" && robot === "Lézard") || (joueur === "Feuilles" && robot === "Pierre") || (joueur === "Feuilles" && robot === "Spock")) {
            resultat.text('Vous avez, Gagné !');
        } else if ((joueur === "Spock" && robot === "Ciseaux") || (joueur === "Spock" && robot === "Pierre") || (joueur === "Lézard" && robot === "Feuilles") || (joueur === "Lézard" && robot === "Spock")) {
            resultat.text('Gagné!');
        } else {
            resultat.text('Vous avez, Perdu !');
        }
    });

    $('.btnS').mouseleave(function(event) {
        imgJ.attr('src', startImg);
        imgR.attr('src', startImg);
        resultat.text('');
    });
});