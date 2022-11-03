$('.about_items > div').on('click', function(){
    $(this).children('.about_icon').toggleClass('about-rotate-icon');
    $(this).parent('.about_items').toggleClass('change_color');
    $(this).next('.about-text').slideToggle(300);
})

$('.features > div').on('click', function(){
    $(this).next('.block1-text').slideToggle(300);
})