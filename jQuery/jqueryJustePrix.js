$(document).ready(function() {
    //Juste Prix
    var jOne = 0;
    var bot = 0;
    var out = null;
    var screen = $('.display');

    bot = Math.floor(Math.random() * 100);

    do {
        $('#user').on('change', function() {
            jOne = $(this).val();

            //logique du jeu:

            if (bot == jOne) {
                console.log(jOne);
                console.log(bot);
                screen.text('Vous avez Gagner !');
                out = 'true';
                bot = Math.floor(Math.random() * 100);
            } else if (bot < jOne) {
                //Message C'est Moins !
                console.log(jOne);
                console.log(bot);
                screen.text('C\'est Moins');
                out = 'false';
            } else if (bot > jOne) {
                //Message C'est Plus !
                console.log(jOne);
                console.log(bot);
                screen.text('C\'est Plus');
                out = 'false';
            }

            $(this).val('');
        });

    } while (out === 'true');
});