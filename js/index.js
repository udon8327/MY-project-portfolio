//fullpage
$(function(){
  //3面技能圈重置
  function skillReset(){
    $('.svg1_1').attr('class','svg1_1');
    $('.svg1_2').attr('class','svg1_2');
    $('.svg1_3').attr('class','svg1_3');
    $('.svg1_4').attr('class','svg1_4');
    $('.svg1_5').attr('class','svg1_5');
    $('.svg2_1').attr('class','svg2_1');
    $('.svg2_2').attr('class','svg2_2');
    $('.svg2_3').attr('class','svg2_3');
    $('.svg2_4').attr('class','svg2_4');
    $('.svg3_1').attr('class','svg3_1');
    $('.svg3_2').attr('class','svg3_2');
    $('.svg3_3').attr('class','svg3_3');
    $('.svg3_4').attr('class','svg3_4');
  }
  //fullpage參數
  $('#dowebok').fullpage({
    //sectionsColor: ['#fad107', '#fff', '#fad107', '#fad107'],
    anchors: ['home', 'about', 'portfolio', 'contact'],
    menu: '#menu',
    verticalCentered: true,
    resize: false,
    scrollingSpeed: 800,
    navigation: true,
    slidesNavigation: true,
    scrollOverflow: true,
    afterLoad: function(anchorLink, index){
      //1面背景滑動
      if(index == 1){
        document.getElementById('section1bg').style.transform= "translateX(0px)";
      }
      //2面背景滑動
      if(index == 2){
        document.getElementById('section2bg').style.transform= "translateX(0px)";
      }
      //3面背景滑動
      if(index == 3){
        document.getElementById('section3bg').style.transform= "translateX(0px)";
      }
      //4面背景滑動
      if(index == 4){
        document.getElementById('section4bg').style.transform= "translateX(0px)";
      }
      //2面標題
      if(index == 2){
        $('.title2').addClass('titleactive');
      }
      //3面標題
      if(index == 3){
        $('.title3').addClass('titleactive');
      }
      //4面標題
      if(index == 4){
        $('.title4').addClass('titleactive');
      }
      //2面事件
      if(index == 2){
        $('.time1 .event').addClass('event1active');
        $('.time2 .event').addClass('event2active');
        $('.time3 .event').addClass('event3active');
        $('.time4 .event').addClass('event4active');
      }
      //3面技能圈
      if(index == 3){
        $('.svg1_1').attr('class','svg1_1 svg90');
        $('.svg1_2').attr('class','svg1_2 svg80');
        $('.svg1_3').attr('class','svg1_3 svg60');
        $('.svg1_4').attr('class','svg1_4 svg90');
        $('.svg1_5').attr('class','svg1_5 svg70');
        $('.svg2_1').attr('class','svg2_1 svg90');
        $('.svg2_2').attr('class','svg2_2 svg70');
        $('.svg2_3').attr('class','svg2_3 svg60');
        $('.svg2_4').attr('class','svg2_4 svg90');
        $('.svg3_1').attr('class','svg3_1 svg90');
        $('.svg3_2').attr('class','svg3_2 svg80');
        $('.svg3_3').attr('class','svg3_3 svg70');
        $('.svg3_4').attr('class','svg3_4 svg80');
      }
    },
    onLeave: function(index, direction){
      //2面標題
      if(index == 2){
        $('.title2').removeClass('titleactive');
      }
      //3面標題
      if(index == 3){
        $('.title3').removeClass('titleactive');
      }
      //4面標題
      if(index == 4){
        $('.title4').removeClass('titleactive');
      }
      //3面技能圈
      if(index == 3){
        setTimeout(function(){
          skillReset();
        }, 500);
      }
      //1面背景滑動
      if(index == 2){
        document.getElementById('section1bg').style.transform= "translateX(0px)";
      }
      if(index == 1||index == 3||index == 4){
        document.getElementById('section1bg').style.transform= "translateX(-200px)";
      }
      //2面背景滑動
      if(index == 1||index == 3){
        document.getElementById('section2bg').style.transform= "translateX(0px)";
      }
      if(index == 2||index == 4){
        document.getElementById('section2bg').style.transform= "translateX(-200px)";
      }
      //3面背景滑動
      if(index == 2||index == 4){
        document.getElementById('section3bg').style.transform= "translateX(0px)";
      }
      if(index == 1||index == 3){
        document.getElementById('section3bg').style.transform= "translateX(-200px)";
      }
      //4面背景滑動
      if(index == 1||index == 3){
        document.getElementById('section4bg').style.transform= "translateX(0px)";
      }
      if(index == 1||index == 2||index == 4){
        document.getElementById('section4bg').style.transform= "translateX(-200px)";
      }
      //2面事件
      if(index == 2){
        setTimeout(function(){
          $('.time1 .event').removeClass('event1active');
          $('.time2 .event').removeClass('event2active');
          $('.time3 .event').removeClass('event3active');
          $('.time4 .event').removeClass('event4active');
        },300);

      }
    },
    afterSlideLoad: function(anchorLin, index, slideIndex, direction){
      //3-1面技能圈
      if(index == 3&&slideIndex == 0){
        $('.svg1_1').attr('class','svg1_1 svg90');
        $('.svg1_2').attr('class','svg1_2 svg80');
        $('.svg1_3').attr('class','svg1_3 svg60');
        $('.svg1_4').attr('class','svg1_4 svg90');
        $('.svg1_5').attr('class','svg1_5 svg70');
      }
      //3-2面技能圈
      if(index == 3&&slideIndex == 1){
        $('.svg2_1').attr('class','svg2_1 svg90');
        $('.svg2_2').attr('class','svg2_2 svg70');
        $('.svg2_3').attr('class','svg2_3 svg60');
        $('.svg2_4').attr('class','svg2_4 svg90');
      }
      //3-3面技能圈
      if(index == 3&&slideIndex == 2){
        $('.svg3_1').attr('class','svg3_1 svg90');
        $('.svg3_2').attr('class','svg3_2 svg80');
        $('.svg3_3').attr('class','svg3_3 svg70');
        $('.svg3_4').attr('class','svg3_4 svg80');
      }
    },
    onSlideLeave: function(anchorLin, index, slideIndex, direction){
      //3-1面技能圈
      if(index == 3&&slideIndex == 0){
        skillReset();
      }
      //3-2面技能圈
      if(index == 3&&slideIndex == 1){
        skillReset();
      }
      //3-3面技能圈
      if(index == 3&&slideIndex == 2){
        skillReset();
      }
    }
  });
});

//頭像
$(function() {
  var cards = document.querySelector(".cards");
  var images = document.querySelectorAll(".card__img");
  var backgrounds = document.querySelectorAll(".card__bg");
  var range = 40;

  // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
  var calcValue = function calcValue(a, b) {return (a / b * range - range / 2).toFixed(1);}; // thanks @alice-mx

  var timeout = void 0;
  document.addEventListener('mousemove', function (_ref) {var x = _ref.x,y = _ref.y;
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(function () {
      var yValue = calcValue(y, window.innerHeight);
      var xValue = calcValue(x, window.innerWidth);
      console.log(xValue, yValue);
      cards.style.transform = "rotateX(" + -yValue + "deg) rotateY(" + xValue + "deg)";

      [].forEach.call(images, function (image) {
        image.style.transform = "translateX(" + -xValue + "px) translateY(" + yValue + "px)";
      });

      [].forEach.call(backgrounds, function (background) {
        background.style.backgroundPosition = xValue * .45 + "px " + -yValue * .45 + "px";
      });
    });
  }, false);
});

//作品pop
$(function(){

  $('.work').on('click',function(){
    var pop = $(this).attr('date-pop');
    $('img.picmain').attr('src','');
    $('#pop').fadeIn(300);
    $('img.picmain').attr('src','img/'+pop+'_1.jpg');

    //圖片生成函式
    function picimg(e){
      for(i = 1; i <= e; i++){
        if(i==1){
          $('.pic').append('<div data-imgurl="img/'+pop+'_'+i+'.jpg" class="picimg active" style="background: url(img/'+pop+'_'+i+'.jpg) no-repeat center center;background-size: cover;"></div>');
        }else{
          $('.pic').append('<div data-imgurl="img/'+pop+'_'+i+'.jpg" class="picimg" style="background: url(img/'+pop+'_'+i+'.jpg) no-repeat center center;background-size: cover;"></div>');
        }
      }
    }

    //作品內容生成
    if(pop == 'web1'){
      $('#pop h4').text('泰麵Thai-Style 官網');
      $('#pop p').text('泰國進口醬料拌麵的官網，以鮮豔的色調和動態效果強調拌麵的美味。');
      $('a.viewsite').show();
      $('a.viewsite').attr('href','http://www.thaistyle.com.tw/index.html');
      picimg(3);
    }else if(pop == 'web2'){
      $('#pop h4').text('UNO Rough多功能頸枕 銷售頁');
      $('#pop p').text('多功能頸枕的銷售頁，整體使用清新簡潔的風格，配上影片與文字說明。');
      $('a.viewsite').show();
      $('a.viewsite').attr('href','https://www.shiningdate.com/campaign/1808/27/uno/index.html');
      picimg(3);
    }else if(pop == 'web3'){
      $('#pop h4').text('皇家農場100%鮮果汁 官網');
      $('#pop p').text('100%鮮果汁的官網，五顏六色的水果搭上滿版大螢幕輪播強調果汁的鮮純度。');
      $('a.viewsite').show();
      $('a.viewsite').attr('href','http://www.royal-farm.com/index.html');
      picimg(4);
    }else if(pop == 'web4'){
      $('#pop h4').text('玖瓏數位科技 官網');
      $('#pop p').text('玖瓏數位科技的官網，使用各種圖片搭配文字來介紹電子商務公司多元化的服務。');
      $('a.viewsite').show();
      $('a.viewsite').attr('href','http://growdigi.com/index.html');
      picimg(4);
    }else if(pop == 'web5'){
      $('#pop h4').text('遠見國際會計師事務所 官網');
      $('#pop p').text('會計師事務所的官網，整體風格較為簡約以強調會計事務的專業性與精準性。');
      $('a.viewsite').show();
      $('a.viewsite').attr('href','https://www.visioncpa.com.tw/index.html');
      picimg(3);
    }else if(pop == 'web6'){
      $('#pop h4').text('Case Logic後背包 銷售頁');
      $('#pop p').text('後背包產品的銷售頁，以醒目的標語與倒數計時吸引消費者的目光與購買動力。');
      $('a.viewsite').show();
      $('a.viewsite').attr('href','http://www.51storage.com/campaign/2017/november/21/caselogic/index.html');
      picimg(3);
    }else if(pop == 'web7'){
      $('#pop h4').text('EQUA歐洲精緻水瓶 銷售頁');
      $('#pop p').text('精緻水瓶系列的銷售頁，因為產品走精緻路線所以風格也強調簡約時尚。');
      $('a.viewsite').show();
      $('a.viewsite').attr('href','https://www.shiningdate.com/campaign/1809/10/equa/index.html');
      picimg(2);
    }else if(pop == 'web8'){
      $('#pop h4').text('中秋好食特選 銷售頁');
      $('#pop p').text('中秋節促銷的銷售頁，整體風格加入許多的中秋節要素，但又不會看起來過於傳統。');
      $('a.viewsite').show();
      $('a.viewsite').attr('href','https://www.shiningdate.com/campaign/1809/07/mooncake/index.html');
      picimg(3);
    }else if(pop == 'web9'){
      $('#pop h4').text('LoveLive! Calendar!!');
      $('#pop p').text('幫某偶像團體製作的時程行事曆，與Google日曆API結合讓多人能共同管理，並且將行程顯示在特製的獨立頁面上，包含Web Storage技術與大量字符操作。');
      $('a.viewsite').show();
      $('a.viewsite').attr('href','http://www.udonsite.com/lovelivecalendar/');
      picimg(2);
    }else if(pop == 'web10'){
      $('#pop h4').text('嘸蝦米打字練習');
      $('#pop p').text('嘸蝦米打字練習');
      $('a.viewsite').show();
      $('a.viewsite').attr('href','https://www.visioncpa.com.tw/index.html');
      picimg(3);
    }else if(pop == 'gra1'){
      $('#pop h4').text('深杯子品牌系列');
      $('#pop p').text('深杯子品牌系列商品圖，打造出最高級的冷壓初榨橄欖油。');
      $('a.viewsite').hide();
      picimg(4);
    }else if(pop == 'gra2'){
      $('#pop h4').text('深杯子品牌系列');
      $('#pop p').text('深杯子品牌系列商品圖，打造出最高級的冷壓初榨橄欖油。');
      $('a.viewsite').hide();
      picimg(3);
    }else if(pop == 'gra3'){
      $('#pop h4').text('新生活魚子醬面膜');
      $('#pop p').text('新生活魚子醬面膜商品圖，強調美妝產品所重視的精緻感。');
      $('a.viewsite').hide();
      picimg(4);
    }else if(pop == 'gra4'){
      $('#pop h4').text('新生活保濕面膜');
      $('#pop p').text('新生活保濕面膜，水藍色色調與清爽的風格來強調保濕的功能。');
      $('a.viewsite').hide();
      picimg(4);
    }else if(pop == 'gra5'){
      $('#pop h4').text('各式商品EDM');
      $('#pop p').text('各式商品EDM，根據銷售商品的主題做出適合的風格。');
      $('a.viewsite').hide();
      picimg(4);
    }else if(pop == 'gra6'){
      $('#pop h4').text('各式銷售活動頁');
      $('#pop p').text('各式銷售活動頁，根據銷售商品的主題做出適合的風格。');
      $('a.viewsite').hide();
      picimg(4);
    }else if(pop == 'gra7'){
      $('#pop h4').text('各式銷售活動頁');
      $('#pop p').text('各式銷售活動頁，根據銷售商品的主題做出適合的風格。');
      $('a.viewsite').hide();
      picimg(4);
    }else if(pop == 'gra8'){
      $('#pop h4').text('各式商品圖');
      $('#pop p').text('各式商品圖，根據銷售商品的主題做出適合的風格。');
      $('a.viewsite').hide();
      picimg(4);
    }else if(pop == 'gra9'){
      $('#pop h4').text('ICON與LOGO設計');
      $('#pop p').text('ICON與LOGO設計，包括自主開發APP的ICON與合作廠商的LOGO設計');
      $('a.viewsite').hide();
      picimg(2);
    }else if(pop == 'gra10'){
      $('#pop h4').text('應用APP介面設計');
      $('#pop p').text('應用APP介面設計，負責多款應用類APP的UI/UX設計。');
      $('a.viewsite').hide();
      picimg(4);
    }else if(pop == 'gra11'){
      $('#pop h4').text('遊戲APP介面設計');
      $('#pop p').text('遊戲APP介面設計，負責多款遊戲類APP的美術設計。');
      $('a.viewsite').hide();
      picimg(4);
    }else if(pop == 'oth1'){
      $('#pop h4').text('CG電繪');
      $('#pop p').text('CG電繪，負責繪製遊戲中各式角色與公司的吉祥物');
      $('a.viewsite').hide();
      picimg(2);
    }else if(pop == 'oth2'){
      $('#pop h4').text('CG電繪');
      $('#pop p').text('CG電繪，負責繪製遊戲中各式角色與公司的吉祥物');
      $('a.viewsite').hide();
      picimg(2);
    }else if(pop == 'oth3'){
      $('#pop h4').text('CG電繪');
      $('#pop p').text('CG電繪，負責繪製一些公司官網及臉書需要的圖片');
      $('a.viewsite').hide();
      picimg(2);
    }else if(pop == 'oth4'){
      $('#pop h4').text('日本語JLPT2級');
      $('#pop p').text('對日文有興趣所以去考取了日本語能力檢定2級。');
      $('a.viewsite').hide();
      picimg(1);
    }
  })

  //換主圖
  $('body').on('click','.picimg',function(){
    $(this).addClass('active').siblings().removeClass('active');
    var imrUrl = $(this).attr('data-imgurl');
    $('.picmain').attr('src',imrUrl);
  })

  //關閉pop
  $('.close').on('click',function(){
    $('#pop').fadeOut(300);
    $('.picimg').remove();
  })
  $('.popbg').on('click',function(){
    $('#pop').fadeOut(300);
    $('.picimg').remove();
  })

  $('.work').hover(
    function(){
      $(this).find('img').addClass('hoverin').removeClass('hoverout');
      $(this).find('div').addClass('barhoverin').removeClass('barhoverout');
    },
    function(){
      $(this).find('img').addClass('hoverout').removeClass('hoverin');
      $(this).find('div').addClass('barhoverout').removeClass('barhoverin');
    }
  );
});

$(document).ready(function(){
  setTimeout(function(){
    $('.loading').fadeOut(1000);
  },3000);
});

