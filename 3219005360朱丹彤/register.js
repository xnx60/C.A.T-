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


    // 文本框字聚焦消失
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
    });

    // 信息输入是否准确
    phone.addEventListener('blur', function() {
        // console.log(1);

        if (this.value != '' && this.value != '19924681039') {
            // console.log(88);
            phoneE.style.visibility = 'visible';
        }
    })

    btn.onclick = function() {

        // 发送ajax请求
        let http = new XMLHttpRequest()
            // http.withCredentials = true 部分请求或许需要该配置，具体请先查看文档
        http.onreadystatechange = function() {
            if (http.readyState === 4 && http.status === 200) {
                console.log(JSON.parse(http.responseText));
                /*                 var datas = JSON.parse(http.responseText).account
                                console.log(datas.id); */
                if (phone.value == '19924681039' && psw.value == '18823935429abcd') {
                    window.location.href = "index.html";
                } else {
                    alert('手机号或密码错误')
                }
            }
        }
        http.open("GET", `http://musicapi.leanapp.cn/login/cellphone?phone=19924681039&password=18823935429abcd`, true);
        http.send();
    }
})