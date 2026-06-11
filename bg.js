window.addEventListener('load', function () {

    var originalBg = getComputedStyle(document.body).backgroundImage;

    document.body.style.backgroundImage =
        'url("https://daimaruhoshizaki980-hub.github.io/pworld-bg/戦国背景.png"),' +
        originalBg;

    document.body.style.backgroundRepeat =
        'no-repeat, repeat';

    document.body.style.backgroundPosition =
        'top center, center top';

});
