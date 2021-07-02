/* Boutons Panneau Choix */
var btnUn = $(".un");
var btnDeux = $(".deux");
var btnTrois = $(".trois");
var btnQuatre = $(".quatre");
var btnCinq = $(".cinq");
var btnRetour = $(".btnRetour");

/* Jeux Game Page */
var jeu1 = $(".shifumiJs");
var jeu2 = $(".shifumi");
var jeu3 = $(".spock");
var jeu4 = $(".justePrix");
var jeu5 = $(".justePrix2");

/* Masquer overlay Initialement */
$('.hG').hide();
$('.hD').hide();
$('.bD').hide();
$('.bG').hide();
$('.mask').hide();

/* Jeux Masquer Initialement */
$(jeu1).hide();
$(jeu2).hide();
$(jeu3).hide();
$(jeu4).hide();
$(jeu5).hide();

$(btnRetour).hide();

/* Variables pour test d'affichage */
var gameActive = 'false';
var g1 = 'false';
var g2 = 'false';
var g3 = 'false';
var g4 = 'false';
var g5 = 'false';
var btnR = 'false';
var arrayV = [
    g1,
    g2,
    g3,
    g4,
    g5
];
var arrayG = [
    'un',
    'deux',
    'trois',
    'quatre',
    'cinq'
];
/* Fonctions pour controler l'affichage */

/* Fonction Overlay */

function open() {

    $('.hG').css({
        animationName: 'leftUp',
        animationDuration: '4s',
        animationDirection: 'normal'
    });
    $('.hD').css({
        animationName: 'rightUp',
        animationDuration: '4s',
        animationDirection: 'normal'
    });
    $('.bD').css({
        animationName: 'rightDown',
        animationDuration: '4s',
        animationDirection: 'normal'
    });
    $('.bG').css({
        animationName: 'leftDown',
        animationDuration: '4s',
        animationDirection: 'normal'
    });
    $('.hG, .hD, .bD, .bG').show().hide(4000);
    $('.mask').css({
        animationDirection: 'normal'
    }).show().hide(4000);

}

function closeAll() {

    $('.hG').css({
        animationName: 'leftUp',
        animationDuration: '4s',
        animationDirection: 'reverse'
    });
    $('.hD').css({
        animationName: 'rightUp',
        animationDuration: '4s',
        animationDirection: 'reverse'
    });
    $('.bD').css({
        animationName: 'rightDown',
        animationDuration: '4s',
        animationDirection: 'reverse'
    });
    $('.bG').css({
        animationName: 'leftDown',
        animationDuration: '4s',
        animationDirection: 'reverse'
    });
    $('.hG, .hD, .bD, .bG').show().hide(4000);
    $('.mask').css({
        animationDirection: 'reverse'
    }).show().hide(4000);
}

function close() {

    $('.hG').css({
        animationName: 'leftUp2',
        animationDuration: '2.5s'
    });
    $('.hD').css({
        animationName: 'rightUp2',
        animationDuration: '2.5s'
    });
    $('.bD').css({
        animationName: 'rightDown2',
        animationDuration: '2.5s'
    });
    $('.bG').css({
        animationName: 'leftDown2',
        animationDuration: '2.5s'
    });
    $('.hG, .hD, .bD, .bG').show().hide(4000);
    $('.mask').show().hide(4000);

}

/* Fonction Affichage Jeu */
/* gamePanel(jeu1, 0); */
function gamePanel(c, num) {

    //console.log(num);
    // tester si un jeu est actif
    if (gameActive === 'false') {
        $('header').slideUp().hide(900);
        $('#panneauChoix').slideUp().hide(950);
        $('#gamePage').addClass('overlay');
        $('.overlay').show();

        open();

        $(c).slideDown(200, function() {

            arrayV[num] = 'true';

            gameActive = 'true';
            $(btnRetour).show();

            //console.log(num);
            $('.' + arrayG[num]).css({
                borderColor: 'green'
            });

        }).show();

    } else if (gameActive === 'true' && btnR === 'active') {
        /* On s'assure de tout faire diparaitre et réinit les variables de visibilité */

        closeAll();

        $(jeu1).slideUp(function() {
            $(btnUn).css({
                borderColor: 'black'
            });
            g1 = 'false';
        }).hide();

        $(jeu2).slideUp(function() {
            $(btnDeux).css({
                borderColor: 'black'
            });
            g2 = 'false';
        }).hide();

        $(jeu3).slideUp(function() {
            $(btnTrois).css({
                borderColor: 'black'
            });
            g3 = 'false';
        }).hide();

        $(jeu4).slideUp(function() {
            $(btnQuatre).css({
                borderColor: 'black'
            });
            g4 = 'false';
        }).hide();

        $(jeu5).slideUp(function() {
            $(btnCinq).css({
                borderColor: 'black'
            });
            g5 = 'false';
        }).hide();

        setTimeout(function() {
            $(btnRetour).slideUp(function() {
                btnR = 'false';
                gameActive = 'false';
            }).hide();
            $('.overlay').hide();
            $('#gamePage').removeClass('overlay');
            $('header').slideDown().show(1200);
        }, 4200);
        clearTimeout();

    } else if (gameActive === 'true') {
        for (i = 0; i <= arrayV.length; i++) {
            // console.log(arrayV[i]);

            if (arrayV[i] === 'false') {
                // console.log(arrayV[i]);

            } else if (arrayV[i] === 'true') {
                // console.log(arrayV[i]);
                switch (i) {
                    case 0:
                        $(jeu1).slideUp(function() {

                            arrayV[i] = 'false';

                            gameActive = 'true';
                            //console.log(num);
                            $('.' + arrayG[0]).css({
                                borderColor: 'black'
                            });
                        }).hide();
                        break;
                    case 1:
                        $(jeu2).slideUp(function() {

                            arrayV[i] = 'false';

                            gameActive = 'true';
                            //console.log(num);
                            $('.' + arrayG[1]).css({
                                borderColor: 'black'
                            });
                        }).hide();
                        break;
                    case 2:
                        $(jeu3).slideUp(function() {

                            arrayV[i] = 'false';

                            gameActive = 'true';
                            //console.log(num);
                            $('.' + arrayG[2]).css({
                                borderColor: 'black'
                            });
                        }).hide();
                        break;
                    case 3:
                        $(jeu4).slideUp(function() {

                            arrayV[i] = 'false';

                            gameActive = 'true';
                            //console.log(num);
                            $('.' + arrayG[3]).css({
                                borderColor: 'black'
                            });
                        }).hide();
                        break;
                    case 4:
                        $(jeu5).slideUp(function() {

                            arrayV[i] = 'false';

                            gameActive = 'true';
                            //console.log(num);
                            $('.' + arrayG[4]).css({
                                borderColor: 'black'
                            });
                        }).hide();
                        break;
                }

            }
        }
        close();
        $(c).slideDown(500, function() {

            arrayV[num] = 'true';
            gameActive = 'true';

            //console.log(num);
            $('.' + arrayG[num]).css({
                borderColor: 'green'
            });
        }).show();
    }
}
/* Boutons choix du jeu */
$(btnUn).click(function() {
    gamePanel(jeu1, 0);
});
$(btnDeux).click(function() {
    gamePanel(jeu2, 1);
});
$(btnTrois).click(function() {
    gamePanel(jeu3, 2);
});
$(btnQuatre).click(function() {
    gamePanel(jeu4, 3);
});
$(btnCinq).click(function() {
    gamePanel(jeu5, 4);
});
$(btnRetour).click(function() {
    btnR = 'active';
    gamePanel();
    $('#panneauChoix').slideDown();
});

$('#gamePage').on('mouseleave', function() {
    $('#panneauChoix').slideDown();
});

$('#gamePage').on('mouseover', function() {
    $('#panneauChoix').slideUp().hide(950);
});