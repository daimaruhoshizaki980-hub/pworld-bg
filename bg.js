window.addEventListener('load', function () {

    // 左サイドメニュー
    var leftMenu = document.getElementById('pwSideMenu-left');

    if (leftMenu) {

        leftMenu.style.position = 'relative';

        var leftBg = document.createElement('img');

        leftBg.src = 'https://daimaruhoshizaki980-hub.github.io/pworld-bg/左戦国.jpg';

        leftBg.style.position = 'absolute';
        leftBg.style.top = '0';
        leftBg.style.left = '0';

        leftBg.style.width = '500px';
        leftBg.style.height = 'auto';

        leftBg.style.zIndex = '-1';
        leftBg.style.pointerEvents = 'none';

        leftMenu.appendChild(leftBg);
    }


    // 右サイドメニュー
    var rightMenu = document.getElementById('pwSideMenu-right');

    if (rightMenu) {

        rightMenu.style.position = 'relative';

        var rightBg = document.createElement('img');

        rightBg.src = 'https://daimaruhoshizaki980-hub.github.io/pworld-bg/右戦国.jpg';

        rightBg.style.position = 'absolute';
        rightBg.style.top = '0';
        rightBg.style.right = '0';

        rightBg.style.width = '500px';
        rightBg.style.height = 'auto';

        rightBg.style.zIndex = '-1';
        rightBg.style.pointerEvents = 'none';

        rightMenu.appendChild(rightBg);
    }

});
