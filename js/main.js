  // ハンバーガーメニュー
$(function() {
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    jQuery('.menu').slideToggle('slow');
    return false;
  });
});

$(window).resize(function(){
  var w = $(window).width();
  var x = 740;
  if (w > x) {
      $('.menu').css({
        display: 'none'
      });
  } else {
    if ($('.btn-trigger').hasClass('active')) {
      $('.menu').css({
        display: 'block'
      });
    }
  }
});

    // ロードしたときにゆっくりフェードインさせる
$(function() {
    $('header').hide().fadeIn('slow');
    $('main').hide().fadeIn('slow');
    $('aside').hide().fadeIn('slow');
    $('footer').hide().fadeIn('slow');
});

$(function(){
  // スムーズスクロール
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// Works
$(function(){
  $('#work-icon-1').on('click', function() {
    jQuery('#overlay, .overlay-btn, #overlay-wrapper-1').fadeIn(500);
    return false;
  });
  $('#work-icon-2').on('click', function() {
    jQuery('#overlay, .overlay-btn, #overlay-wrapper-2').fadeIn(500);
    return false;
  });
  $('#work-icon-3').on('click', function() {
    jQuery('#overlay, .overlay-btn, #overlay-wrapper-3').fadeIn(500);
    return false;
  });
  $('.overlay-btn').on('click', function() {
    jQuery('#overlay, .overlay-wrapper, .overlay-btn').fadeOut(500);
    return false;
  });
});

// ふわっと表示
$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 50){
            $(this).addClass('active');
          }
      });
  });
});

// 背景のスクロール速度調整
jQuery(function($){  
  var about = $('#about');
  var about_ot = about.offset().top;  //「about 」の位置
  var skill =$('#skill');
  var skill_ot = skill.offset().top;  //「skill」の位置
  var skill_factor = 0.5;  //速度を調整する値
  
  $(window).scroll(function(){
    var dy = $(this).scrollTop();
     
    if(dy > about_ot) {
        skill.css('background-position',  '0 ' + (dy-about_ot-1100) * skill_factor + 'px');  
    }else{
        skill.css('background-position', '0 0');
    }          
  });
    
});