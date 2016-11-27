$(document).ready(function(){
  $('.novelty-slider, .sale-slider').bxSlider({
    controls: true,
    pager: false,
    //nextSelector: '#slider-next',
    //prevSelector: '#slider-prev',
    slideWidth: 135,
    minSlides: 1,
    maxSlides: 5,
    slideMargin: 5,
    adaptiveHeight: true,
    responsive: true
  });
    
});
$('.anyClass').liHarmonica({
            currentClass:'cur',//Класс для выделенного пункта меню
            onlyOne:true,      //true - открытым может быть только один пункт,
            //false - число открытых одновременно пунктов не ограничено
            speed:50          //Скорость анимации
        });
$( function() {
    $( "#tabs" ).tabs();
  } );

        