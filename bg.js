window.addEventListener('load', function () {

    var infoTable = document.querySelector('table[name="info"]');
    if (!infoTable) return;

    // 左画像
    var left = document.createElement('img');
    left.src = 'https://daimaruhoshizaki980-hub.github.io/pworld-bg/左戦国.jpg';
    left.style.position = 'fixed';
    left.style.top = '0';
    left.style.left = 'calc(50% - 820px)';
    left.style.width = '420px';
    left.style.pointerEvents = 'none';

    // 右画像
    var right = document.createElement('img');
    right.src = 'https://daimaruhoshizaki980-hub.github.io/pworld-bg/右戦国.jpg';
    right.style.position = 'fixed';
    right.style.top = '0';
    right.style.left = 'calc(50% + 400px)';
    right.style.width = '420px';
    right.style.pointerEvents = 'none';

    // 本文を前面へ
    infoTable.style.position = 'relative';
    infoTable.style.zIndex = '10';

    // 左右画像を本文より後ろへ
    left.style.zIndex = '5';
    right.style.zIndex = '5';

    document.body.appendChild(left);
    document.body.appendChild(right);

    // P-WORLD純正サイドメニューを最前面へ
    document.querySelectorAll('.pwSideMenu-button').forEach(function(menu) {
        menu.style.position = 'relative';
        menu.style.zIndex = '20';
    });

});
