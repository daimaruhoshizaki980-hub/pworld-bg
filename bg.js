window.addEventListener('load', function () {

    var sideMenu = document.getElementById('pwSideMenu-left');
    if (!sideMenu) return;

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

    // レイヤー順
    left.style.zIndex = '1';
    right.style.zIndex = '1';

    // サイドメニューを前面
    sideMenu.style.position = 'relative';
    sideMenu.style.zIndex = '10';

    // 本文も前面
    var infoTable = document.querySelector('table[name="info"]');
    if (infoTable) {
        infoTable.style.position = 'relative';
        infoTable.style.zIndex = '5';
    }

    document.body.appendChild(left);
    document.body.appendChild(right);

});
