window.addEventListener('load', function() {})
    // 封装动画(对象，目标位置)
function animate(obj, target, callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function() {
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        // 缓动效果
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画（停止定时器）
            clearInterval(obj.timer);
            // 回调函数必须写在定时器结束后
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 15)
}