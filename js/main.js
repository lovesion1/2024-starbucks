$(document).ready(function(){
// $(function(){})로 단축가능
  const searchEl = $(".search")
  const searchInputEl = searchEl.find("input")

  searchEl.click(function(){
    searchInputEl.focus();
  });

  searchInputEl.focus(function(){
    searchEl.addClass('focused');
    searchInputEl.attr('placeholder','통합검색')
  })

  searchInputEl.blur(function(){
    searchEl.removeClass('focused');
    searchInputEl.attr('placeholder','')
  })

  const badgeEl = $("header .badges")

  // window 브라우저 창, 보고있는 화면 자체
  // lodash라이브러리의 throttle함수로 화면제어
  // _.throttle(함수,시간)
  $(window).scroll(_.throttle(function(){
    console.log(window.scrollY)
    if(window.scrollY > 500){
      //배지 숨기기
      gsap.to(badgeEl,.6,{
        opacity:0,
        display : 'none'
      })
    }else{
      //배지 보이기
      gsap.to(badgeEl,.6,{
        opacity:1,
        display : 'block'
      })
    }
  },300))
  // 자연스럽게 보이고 숨기기위해 gsap의 에니메이션 메소드 활용

  let fadeEls = $(".visual_wrap .fade-in")
  console.log(fadeEls)
  // const index = 0;
  // $.each(array, callback);
  fadeEls.each(function(index,fadeEl){
    // gsap.to(요소,지속시간(초),옵션(객체데이터 사용))    
    gsap.to(fadeEl , 1 ,{
      delay:( index + 1 ) * .7, //  0.7, 1.4, 2.1, 2.7 몇초뒤에 실행
      opacity:1
   });
  })

  $(".notice-bxslider").bxSlider({
    mode:"vertical",
    auto:true,
    pager:false
  })

  

 const $swiper = new Swiper(".promotion .swiper-container",{
  slidesPerView : 3,
  spaceBetween:10,
  centeredSlides:true,
  loop:true,
  autoplay:{
    delay:5000
  },
  pagination:{
    el:".promotion .swiper-pagination",
    clickable: true
  },
  navigation:{
    prevEl:".promotion .swiper-prev",
    nextEl:".promotion .swiper-next"
  }  
 })

 new Swiper(".footer_wrap .swiper-container",{
  autoplay:true,
  spaceBetween:30,
  slidesPerView:7
 })

 const promotionEl = $(".promotion"),
       promotionBtn = $(".toggle-promotion")
       const togglebtnEl =$('.toggle-btn');
 let isHidePromotion = false;
 
 promotionBtn.click(function(){
  isHidePromotion =!isHidePromotion
  // 반대가 되는 값을 반환해줌
  if(isHidePromotion){
    promotionEl.addClass("hide")
    togglebtnEl.attr('src','./images/btn_prom_down.png');
  }else{
    promotionEl.removeClass("hide")
    togglebtnEl.attr('src','./images/btn_prom_up.png');
  }
  $(".swiper-stop").click(function(){
    $swiper.autoplay.stop();
    this.attr("display","none")
    $(".swiper-start").attr("display","block")
  });

  $(".swiper-start").click(function(){
    $swiper.autoplay.start();
  });


 })




})



