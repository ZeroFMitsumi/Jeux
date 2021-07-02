//Juste Prix
    var secondes = 30;
    var prix = 0;
    var prixMax = 20;
    var paris = null;
    var isPlay = true;

$(document).ready(function() {

    $('.prixMax').html(prixMax);

    $('#commencer').click(function() {

        $('#nombreIn').val('');
        //init prix avec random et var prixMax
        prix = Math.floor(Math.random() * prixMax);
        console.log(prix);
        $('.chrono').html(30);
        secondes = 30;
        isPlay = true;
        $('.reponse').html('Trouvez lz Juste Prix !');
        $('#paris').css({'visibility': 'visible', 'opacity': '1'});
        
        $('#commencer')
            .css('background-color', 'green')
            .html('Jeu en cours');

        var chrono = setInterval(function() {
            if (secondes === 0) {
                clearInterval(chrono);
                $('.reponse').html('Perdu, temps écouler.');
                $('#paris').css({'visibility': 'hidden', 'opacity': '0'});
                $('#commencer').html('Recommencer');
                isPlay = false;
            }
            else if (isPlay) {
                secondes--;
                $('.chrono').html(secondes);
            }
            else {
                clearInterval(chrono);
                $('#paris').css({'visibility': 'hidden', 'opacity': '0'});
            }
        }, 1000);

        $('#paris').submit(function(event) {

            if (isPlay) {
            paris = $('#nombreIn').val();

            if (paris == prix) {
                $('.reponse').html('Gagné !');
                $('#paris').css({'visibility': 'hidden', 'opacity': '0'});
                
                $('#commencer')
                    .css('background-color', '#d9534f')
                    .html('Recommencer');
                
                isPlay = false;
            }
            else if (paris < prix) {
                $('.reponse').html('Plus Grand !');
            }
            else {
                $('.reponse').html('Plus Petit !');
            }

            // console.log($('#nombreIn').val(''));
            $('#nombreIn').val('');
        }
            event.preventDefault();
        });
        
    });

});