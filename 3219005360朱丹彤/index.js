window.addEventListener('load', function() {

    /* 搜索框 */
    var search = document.querySelector('input');
    search.onfocus = function() {
        search.placeholder = '';
    }
    search.onblur = function() {
        search.placeholder = '音乐/视频/电台/用户';
    }

    /* 用户名显示 */

    // 获取元素
    var log = document.querySelector('.log');
    var userPic = document.querySelector('.userPic');
    // 获取?以及后面的字符串
    var theme = window.location.search;
    // 切除?
    var userName = theme.slice(1);
    // 分割字符串
    var uArr = userName.split('|');
    // console.log(uArr[2]);


    // alert(window.location.search)
    if (theme == null || theme == '') {
        log.style.display = 'block';
        userPic.style.display = 'none';
        // alert(theme);
    } else {
        log.style.display = 'none';
        userPic.style.display = 'block'
        userPic.children[1].innerHTML = uArr[0];
        userPic.children[0].src = uArr[1];
        // alert(theme);
        // alert(theme.slice(1));
    }
    //  alert(theme);


    // 发送ajax请求

    /*     console.log(userPic.children[1]);
        let http = new XMLHttpRequest()
            // http.withCredentials = true 部分请求或许需要该配置，具体请先查看文档
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) {
                console.log(JSON.parse(http.responseText));

            }
        }
        http.open("GET", 'http://musicapi.leanapp.cn/playlist/catlist', true);
        http.send(); */




    /* 轮播图 */
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
            for (var j = 0; j < ol.children.length; j++) {
                ol.children[j].className = '';
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


    /* js动态写入热门推荐模块 */

    // 模拟数据
    hotDatas = ['『睡前故事』闭眼倾听 沉入恬静梦乡',
        '『电台节目』《Melody》Cover：青春二',
        '『电台节目』玺(Cover:葛冬棋)',
        '一股情感的循环 ❤ 中文丧',
        '一股情感的循环 ❤ 中文丧',
        '一股情感的循环 ❤ 中文丧',
        '一股情感的循环 ❤ 中文丧',
        '一股情感的循环 ❤ 中文丧'
    ]

    // 获取元素
    var hotCon = document.querySelector('.hot-con');

    // 循环写入
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
            // 创建元素
        var li = document.createElement('li');
        // 写入
        hotCon.appendChild(li);
        // 插入元素
        li.innerHTML = hotContent;
    }

    /* js动态写入新碟上架模块 */

    // 数据模拟
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
    console.log(newDatas);


    // 获取元素
    var newSlide = document.querySelector('.new-slide');
    // 创建元素
    var nUl = newSlide.querySelector('ul');

    // 写入
    for (var i = 0; i < newDatas.length; i++) {
        var newCon = `
            <div class="new-pic">
                <a href="#"><img src="http://p2.music.126.net/j1hivOS4I4ZKjODGF8zaIw==/109951164983520575.jpg" alt=""></a>
            </div>
            <p> <a href="#">${newDatas[i].songName }</a></p>
            <span><a href="#"> ${newDatas[i]['singerName']}</a></span>                            
            `
            // 创建元素
        var li = document.createElement('li');
        // 插入元素
        nUl.appendChild(li);
        // 写入
        li.innerHTML = newCon;
    }

    /* 入驻歌手动态写入 */

    // 模拟数据
    var singerDatas = ['张惠妹aMEI', 'Fine乐团', '萬曉利 ', '音乐人赵雷', '音乐人赵雷', '王三溥']

    // 获取元素
    var singer_Con = document.querySelector('.aside-con');

    // 循环写入
    for (var i = 0; i < 5; i++) {
        var singer_Content = `
        <div class="song-pic">
            <a href="#"><img src="images/songer${i+1}.jpg" alt=""></a>
        </div>
        <span> <a href="#">${singerDatas[i]}</a> </span>`;
        // 创建元素
        var li = document.createElement('li');
        // 写入内容
        li.innerHTML = singer_Content;
        // 插入元素
        singer_Con.appendChild(li);
    }

    /* 动态写入主播模块 */

    // 数据模拟
    var auchorDatas = [{
            uname: '陈立',
            id: '心理学家、美食家陈立教授'
        },
        {
            uname: 'DJ艳秋',
            id: '著名音乐节目主持人'
        },
        {
            uname: '国家大剧院古典音乐频道',
            id: '国家大剧院古典音乐官方'
        },
        {
            uname: '谢谢收听',
            id: '南京电台主持人王馨'
        },
        {
            uname: 'DJ晓苏',
            id: '独立DJ，CRI环球旅游广播特邀DJ'
        },
    ];
    console.log(auchorDatas);


    // 获取元素
    var anchorCon = document.querySelector('.anchor-con');
    // 创建元素
    var aUl = document.createElement('ul');
    // 插入元素
    anchorCon.appendChild(aUl);
    for (var i = 0; i < auchorDatas.length; i++) {
        var aContent = `
        <a href="#"><img src="images/anchor${i+1}.jpg" alt=""></a>
        <div class="info">
            <h4><a href="#">${auchorDatas[i].uname}</a></h4>
            <p> ${auchorDatas[i].id}</p>
        </div>
        `
        var li = document.createElement('li');
        li.innerHTML = aContent;
        aUl.appendChild(li);
    }


    /* js动态写入榜单模块 */

    // 创建数组存放榜单数据
    var listArr = [];

    // 发送ajax请求
    ajaxFunc('Get', "http://musicapi.leanapp.cn/top/list", function(response) {
        jsonObj = JSON.parse(response);
        // console.log(jsonObj);
        var listObj1 = jsonObj.playlist;
        listArr.push(listObj1)
        return listObj;
    }, true, 'idx=3')
    ajaxFunc('Get', "http://musicapi.leanapp.cn/top/list", function(response) {
        jsonObj = JSON.parse(response);
        // console.log(jsonObj);
        var listObj2 = jsonObj.playlist;
        listArr.push(listObj2)
        return listObj;
    }, true, 'idx=0')
    ajaxFunc('Get', "http://musicapi.leanapp.cn/top/list", function(response) {
        jsonObj = JSON.parse(response);
        // console.log(jsonObj);
        var listObj3 = jsonObj.playlist;
        listArr.push(listObj3)
        return listObj;
    }, true, 'idx=2')
    console.log(listArr);
    console.log(listArr.length);



    // 获取元素
    var listCon = document.querySelector('.list-con');

    // 外层循环 控制不同榜单

    for (var i = 0; i < 3; i++) {
        alert(888)

        // 创建元素
        var dl = document.createElement('dl');
        var dt = document.createElement('dt');
        var dd = document.createElement('dd');
        var ul = document.createElement('ul');

        // 插入元素
        dl.appendChild(dt);
        dl.appendChild(dd);
        dd.appendChild(ul);

        // 内容写入
        dt.innerHTML = `
                <dt class="item-top">
                    <div class="top-pic"><img src="${listArr[i].coverImgUrl}" alt=""></div>
                    <h4><a href="#">${listArr[i].name}</a> </h4>
                    <div class="list-btn">
                        <a href="#" class="list-play"></a>&nbsp;&nbsp;
                        <a href="#" class="list-col"></a>
                    </div>
                </dt>`;

        // 内层循环 控制榜单列表歌曲    
        for (var j = 0; j < 10; j++) {
            // 创建元素
            var li = document.createElement('li');
            // 写入内容
            li.innerHTML = `
                <span class="num1">${j+1}</span>
                <a href="javascript:;">${listArr[i].tracks[j].name}</a>
                <audio src="https://music.163.com/song/media/outer/url?id=${listArr[i].tracks[j].id}"></audio>
                `
                // 插入元素
            ul.appendChild(li);

            // 不同行背景色不一样
            if (j % 2 == 0) {
                li.style.backgroundColor = '#e8e8e8'
            } else {
                li.style.backgroundColor = '#f4f4f4'
            };

            /*       // 获取元素                                     
                var audio = document.querySelector('audio');
                // 给小li绑定点击事件
                ul.onclick = function(e) {

                    console.log(li.children[2]);
                    for (var k = 0; k < ul.children.length; k++) {
                        ul.children[k].children[2].pause();
                    }

                    // console.log(e.target);
                    if (e.target.nextElementSibling.paused) {
                        e.target.nextElementSibling.play();

                    } else {
                        e.target.nextElementSibling.pause();
                    }

                } */

        }

        // 创建元素
        var sdd = document.createElement('dd');
        // 写入内容
        sdd.innerHTML = `
                    <dd class="list-more"><a href="#"> 查看全部></a></dd>
                    `
            // 插入元素
        dl.appendChild(sdd);

        // 把最终全部内容dl整合插入listCon种
        listCon.appendChild(dl);
    }


})