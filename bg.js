window.addEventListener('load', function () {

    // 本文テーブル取得
    var infoTable = document.querySelector('table[name="info"]');
    if (!infoTable) return;

    // 左画像
    var left = document.createElement('img');
    left.src = 'https://daimaruhoshizaki980-hub.github.io/pworld-bg/左戦国.jpg';
    left.style.cssText = [
        'position:fixed',
        'top:0',
        'left:calc(50% - 820px)',
        'width:420px',
        'pointer-events:none',
        'z-index:0'
    ].join(';');

    // 右画像
    var right = document.createElement('img');
    right.src = 'https://daimaruhoshizaki980-hub.github.io/pworld-bg/右戦国.jpg';
    right.style.cssText = [
        'position:fixed',
        'top:0',
        'left:calc(50% + 400px)',
        'width:420px',
        'pointer-events:none',
        'z-index:0'
    ].join(';');

    // 左右画像をまとめるコンテナ
    var sideBg = document.createElement('div');
    sideBg.style.cssText = [
        'position:relative',
        'z-index:0'
    ].join(';');

    sideBg.appendChild(left);
    sideBg.appendChild(right);

    // 本文を画像より前にする
    infoTable.style.position = 'relative';
    infoTable.style.zIndex = '1';

    // 本文の直前に画像コンテナを挿入
    infoTable.parentNode.insertBefore(sideBg, infoTable);

});
