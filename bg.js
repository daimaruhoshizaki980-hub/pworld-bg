window.addEventListener('load', function () {

    var infoTable = document.querySelector('table[name="info"]');
    var leftMenu = document.getElementById('pwSideMenu-left');
    var rightMenu = document.getElementById('pwSideMenu-right');

    // 左画像
    var left = document.createElement('img');
    left.src = 'https://daimaruhoshizaki980-hub.github.io/pworld-bg/左戦国.jpg';
    left.style.position = 'fixed';
    left.style.top = '0';
    left.style.left = 'calc(50% - 820px)';
    left.style.width = '420px';
    left.style.pointerEvents = 'none';
    left.style.zIndex = '10';

    // 右画像
    var right = document.createElement('img');
    right.src = 'https://daimaruhoshizaki980-hub.github.io/pworld-bg/右戦国.jpg';
    right.style.position = 'fixed';
    right.style.top = '0';
    right.style.left = 'calc(50% + 400px)';
    right.style.width = '420px';
    right.style.pointerEvents = 'none';
    right.style.zIndex = '10';

    // 本文を左右画像より前へ
    if (infoTable) {
        infoTable.style.position = 'relative';
        infoTable.style.zIndex = '20';
    }

    // 左サイドメニューを最前面へ
    if (leftMenu) {
        leftMenu.style.position = 'relative';
        leftMenu.style.zIndex = '30';
    }

    // 右サイドメニューを最前面へ
    if (rightMenu) {
        rightMenu.style.position = 'relative';
        rightMenu.style.zIndex = '30';
    }

    document.body.appendChild(left);
    document.body.appendChild(right);

});
