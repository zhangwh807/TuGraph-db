// redirect.js
window.onload = function() {
    alert("该链接文档不维护。");

    // 延迟3秒后重定向到新的页面
    setTimeout(function() {
        window.location.href = "https://tugraph.tech/docs/tugraph-db/zh/4.5.1/guide?lang=zh-CN";
    }, 3000);
};
