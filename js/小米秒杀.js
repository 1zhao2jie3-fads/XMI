window.addEventListener('load',function(){
     //小米秒杀
     var conts = this.document.getElementById('conts');
     var LeftArrow = document.getElementById('LeftArrow');
     var RihgtArrow = this.document.getElementById('RightArrow');
     var us = this.document.querySelectorAll('.ul3 li');
    
 
     //秒杀商品列表轮播
     const step = 265; //每次运动的步长
     Frequency = 0;
     const total = (us.length - 1) * step  //最大运动距离
     let x = 0; //x轴的偏移量
     //点击左控制器
     LeftArrow.addEventListener('click',function(){
         x -= step;
        if(x < -1080) {
            x = 0;
        }
         for(var i =0; i < us.length; i++) {
             us[i].style.transform = `translate3d(${x}px, 0px, 0px)`
         }
     })
      //点击右控制器
      RihgtArrow.addEventListener('click',function(){
         x += step;
         if(x > 0) {
             x = 0;
         }
         if(Frequency == step) {
             us.style.left = 0;
             Frequency = 0;
             console.log(1)
         }
         Frequency--;
         for(var i =0; i < us.length; i++) {
             us[i].style.transform = `translate3d(${x}px, 0px, 0px)`

         }
     })
     
  //倒计时
  var spans = document.querySelectorAll(".h-subclass-time li");
  //先调用一次，防止刷新空白
  count();
  // 定时器
  var times = setInterval(count, 1000);
  function count() {
      var date = new Date();
      var InDate = new Date("2021/10/1 20:00:00");
      var sInDate = (InDate.getTime() - date.getTime()) / 1000;
      //小时
      var hr = parseInt(sInDate / 60 / 60 % 24);
      //分钟
      var min = parseInt(sInDate / 60 % 60);
      //秒
      var sec = parseInt(sInDate % 60);
      //添加成为00
      hr = hr < 10 ? "0" + hr : hr;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
      //给span赋值
      spans[0].innerHTML = hr;
      spans[1].innerHTML = min;
      spans[2].innerHTML = sec;
      //关闭定时器，使时间变为00：00：00
      if (sInDate <= 0) {
          clearInterval(times);
          spans[0].innerHTML = "00";
          spans[1].innerHTML = "00";
          spans[2].innerHTML = "00";

      }
  }
})