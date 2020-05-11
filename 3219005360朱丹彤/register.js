window.addEventListener('load', function() {

    // 获取元素
    var eye = document.querySelector('.eye');
    var phone = document.querySelector('#phone');
    var psw = document.querySelector('#psw');
    var btn = document.querySelector('.login-btn');
    var phoneE = document.querySelector('.phoneE');
    var pswE = document.querySelector('.pswE');

    /* 密码是否可见 */
    var flag = 0;
    eye.onclick = function() {
        if (flag == 0) {
            psw.type = 'text';
            eye.innerHTML = '';
            flag = 1;
        } else {
            psw.type = 'password';
            eye.innerHTML = ''
            flag = 0;
        }
    };


    /*     // 文本框字聚焦消失
        phone.addEventListener('focus', function() {
            // console.log(phone.placeholder);
            if (phone.placeholder == 'input your phone number') {
                this.placeholder == '';
            }
        });

        phone.addEventListener('blur', function() {
            if (phone.placeholder == '') {
                this.placeholder == 'input your phone number';
            }
        }); */
    /* 
        // 信息输入是否准确
        phone.addEventListener('blur', function() {
            // console.log(1);

            if (this.value != '' && this.value != '19924681039') {
                // console.log(88);
                phoneE.style.visibility = 'visible';
            }
        }) */

    btn.onclick = function() {

        // 发送ajax请求
        let http = new XMLHttpRequest()
            // http.withCredentials = true 部分请求或许需要该配置，具体请先查看文档
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) {
                console.log(JSON.parse(http.responseText));
                // 获取code键对应的值
                var code = JSON.parse(http.responseText).code;
                // 获取用户有关信息
                var datas = JSON.parse(http.responseText).profile;
                if (code == 200) {
                    // 实现页面跳转以及传递信息
                    window.location.href = "index.html?" + datas.nickname + '|' + datas.avatarUrl + '|' + datas.userId;
                } else {
                    alert('用户名或密码错误');
                    var pswE = document.querySelector('.pswE');
                    pswE.innerHTML = JSON.parse(http.responseText).message;
                }
            }
        }
        http.open("GET", 'http://musicapi.leanapp.cn/login/cellphone?phone=' + phone.value + '&password=' + psw.value, true);
        http.send();
    }
})