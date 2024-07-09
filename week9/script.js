// Programmer: Ronish Shivakoti
// Date: July 09, 2024

$(document).ready(function () {
    // Slide Toggle Effect
    // Toggles the visibility of the description div with a sliding motion
    $('#toggleDescription').click(function () {
        $('#description').slideToggle();
    });

    // Animate Effect
    // Moves the image horizontally across the screen when clicked
    $('#moveImage').click(function () {
        $('#animatedImage').animate({ left: '+=200px' }, 1000);
    });

    // Fade Toggle Effect
    // Fades the disclaimer div in and out when the button is clicked
    $('#toggleDisclaimer').click(function () {
        $('#disclaimer').fadeToggle();
    });

    // Chained Animations
    // Triggers a series of animations on different elements sequentially
    $('#startAnimations').click(function () {
        $('#box1').fadeOut(1000).fadeIn(1000);
        $('#box2').delay(1000).slideUp(1000).slideDown(1000);
        $('#box3').delay(2000).animate({ width: '200px' }, 1000).animate({ width: '100px' }, 1000);
    });

    // Complex Interaction
    // Enlarges the product image slightly and displays additional information on hover
    $('.product-image').hover(function () {
        $(this).css('transform', 'scale(1.1)');
        $(this).siblings('.product-info').fadeIn();
    }, function () {
        $(this).css('transform', 'scale(1)');
        $(this).siblings('.product-info').fadeOut();
    });
});
