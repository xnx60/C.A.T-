window.addEventListener('load', function() {
    // 轮播图
    var slideshow = document.querySelector('.slideshow');
    var slideshow_con = document.querySelector('.slideshow-con')
    var ul = slideshow.querySelector('.slide-pic');
    var ol = slideshow.querySelector('.circle-btn');
    var arrow_r = slideshow.querySelector('.arrow-r');
    var arrow_l = slideshow.querySelector('.arrow-l')
    var conWidth = slideshow_con.offsetWidth;
    var num = 0; // 右按钮点击
    var circle = 0; // 控制小圆圈的播放

    // 声明函数  控制小圆圈播放
    function changeCircle() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }


    // 小圆圈
    for (var i = 0; i < ul.children.length; i++) {
        // 创建小li
        var li = document.createElement('li');
        // 给小li设置属性
        li.setAttribute('index', i);
        // 插入小li
        ol.appendChild(li);
        // 给小圆圈绑定点击事件
        li.addEventListener('click', function() {
            // 点击小圆圈变色
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 点击小圆圈，图片移动
            var index = this.getAttribute('index');
            num = circle = index;
            animate(ul, -index * conWidth)
        })

    }
    ol.children[0].className = 'current';

    // 克隆第一张图片，实现无缝滚动
    var firstPic = ul.children[0].cloneNode(true);
    ul.appendChild(firstPic);

    // 给右侧按钮绑定点击事件
    arrow_r.addEventListener('click', function() {
        flag = false;
        // 点击右按钮图片滚动，实现无缝滚动
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * conWidth);
        // 小圆圈跟着变色
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        // 调用函数
        changeCircle();
    })

    // 给左侧按钮绑定点击事件
    arrow_l.addEventListener('click', function() {
        // 点击右按钮图片滚动，实现无缝滚动
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = num * conWidth + 'px';
        }
        num--;
        animate(ul, -num * conWidth);
        // 小圆圈跟着变色
        circle--;
        circle = circle < 0 ? ol.children.length - 1 : circle;
        // 调用函数
        changeCircle();
    })

    // 自动播放
    var timer = setInterval(function() {
        // 手动调用点击事件
        arrow_r.click();
    }, 2000)

    // 鼠标移动到上面停止计时器
    slideshow.addEventListener('mouseenter', function() {
        clearInterval(timer);
        // 清除定时器变量
        timer = null;
    })
    slideshow.addEventListener('mouseleave', function() {
        timer = setInterval(function() {
            arrow_r.click();
        }, 2000)
    })

    // 右侧悬浮
    var goBack = document.querySelector('.goBack');
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= 334) {
            goBack.style.display = 'block'
        } else {
            goBack.style.display = 'none'
        }

    })

    // 搜索框
    var search = document.querySelector('input');
    search.onfocus = function() {
        search.placeholder = '';
    }
    search.onblur = function() {
        search.placeholder = '音乐/视频/电台/用户';
    }

    // 热门推荐
    hotDatas = ['『睡前故事』闭眼倾听 沉入恬静梦乡',
        '『电台节目』《Melody》Cover：青春二',
        '『电台节目』玺(Cover:葛冬棋)',
        '一股情感的循环 ❤ 中文丧',
        '一股情感的循环 ❤ 中文丧',
        '一股情感的循环 ❤ 中文丧',
        '一股情感的循环 ❤ 中文丧',
        '一股情感的循环 ❤ 中文丧'
    ]

    var hotCon = document.querySelector('.hot-con');
    for (var i = 0; i < hotDatas.length; i++) {
        var hotContent = `
        <div class="hot-rec-pic">
            <a class="pic" href="#"><img src="images/hot-rec${i+1}.jpg" alt=""></a>
            <div class="bottom">
                <span> 67万</span>
                <a href="#"><img src="images/play.png" alt=""></a>
            </div>
        </div>
        <p>
            <a href="#">${hotDatas[i]}</a>
        </p>
        `
        var li = document.createElement('li');
        hotCon.appendChild(li);
        li.innerHTML = hotContent;
    }

    // 新碟上架
    var newDatas = [{
            songName: '新世界NEW WORLD',
            singerName: '华晨宇'
        },
        {
            songName: '我们的乐队 第6期',
            singerName: '我们的乐队'
        },
        {
            songName: '煎熬',
            singerName: '尹毓恪'
        },
        {
            songName: 'LOOK',
            singerName: 'Apink'
        }
    ];

    var newSlide = document.querySelector('.new-slide');
    var nUl = newSlide.querySelector('ul');
    for (var i = 0; i < newDatas.length; i++) {
        var newCon = `
            <div class="new-pic">
                <a href="#"><img src="images/new${i+1}.jpg" alt=""></a>
            </div>
            <p> <a href="#">${newDatas[i].songName }</a></p>
            <span><a href="#"> ${newDatas[i]['singerName']}</a></span>                            
            `

        var li = document.createElement('li');
        nUl.appendChild(li);
        li.innerHTML = newCon;
    }

    // 榜单
    var listCon = document.querySelector('.list-con')
    var tArray = new Array();
    for (var i = 0; i < 3; i++) {
        var dl = document.createElement('dl');
        listCon.appendChild(dl);
        var dt = document.createElement('dt');
        dl.appendChild(dt)
        dt.innerHTML = `
            <dt class="item-top">
                <div class="top-pic"><img src="images/list1.jpg" alt=""></div>
                <h4><a href="#">云音乐飙升榜</a> </h4>
                <div class="list-btn">
                    <a href="#" class="list-play"></a>&nbsp;&nbsp;
                    <a href="#" class="list-col"></a>
                </div>
            </dt>`
        var dd = document.createElement(dd);
        dl.appendChild(dd);
        var ul = document.createElement(ul);
        dd.appendChild(ul);
        for (var i = 0; i < 10; i++) {
            var li = document.createElement(li);
            ul.appendChild(li);
            li.innerHTML = `
            <span class="num1">1</span>
            <a href="#">好想爱这个世界啊（live）</a>
            `
        }
        dl.children[2].innerHTML = `
        <dd class="list-more"><a href="#"> 查看全部></a></dd>
        `

    }

    // 新碟上架

    // 歌曲播放
    //最新音乐部分使用数据获取
    let $newList = $('ol#newList')
        // 创建查询
    var query = new AV.Query('Song');
    // query.startsWith('contain', 'true');
    query.find().then(function(results) {
        for (var i = 0; i < results.length; i++) {
            let song = results[i].attributes
            let li = `   
             <h3>${song.name}
                <span>${song.reMark}</span>
             </h3>
             <p>
                <svg class="icon icon-sq">
                  <use xlink:href="#icon-sq"></use>
                </svg>
                ${song.singer} - ${song.album}
              </p>
                <a class="play-button" href="#">
                    <svg class="icon icon-play">
                        <use xlink:href="#icon-play"></use>
                    </svg>
                </a>
            `
            $newList.append(li)
        }
    }, function(error) {});
})