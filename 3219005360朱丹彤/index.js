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

    /* 搜索框 */
    var search = document.querySelector('input');
    search.onfocus = function() {
        search.placeholder = '';
    }
    search.onblur = function() {
        search.placeholder = '音乐/视频/电台/用户';
    }

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

    // 获取元素
    var newSlide = document.querySelector('.new-slide');
    // 创建元素
    var nUl = newSlide.querySelector('ul');

    // 写入
    for (var i = 0; i < newDatas.length; i++) {
        var newCon = `
            <div class="new-pic">
                <a href="#"><img src="images/new${i+1}.jpg" alt=""></a>
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

    // 模拟数据
    var listDatas = [{
            listName: '云音乐飙升榜',
            imgUrl: 'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg',
            songName: ['づ畢贛更噺孓τǎ啲ＱＱ涳間ā',
                '红色高跟鞋 (Live)',
                '千千阙歌',
                '说我爱你的一百种方式',
                '雨爱',
                '有一件美好的事情将要发生',
                '夏日终极浪漫',
                '月牙湾（Live）',
                '想见你想见你想见你',
                'Zoobi Doobi（Live）'
            ],
            songId: ['1444693102',
                '1446235247',
                '1446233390',
                '1442773498',
                '1445761206',
                '1433984099',
                '1444691726',
                '1429908226',
                '1403215687',
                '1446233385'
            ]
        },
        {
            listName: '云音乐新歌榜',
            imgUrl: 'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg',
            songName: ['夏天的风',
                'づ畢贛更噺孓τǎ啲ＱＱ涳間ā',
                '丢了你',
                '独角戏',
                '过活',
                '一千零一次我爱你',
                '暗示',
                '红色高跟鞋（Live）',
                '你我不一（Live）',
                '纸船',
            ],
            songId: ['1436709403',
                '1444693102',
                '1442508316',
                '1444961777',
                '1438865533',
                '1440443944',
                '1446245865',
                '1446235247',
                '1440968432',
                '1442312981'
            ]
        },
        {
            listName: '网易云原创歌曲榜',
            imgUrl: 'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg',
            songName: ['淡 (Live)',
                '黑夜',
                '千樱花旅馆',
                '奇妙世界',
                '夏日终极浪漫',
                '拜拜，心事备忘录',
                '提到了你',
                '月牙湾（Live）',
                '如何',
                '晚不了安',
            ],
            songId: ['1443592120',
                '1442504279',
                '1444450956',
                '1444836263',
                '1444691726',
                '1444175159',
                '1444723554',
                '1445800253',
                '1444781693',
                '1445026824'
            ]
        },
    ];

    (function() {

        // 获取元素
        var listCon = document.querySelector('.list-con');

        // 外层循环 控制不同榜单
        for (var i = 0; i < listDatas.length; i++) {

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
                <div class="top-pic"><img src="${listDatas[i].imgUrl}" alt=""></div>
                <h4><a href="#">${listDatas[i].listName}</a> </h4>
                <div class="list-btn">
                    <a href="#" class="list-play"></a>&nbsp;&nbsp;
                    <a href="#" class="list-col"></a>
                </div>
            </dt>`;

            // 内层循环 控制榜单列表歌曲    
            for (var j = 0; j < listDatas[i].songName.length; j++) {
                // 创建元素
                var li = document.createElement('li');
                // 写入内容
                li.innerHTML = `
            <span class="num1">${j+1}</span>
            <a href="javascript:;">${listDatas[i].songName[j]}</a>
            <audio src="https://music.163.com/song/media/outer/url?id=${listDatas[i].songId[j]}"></audio>
            `;
                // 插入元素
                ul.appendChild(li);

                // 不同行背景色不一样
                if (j % 2 == 0) {
                    li.style.backgroundColor = '#e8e8e8'
                } else {
                    li.style.backgroundColor = '#f4f4f4'
                };

                // 获取元素
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

                }

            }

            // 创建元素
            var sdd = document.createElement('dd');
            // 写入内容
            sdd.innerHTML = `
                <dd class="list-more"><a href="#"> 查看全部></a></dd>
                `;
            // 插入元素
            dl.appendChild(sdd);

            // 把最终全部内容dl整合插入listCon种
            listCon.appendChild(dl);
        }
    })();




    // 新碟上架

    /*  // 歌曲播放
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
     }, function(error) {}); */
})