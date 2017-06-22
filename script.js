/* global $ */

$(document).ready(function(){
    
    $('#contactBtn').on('click', function(){
       $('html, body').animate({
      scrollTop: $('.contact').offset().top
    },1000);
    });
    
    $('#learnMore').on('click', function(){
       $('html, body').animate({
      scrollTop: $('.third').offset().top
    },1000);
    });
});