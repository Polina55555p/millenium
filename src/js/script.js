$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("+7(999) 999 9999");
});

$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone-modal").mask("+7(999) 999 9999");
});

$(document).ready(function() {
    $('.slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000, 
      easing: 'ease-in',
      });
});
