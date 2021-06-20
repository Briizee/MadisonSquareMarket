$(document).ready(() => {

    $('#cart').click(() => {

        $('#cartMenu').toggle();
    });

    $('#account').click(() => {
        $('#accountMenu').toggle();
    });

    $('#help').click(() => {
        $('#helpMenu').toggle();
    });

    $('#cartMenu').mouseleave(() => {
        $('.dropdown-menu').hide();
    });

    $('#accountMenu').mouseleave(() => {
        $('.dropdown-menu').hide();
    });

    $('#helpMenu').mouseleave(() => {
        $('.dropdown-menu').hide();
    });
});