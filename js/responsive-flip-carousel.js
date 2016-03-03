$(function () {

  $('nav a').click(function (event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $('.portfolio').removeClass('active');
    $(target).addClass('active');
  });

  var portfolios = [];

  $('.portfolio').each(function (index, ele) {
   $(ele).data('eq', index);
   var portfolio = { 
     id: $(this).attr('id'),  
     activeSlide: 0, 
     numSlides: $(this).find('.slide').size()
   };
   portfolios.push(portfolio);
  });

  console.log(portfolios);

  $('.portfolio a.next').click(function (event) {
    event.preventDefault();
    var eq = $(this).parent().data('eq');
    var portfolio = portfolios[eq];
    if (portfolio.activeSlide < portfolio.numSlides - 1) {
      portfolio.activeSlide += 1;
    } else {
      portfolio.activeSlide = 0;
    }
    $('#'+portfolio.id).find('.slide').removeClass('active');
    $('#'+portfolio.id).find('.slide').eq(portfolio.activeSlide).addClass('active');
  });

  $('.portfolio a.prev').click(function (event) {
    event.preventDefault();
    var eq = $(this).parent().data('eq');
    var portfolio = portfolios[eq];
    if (portfolio.activeSlide > 0) {
      portfolio.activeSlide -= 1;
    } else {
      portfolio.activeSlide = portfolio.numSlides - 1;
    }
    $('#'+portfolio.id).find('.slide').removeClass('active');
    $('#'+portfolio.id).find('.slide').eq(portfolio.activeSlide).addClass('active');
  });

  $(window).resize(function () {
    var setHeight = $('.slide').height();
    $('.portfolio').height(setHeight);
  });

});