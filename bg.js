window.addEventListener('load', function() {

    // 元々の背景画像を取得
    var originalBg = getComputedStyle(document.body).backgroundImage;

    // 元背景＋左右画像
    document.body.style.backgroundImage =
        originalBg + "," +
        "url('https://daimaruhoshizaki980-hub.github.io/pworld-bg/左戦国.jpg')," +
        "url('https://daimaruhoshizaki980-hub.github.io/pworld-bg/右戦国.jpg')";

    document.body.style.backgroundRepeat =
        "repeat, no-repeat, no-repeat";

    document.body.style.backgroundPosition =
        "center top, left top, right top";

    document.body.style.backgroundSize =
        "auto, 420px auto, 420px auto";

    document.body.style.backgroundAttachment =
        "scroll, fixed, fixed";

});
