window.addEventListener('load', function () {

    // 本文のTABLEを探す
    var mainTable = document.querySelector('table[name="info"]');
    if (!mainTable) return;

    // 左画像
    var left = document.createElement('img');
    left.src = 'https://daimaruhoshizaki980-hub.github.io/pworld-bg/左戦国.jpg';
    left.style.position = 'fixed';
    left.style.top = '0';
    left.style.left = 'calc(50% - 820px)';
    left.style.width = '420px';
    left.style.zIndex = '0';
    left.style.pointerEvents = 'none';

    // 右画像
    var right = document.createElement('img');
    right.src = 'https://daimaruhoshizaki980-hub.github.io/pworld-bg/右戦国.jpg';
    right.style.position = 'fixed';
    right.style.top = '0';
    right.style.left = 'calc(50% + 400px)';
    right.style.width = '420px';
    right.style.zIndex = '0';
    right.style.pointerEvents = 'none';

    document.body.appendChild(left);
    document.body.appendChild(right);

    // 本文をサイド画像より前面へ
    mainTable.style.position = 'relative';
    mainTable.style.zIndex = '1';

    // サイドメニューはさらに前面へ
    var menus = document.querySelectorAll('[id*="side"], [class*="side"]');
    menus.forEach(function(menu){
        menu.style.position = 'relative';
        menu.style.zIndex = '2';
    });

});
