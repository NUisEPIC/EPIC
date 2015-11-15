$(document).ready(function(){
 if(window.innerWidth>1000){
    $('#sidebar').affix({
    offset: {
      top: 100
    , bottom: function () {
        return (this.bottom = $('.bs-footer').outerHeight(true))
      }
    }
  });};
if(window.innerWidth <= 800 && window.innerHeight <= 600) {
 $('#blog h4').each(function() {
    var tis = $(this), state = false, answer = tis.next('div').hide().css('height','auto').slideUp();
    tis.click(function() {
      state = !state;
      answer.slideToggle(state);
      tis.toggleClass('active',state);
    });
  });
  $('#mce-EMAIL').on('keyup change', function() {
        if (this.value.length > 0) {
            $('#check-Sub').fadeIn(500);
        } else {
            $('#check-Sub').fadeOut(500);
        }
    });
     $('#epic-switch').click(function(){
      $('.visible-login').fadeOut(50);
      $(".nav li").delay(100).queue(function() {
          $('.nav li').css('width','95%').dequeue();
                $('#epicHidden').css('background-color','rgb(237,45,58)').dequeue();
                $('.navbar').css('background-color','#232323').dequeue();
              $('.nav li').css('margin-left','8%').dequeue();
                $('#nuvcHidden').fadeIn(300).dequeue();
                $('#ppHidden').fadeIn(300).dequeue();
                $('#epicHidden').fadeIn(300).dequeue();
                $('.hidden-login').delay(100).fadeIn(400).dequeue();
        });
     });
    $('#epic-switch-back').click(function(){
       $('.hidden-login').fadeOut(50);
             $('#nuvcHidden').fadeOut(50);
             $('#ppHidden').fadeOut(50);
             $('#epicHidden').fadeOut(50);

           $(".nav li").delay(100).queue(function() {

            $('.nav li').css('width','99.4%').dequeue();
                $('#exploreEpic').css('width','99.4%').dequeue();
                $('#epicHidden').css('background-color','#323232;').dequeue();
                $('.navbar').css('background-color','#323232;').dequeue();
            $('.visible-login').delay(100).fadeIn(400).dequeue();
        });

     });
      $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
    });
};

if(window.innerWidth > 800 && window.innerHeight > 600) {


  $(".navbar-fixed-bottom").css("position","absolute");
  var scroll=0;
  $(document).scroll(function(){
    var position=$("#home-page").height();
    scroll=$(this).scrollTop();
    if(scroll>position-3){
      $(".navbar-fixed-bottom").css("position","fixed");
      $(".navbar-fixed-bottom").css("top","0");
      $(".navbar-fixed-bottom").css("bottom","auto");
      $(".navbar").css("box-shadow", "3px 3px 3px rgb(240,240,240)");
    }
      var positionType=$(".navbar-fixed-bottom").css("position");
      if(scroll<=position/1.8&&positionType=="fixed"){
        $(".navbar-fixed-bottom").css("position","absolute");
        $(".navbar-fixed-bottom").css("top","auto");
        $(".navbar-fixed-bottom").css("bottom","0");
        $(".navbar").css("box-shadow", "none");
      }});
  $('#mce-EMAIL').on('keyup change', function() {
        if (this.value.length > 0) {
            $('#check-Sub').fadeIn(500);
        } else {
            $('#check-Sub').fadeOut(500);
        }
    });
  $('#blog h4').each(function() {
    var tis = $(this), state = false, answer = tis.next('div').hide().css('height','auto').slideUp();
    tis.click(function() {
      state = !state;
      answer.slideToggle(state);
      tis.toggleClass('active',state);
    });
  });
  $('#epic-switch').click(function(){

      $('.visible-login').fadeOut(50);

      $(".nav li").delay(100).queue(function() {

          $('.nav li').css('width','32%').dequeue();

                $('#epicHidden').css('background-color','rgb(237,45,58)').dequeue();
                $('.navbar').css('background-color','#232323').dequeue();
              $('.nav li').css('margin-left','0').dequeue();
                $('#nuvcHidden').fadeIn(300).dequeue();
                $('#ppHidden').fadeIn(300).dequeue();
                $('#epicHidden').fadeIn(300).dequeue();
                $('.hidden-login').delay(100).fadeIn(400).dequeue();
        });

     });
    $('#epic-switch-back').click(function(){
       $('.hidden-login').fadeOut(50);
             $('#nuvcHidden').fadeOut(50);
             $('#ppHidden').fadeOut(50);
             $('#epicHidden').fadeOut(50);

           $(".nav li").delay(100).queue(function() {

            $('.nav li').css('width','11.4%').dequeue();
                $('#exploreEpic').css('width','22.4%').dequeue();
                $('#epicHidden').css('background-color','#fff').dequeue();
            $('.nav li').css('margin-left','0.1%').dequeue();
                $('.navbar').css('background-color','#FFF').dequeue();
            $('.visible-login').delay(100).fadeIn(400).dequeue();
        });

     });
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
    });
}
})
