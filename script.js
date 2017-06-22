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
        }, 1000);
    });

    //Scroll to info section
    $('#learnMore').on('click', function() {
        $('html, body').animate({
            scrollTop: $('.third').offset().top
        }, 1000);
    });
    
    
    //Contact section click functions
    $('.fa-facebook').on('click', function() {
        var $this = $('.fa-facebook');
        switchActive($this);
        $('.contactViews').find('.fb').removeClass('hidden').addClass('showing');
    });

    $('.fa-phone').on('click', function() {
        var $this = $('.fa-phone');
        switchActive($this);
        $('.contactViews').find('.phone').removeClass('hidden').addClass('showing');
    });

    $('.fa-whatsapp').on('click', function() {
        var $this = $('.fa-whatsapp');
        switchActive($this);
        $('.contactViews').find('.whats').removeClass('hidden').addClass('showing');
    });


});

// Function to switch between active/inactive
function switchActive(toSwitch) {
    toSwitch.parent().find('.fa').removeClass('active').addClass('inactive');
    toSwitch.removeClass('inactive').addClass('active');
    $('.contactViews').find('span').removeClass('showing').addClass('hidden');
}
