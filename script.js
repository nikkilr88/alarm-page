/* global $ */

/*
TODO

Add 'back to top' button

*/

$(document).ready(function() {
    
    
    //Scroll to contact section
    $('#contactBtn').on('click', function() {
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        },0);
    });

    //Scroll to info section
    $('#learnMore').on('click', function() {
        $('html, body').animate({
            scrollTop: $('.third').offset().top
        },0);
    });
    
    
    //Back to top button
    $(window).scroll(function(){
        $(window).scrollTop() >= $('.third').offset().top ? $('#backToTop').show('fade') : $('#backToTop').hide('fade');
    });
    
    $('#backToTop').on('click', function(){
        $('html,body').animate({
            scrollTop: 0
        },0);
    });
    
    
    //Contact section icon click functions
    $('.fa-facebook').on('click', function() {
        var $this = $('.fa-facebook');
        switchActive($this);
        $('#info').html('<a href="https://www.facebook.com/alarmsistemasdeseguridad/" target="_blank">Visíta nuesta página en Facebook <i class="fa fa-external-link"></i></a>');
    });

    $('.fa-phone').on('click', function() {
        var $this = $('.fa-phone');
        switchActive($this);
         $('#info').html('<a href="tel:5214771176978">477.117.6978</a>');
    });

    $('.fa-whatsapp').on('click', function() {
        var $this = $('.fa-whatsapp');
        switchActive($this);
         $('#info').html('<a href="https://api.whatsapp.com/send?phone=5214771176978" target="_blank">Mándanos un mensaje via Whatsapp <i class="fa fa-external-link"></i></a></span>');
    });


});

// Function to switch between active/inactive
function switchActive(toSwitch) {
    toSwitch.parent().find('.fa').removeClass('active').addClass('inactive');
    toSwitch.removeClass('inactive').addClass('active');
}
