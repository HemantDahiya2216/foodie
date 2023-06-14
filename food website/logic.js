$(document).ready(function(){
    // var x = 0;
    // $("#menu-bar").click(function() {
    //     if(x==0) {
    //         x=1;
    //         $(this).addClass('rotate');$(this).removeClass('rotate1');
    //         $('.nav-items').addClass('nav-toggle');
    //     }
    //     else{
    //         x=0;
            
    //         $(this).addClass('rotate1');
    //         setTimeout(function () {}, 1000);
            
    //     }
    // })
    $('#menu-bar').click(function(){
        $(this).toggleClass('rotate');
        $('.nav-items').toggleClass('nav-toggle');
    })

    // $(window).on('scroll load',function(){
    //     $('#menu-bar').removeClass('rotate');
    //     $('.nav-items').removeClass('nav-toggle');
    // })


    // $('.menu .list .button').click(function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    //     let src=$(this).attr('data-src');
    //     $('#menu-img').attr('src',src);
    // })

    $('.menu .list .button').click(function(){

        var target=$(this).data('src');
        var imagePath=target + '.jpeg';
        $('#menu-img').attr('src',imagePath);

     })
    
    
    


})


