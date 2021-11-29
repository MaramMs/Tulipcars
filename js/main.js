$(function(){
    $('.show-menu').click(()=>{
        $('nav ul').toggleClass('show');
    })
    $('.close-menu').click(()=>{
        $('nav ul').removeClass('show');
    })
})