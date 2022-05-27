//页面加载完毕后加载js
window.addEventListener('load', function () {
    //nav
    var trs = document.getElementById('nav').querySelectorAll('a');
    for (var i = 0; i < trs.length; i++) {
        trs[i].onmousemove = function () {
            this.className = 'nav1';
        }
        trs[i].onmouseout = function () {
            this.className = '';
        }
    }
    //nav 搜索框 
    $(".css1").click(function(){
        $(".css4").show();
    })
    $('.nav-2').click(function(){
        $(".css4").hide();
    })
    $('.dy').click(function(){
        $(".css4").hide();
    })
    $('.nav-1').click(function(){
        $(".css4").hide();
    })
    $('.gjt').click(function(){
        $(".css4").hide();
    })
    //搜索框文字消失
    var text = document.getElementById('wbk');
    //得到焦点
    text.onfocus = function () {
        if (this.placeholder === '小米') {
            this.placeholder = '';
        }
    }
    //搜索框小框内的悬停事件
    var sow = document.getElementById('ssk').querySelectorAll('p');
    for (var i = 0; i < sow.length; i++) {
        sow[i].onmousemove = function () {
            this.className = 'sskbackGuound';
        }
        sow[i].onmouseout = function () {
            this.className = '';
        }
    }
    var sstb = document.getElementById('SouSuoTuBiao');
    var sousuo = document.getElementById('SouSuo');
    SouSuoTuBiao.onmousemove = function () {
        SouSuo.src = 'img/sousuo2.png';

    }
    SouSuoTuBiao.onmouseout = function () {
        SouSuo.src = 'img/sousuo1.png';
    }

    //失去焦点
    text.onblur = function () {
        if (this.placeholder === '') {
            this.placeholder = '小米';
        }
    }
    //广告弹窗
    var btn = document.querySelector('.close-btn');
    var box = document.getElementById('gg');
    btn.onclick = function () {
        box.style.display = 'none';
    }
    //5秒之后让广告隐藏
    setTimeout(function () {
        box.style.display = 'none';
    }, 5000)
    //30秒之后让广告循环显示
    setInterval(function () {
        box.style.display = 'block';
    }, 30000)

    //box-2内的ul里面的li的鼠标悬停事件
    var trs = document.getElementById('bgbc').querySelectorAll('li');
    for (var i = 0; i < trs.length; i++) {
        trs[i].onmousemove = function () {
            this.className = 'bg';
        }
        trs[i].onmouseout = function () {
            this.className = '';
        }
    }
    var trs = document.getElementById('Nav').querySelectorAll('a');
    for (var i = 0; i < trs.length; i++) {
        trs[i].onmousemove = function () {
            this.className = 'NavuLi';
            
        }
        trs[i].onmouseout = function () {
            this.className = '';
        }
    }


    //返回顶部按钮
    const J_atop = document.querySelectorAll('.J_rentu'); //给滚轮添加监听事件
    window.addEventListener('scroll', () => {
        J_atop.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            // 当网页向下滑动 854px 出现"返回顶部" 按钮
            if (document.body.scrollTop > 854 || document.documentElement.scrollTop > 854) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        })
    });
    //点击返回顶部
    var ture = document.getElementById('j_view6');
    ture.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    //滚动栏
    var view = document.getElementById('view');  //ul
    var gwe1 = document.getElementById('j_toolq'); //li
    var vew = document.getElementById('j_view1');  //img
    vew.onmousemove = function () {
        j_toolq.src = 'img/tool-01.png';

    }
    vew.onmouseout = function () {
        j_toolq.src = 'img/tool-1.png';
    }
    var gwe2 = document.getElementById('j_view2');
    gwe2.onmousemove = function () {
        j_toow.src = 'img/tool-02.png';
    }
    gwe2.onmouseout = function () {
        j_toow.src = 'img/tool-2.png';
    }
    var gwe3 = document.getElementById('j_view3');
    gwe3.onmousemove = function () {
        j_tooe.src = 'img/tool-03.png';
    }
    gwe3.onmouseout = function () {
        j_tooe.src = 'img/tool-3.png';
    }
    var gwe4 = document.getElementById('j_view4');
    gwe4.onmousemove = function () {
        j_toor.src = 'img/tool-04.png';
    }
    gwe4.onmouseout = function () {
        j_toor.src = 'img/tool-4.png';
    }
    var gwe5 = document.getElementById('j_view5');
    gwe5.onmousemove = function () {
        j_toot.src = 'img/tool-05.png';
    }
    gwe5.onmouseout = function () {
        j_toot.src = 'img/tool-5.png';
    }
    var gwe6 = document.getElementById('j_view6');
    gwe6.onmousemove = function () {
        j_tooy.src = 'img/totop_hover.png';
    }
    gwe6.onmouseout = function () {
        j_tooy.src = 'img/totop.png';
    }
    //购物车
    var ShoppingCart = document.getElementById('ShoppingCart');
    var GwcTb = document.getElementById('GwcTb');
    ShoppingCart.onmousemove = function () {
        GwcTb.src = 'img/tool-05.png';
    }
    ShoppingCart.onmouseout = function () {
        GwcTb.src = 'img/tool-5.png';
    }
    //倒计时
    var spans = document.querySelectorAll(".ul1 h3");
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
    //服务部分
    var view = document.getElementById('j_bottom');  //ul
    var gwe1 = document.getElementById('j_views1'); //li
    var vew1 = document.getElementById('j_ool1');  //img
    gwe1.onmousemove = function () {
        j_ool1.src = 'img/tool-03.png';

    }
    gwe1.onmouseout = function () {
        j_ool1.src = 'img/tool-3.png';
    }
    var gwe2 = document.getElementById('j_views2')
    gwe2.onmousemove = function () {
        j_ool2.src = 'img/7天退换货 (1).png';

    }
    gwe2.onmouseout = function () {
        j_ool2.src = 'img/7天退换货.png';
    }
    var gwe3 = document.getElementById('j_views3')
    gwe3.onmousemove = function () {
        j_ool3.src = 'img/15天无理由退货 (2).png';

    }
    gwe3.onmouseout = function () {
        j_ool3.src = 'img/15天无理由退货 (1).png';
    }
    var gwe4 = document.getElementById('j_views4')
    gwe4.onmousemove = function () {
        j_ool4.src = 'img/礼物 (1).png';

    }
    gwe4.onmouseout = function () {
        j_ool4.src = 'img/礼物.png';
    }
    var gwe5 = document.getElementById('j_views5')
    gwe5.onmousemove = function () {
        j_ool5.src = 'img/定位 (1).png';

    }
    gwe5.onmouseout = function () {
        j_ool5.src = 'img/定位.png';
    }
    //safe-auth  J_safeAuth的图片切换
    var img1 = document.getElementById('img1');
    setInterval(function () {
        img1.style.display = 'block';
    }, 3000)
    setInterval(function () {
        img1.style.display = 'none';
    }, 6000)

    var img2 = document.getElementById('img2');
    setInterval(function () {
        img2.style.display = 'none';
    }, 3000)
    setInterval(function () {
        img2.style.display = 'block';
    }, 6000)
    //鼠标移入微信图标让APP显示
    var WeChat = document.getElementById('wx');
    var millet = document.getElementById('millet');
    WeChat.onmousemove = function () {
        millet.style.display = 'block';
    }
    WeChat.onmouseout = function () {
        millet.style.display = 'none';
    }
    //box-2的轮播图
    var arrow_l = this.document.querySelector('.arrow-l');
    var arrow_r = this.document.querySelector('.arrow-r');
    var circle = this.document.querySelector('.circle'); //ol
    var ul = menuSwiper.querySelector('ul');
    var ulWidth = circle.offsetWidth;

    //自动播放轮播图
    var timer = this.setInterval(function () {
        //手动调用事件
        arrow_r.click();
    }, 5000)
    //鼠标移入ul移除定时器，移出开启定时器
    ul.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;
    })
    ul.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            //手动调用事件
            arrow_r.click();
        }, 5000)
    })
    //克隆第一张图片(li)放到ul最后面
    var first = ul.children[0].cloneNode(ture);
    ul.appendChild(first);
    //点击箭头实现轮播图
    //点击右侧按钮，图片进行滚动
    var num = 0;
    var circs = 0;
    arrow_r.addEventListener('click', function () {
        //如果滚动到最后一张图片，将ul的left值改为0
        if (num == 5) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * ulWidth);
        //点击右侧按钮，小圆圈跟随一起变化
        circs++;
        if (circs == circle.children.length) {
            circs = 0;
        }
        //函数调用
        circleChange();


    });
    //函数的调用
    function circleChange() {
        //先清楚其余小圆圈的circ类名
        for (let i = 0; i < circle.children.length; i++) {
            circle.children[i].style = '';
        }
        circle.children[circs].style.backgroundColor = 'hsla(0, 0%, 100%, 0.4)';
        circle.children[circs].style.borderColor = 'rgba(0, 0, 0, 0.4)';
    }
    //点击左侧侧按钮，图片进行滚动
    var num = 0;
    var circs = 0;
    arrow_l.addEventListener('click', function () {
        //如果滚动到最后一张图片，将ul的left值改为0
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * ulWidth + 'px';

        }
        num--;
        animate(ul, -num * ulWidth);

         //点击左侧按钮，小圆圈跟随一起变化
         circs++;
         if (circs == circle.children.length) {
             circs = 0;
         }
         //函数调用
         circleChange();

    });

    //动态生成小圆圈，有几张轮播图就生成几个小圆圈
    for (let i = 0; i < ul.children.length; i++) {
        //创建一个小li把小li插入到ul里面
        var li = document.createElement('li');
        //记录当前小圆圈的索引号，通过自定义属性来做
        li.setAttribute('index', i);
        circle.appendChild(li);
        circle.children[0].style.backgroundColor = 'hsla(0, 0%, 100%, 0.4)';
        circle.children[0].style.borderColor = 'rgba(0, 0, 0, 0.4)';
        //小圆圈的排他思想 
        li.addEventListener('click', function () {
            for (let i = 0; i < circle.children.length; i++) {
                circle.children[i].style = '';
            }
            this.style.backgroundColor = 'hsla(0, 0%, 100%, 0.4)';
            this.style.borderColor = 'rgba(0, 0, 0, 0.4)';
            //点击小圆圈移动图片
            //ul的移动距离是小圆圈的索引号乘以图片的宽度 注意是负值-
            //当我们点击了某了小li就拿到当前小li的索引号
            var index = this.getAttribute('index');
            //当我们点击了某了小li就把这个li的索引号给num
            //当我们点击了某了小li就把这个li的索引号给circs
            num = index;
            circs = index;
            animate(ul, -index * ulWidth);
        })
    }
    //小米秒杀
    var conts = this.document.getElementById('conts');
    var LeftArrow = document.getElementById('LeftArrow');
    var RihgtArrow = this.document.getElementById('RightArrow');
    var us = this.document.querySelectorAll('.ul3 li');
    //左侧按钮
    LeftArrow.addEventListener('mousemove', function () {
        LeftArrow.src = 'img/箭头 左 left (1).png';
    })
    LeftArrow.addEventListener('mouseout', function () {
        LeftArrow.src = 'img/箭头 左 left.png';
    })
    // 右侧按钮
    RihgtArrow.addEventListener('mousemove', function () {
        RihgtArrow.src = 'img/箭头 右 right (1).png';
    })
    RihgtArrow.addEventListener('mouseout', function () {
        RihgtArrow.src = 'img/箭头 右 right.png';
    })
    
    // var usWidth = 960;
    // var num = 0;
    // RihgtArrow.addEventListener('click',function(){
    //     if(num == 1) {
    //         us.style.left = 0;
    //         num = 0;
    //     }
    //     num++;
    //     animate(us, -num * usWidth);
    // } );
    // LeftArrow.addEventListener('click',function(){
    //     if(num == 1) {
    //         us.style.left = 0;
    //         num = 0;
    //     }
    //     num++;
    //     animate(us, -num * usWidth);
    // } );
    // // var timer = this.setInterval(function(){
    // //     if(num == 2) {
    // //         us.style.left = 0;
    // //         num = 0;
    // //     }
    // //     LeftArrow.click();
    // // },3000);




    // us.addEventListener('mouseenter',function(){
    //     clearInterval(timer);
    //     timer = null;
    // } )
    // us.addEventListener('mouseleave',function(){
    //     timer = setInterval(function() {
    //         //手动调用事件
    //         LeftArrow.click();
    //     },5000 )
    // } )
    

    //秒杀商品列表轮播
    const step = 960; //每次运动的步长
    Frequency = 0;
    const total = (us.length - 1) * step  //最大运动距离
    let x = 0; //x轴的偏移量
    //点击左控制器
    LeftArrow.addEventListener('click',function(){
        x -= step;
       if(x == -3840) {
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
        }
        Frequency--;
        for(var i =0; i < us.length; i++) {
            us[i].style.transform = `translate3d(${x}px, 0px, 0px)`
        }
    })
    
    //自动轮播
    var timers = this.setInterval(function () {
        //手动调用事件
        LeftArrow.click();
    }, 8000)
    let Stop = this.document.querySelector('.box-5');
    Stop.addEventListener('mouseenter',function(){
        clearInterval(timers);
        timers = null;
    })
    Stop.addEventListener('mouseleave',function(){
            timer = setInterval(function() {
                LeftArrow.click();
            },8000 )
        } )
    

    // 家电-商品列表切换
    let MovieFilm = document.querySelector('.box-10-2-1');
    let Popular = document.querySelector('.box-10-2-2');
    let Appliance = document.querySelector('.box-11');
    let Switch = document.getElementById('Switch');
    let MovieFilms = this.document.getElementById('MovieFilms');
    let Populars = this.document.getElementById('Populars');    //热门
    let Travel = this.document.getElementById('Travel');        //出行
    let Security = this.document.getElementById('Security');    //安防
    let Popularss = this.document.getElementById('Popularss');
    let Appliances = this.document.getElementById('Appliances');
    let AppLians = document.getElementById('AppLians');
    let Poursder = this.document.getElementById('Poursder');  
    let AudioHeadset = this.document.getElementById('AudioHeadset');
    let Applianceser = this.document.getElementById('Applianceser');    //热门2
    let Audiosors = this.document.getElementById('Audiosors');          //耳机音响
    

    
    MovieFilm.addEventListener('mouseenter',function(){
        Appliance.style.display = 'none';
        Switch.style.display = 'block';
    })
    Popular.addEventListener('mouseenter',function(){
        Appliance.style.display = 'block';
        Switch.style.display = 'none';
    })
    MovieFilms.addEventListener('mouseenter',function(){
       Populars.className = '';
    })
    Populars.addEventListener('mouseenter',function(){
        MovieFilms.className = '';  
    })
    Travel.addEventListener('mouseenter',function(){;
        Security.className = '';
        AppLians.style.display = 'none';
        AppLiAsers.style.display = 'block';
     })
    Security.addEventListener('mouseenter',function(){
        Popularss.className = '';
        Travel.className = '';
        Switch.display = 'none';
        Appliances.style.display = 'none';
        AppLians.style.display = 'block';
        AppLiAsers.style.display = 'none';
     })
     Popularss.addEventListener('mouseenter',function(){
        // Appliances.style.display = block;
        Security.className = '';
        Appliances.style.display = 'block';
        AppLians.style.display = 'none';
    })
    $(".box-10 p a").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    $("#Tab_lister").mouseenter(function(){
        $("#list_const").hide();
        $("#Tab_cons").show();
    })
    $("#Tab_list").mouseenter(function(){
        $("#Tab_cons").hide();
        $("#list_const").show();
    })

    $("#Tab_listers").mouseenter(function(){
        $("#list_consts").hide();
        $("#Tab_conser").show();
    })
    $("#Tab_lists").mouseenter(function(){
        $("#Tab_conser").hide();
        $("#list_consts").show();
    })

    $("#Tab_listersbotom").mouseenter(function(){
        $("#list_constsSwitch").hide();
        $("#Tab_conserSwitch").show();
    })
    $("#Tab_listsLister").mouseenter(function(){
        $("#Tab_conserSwitch").hide();
        $("#list_constsSwitch").show();
    })

     //顶部Tab切换
        $(".tab_list ul li").mouseenter(function(){
            $(".item").addClass();
            var index = $(this).index();
            //元素延迟
            $(function(){
                var timeout = setTimeout(function(){
                    $(".tab_con .item").eq(index).show().siblings().hide();
                },30);
            })
        });


        $(".bullet").mouseleave(function(){
            $(".item").hide();
        });
        $(".nav-2").mouseleave(function(){
            $(".item").hide();
        });

        $("#hideo").mouseenter(function(){
            $(".item").hide();
        })
})
