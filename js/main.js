// for writing 1 line comment.
/* for writing multible lines comment */
/* fe 3 toro2 a3red behom ay 7agah ana3awezha 3la el browser
   1)window(bult-in opject) => we de betnazel ressalah mn a3la el browser maktob feha 
   el resallah beta3ty we betetketeb keda > window.alert("any massage"); we lazem anhy
   el statement be el (;) 3alashan afsel ben el gomal we ba3d
   
   2)Document(bult-in opject) => we de baktebha lw 3awez a3adel element fe el html 
   we bastad3eeh be el id beta3ooh we betetketeb keda:
   document.getElementById("id-name").innerHTML='omar abosrea';
   
   3)console(bult-in opject) => de lw 3awez a3red ressalah leya k developer fe el console
   beta3 el inspect we basta5dam ma3ah function esmha log we beyetketeb keda:
   console.log('hello world');*/
   // window.alert('omar');
   // document.getElementById("id-name").innerHTML='omar abosrea';
   // console.log('hello world');


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      center:true,
      autoplay:true,
      responsive:{
         0:{
             items:1
         },
         1000:{
             items:2
         },
         5000:{
             items:3
         }
     },
     autoplaySpeed:2000,
     dots:true,
     dotsSpeed:2000,
    });
});



var myNav = document.getElementById('mynav');
var prevScrollpos = window.pageYOffset;
function myCounter(){
    $('.counter').each(function() {
        var $this = $(this),
            countTo = Math.floor(Math.random() * $this.attr('data-count'));
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
          duration: 2000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });  
      });
}

if($('html,body').scrollTop()>=($('#About').offset().top) - 300){
   $('.progress-bar').eq(0).css({width:'95%'});
   $('.progress-bar').eq(1).css({width:'80%'});
   $('.progress-bar').eq(2).css({width:'90%'});
 }
window.onscroll = function () { 

    if($(window).scrollTop() >= $('#About').offset().top){
        $('.toTop').removeClass('d-none');
    }else{
        $('.toTop').addClass('d-none');
    }

    if($('html,body').scrollTop() >= $('#Home').offset().top){
        $('nav ul a').css('color','#FE7C00');
        $('nav ul a').not($('nav ul a').eq(0)).css('color','#000')
    }if($('html,body').scrollTop()>=($('#About').offset().top) - 300){
      $('.progress-bar').eq(0).css({width:'95%'});
      $('.progress-bar').eq(1).css({width:'80%'});
      $('.progress-bar').eq(2).css({width:'90%'});
    }if($('html,body').scrollTop()>=$('#About').offset().top){
        $('nav ul a').css('color','#FE7C00');
        $('nav ul a').not($('nav ul a').eq(1)).css('color','#000')
    }if($('html,body').scrollTop()>=$('#Services').offset().top){
        $('nav ul a').css('color','#FE7C00');
        $('nav ul a').not($('nav ul a').eq(2)).css('color','#000')
    }if($('html,body').scrollTop()>=$('#Works').offset().top){
        $('nav ul a').css('color','#FE7C00');
        $('nav ul a').not($('nav ul a').eq(3)).css('color','#000')
   if($('html,body').scrollTop()>=$('#Clients').offset().top){
        $('nav ul a').css('color','#FE7C00');
        $('nav ul a').not($('nav ul a').eq(4)).css('color','#000')
    }if($('html,body').scrollTop()>=$('#Counter').offset().top - 500){
      myCounter()
   }if($('html,body').scrollTop()>=$('#Blog').offset().top){
        $('nav ul a').css('color','#FE7C00');
        $('nav ul a').not($('nav ul a').eq(5)).css('color','#000')
    }if($('html,body').scrollTop()>=$('#Contact').offset().top){
        $('nav ul a').css('color','#FE7C00');
        $('nav ul a').not($('nav ul a').eq(6)).css('color','#000')
    }

    
};
}

$('nav ul a').click(function(){
   let sectionOffsetTop=$($(this).attr('href')).offset().top;
   $('html,body').animate({scrollTop:sectionOffsetTop},2000);
})

$('.toTop').click(function(){
   $('html,body').animate({scrollTop:0},2000);
})
// $('#Works ul li .nav-link').eq(0).css('color','#FE7C00');
// $('#Works ul li .nav-link').click(function(){
//     $(this).css('color','#FE7C00');
//     $('#Works ul li .nav-link').not($(this)).css('color','black');
// });

// let spanWidth = $('#homeP').outerWidth(true);
// // console.log(spanWidth)
