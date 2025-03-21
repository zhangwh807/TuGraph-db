window.onload = function() {
    // 创建提示信息的容器
    var messageDiv = document.createElement('div');
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '0';
    messageDiv.style.left = '0';
    messageDiv.style.width = '100%';
    messageDiv.style.height = '100%';
    messageDiv.style.display = 'flex';
    messageDiv.style.justifyContent = 'center';
    messageDiv.style.alignItems = 'center';
    messageDiv.style.backgroundColor = '#f0f0f0';
    messageDiv.style.zIndex = '9999';
    messageDiv.innerText = '该链接不再维护，正在跳转新连接中...';

    // 添加提示信息到页面
    document.body.appendChild(messageDiv);

    // 设置2秒后执行跳转
    setTimeout(function() {
        window.location.replace('https://tugraph.tech/');
    }, 2000); // 2000毫秒 -> 2秒
};
