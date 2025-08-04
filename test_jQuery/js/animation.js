$(() => {
    // id属性がfadeOutの要素がクリックされたら
    $('#fadeOut').on('click', function() {
        // boxクラスの要素をフェードアウト
        $('.box').fadeOut();
    });

    // id属性がfadeInの要素がクリックされたら
    $('#fadeIn').on('click', function() {
        // boxクラスの要素をフェードイン
        $('.box').fadeIn();
    });

    // id属性がfedeToggleの要素がクリックされたら
    $('#fadeToggle').on('click', function() {
        // boxクラスの要素を表示/非表示する
        $('.box').fadeToggle();
    });

    // id属性がslideUpの要素がクリックされたら
    $('#slideUp').on('click', function() {
        // boxクラスの要素をスライドアップ
        $('.box').slideUp();
    });

    // id属性がslideDownの要素がクリックされたら
    $('#slideDown').on('click', function() {
        // boxクラスの要素をスライドダウン
        $('.box').slideDown();
    });

    // id属性がslideToggleの要素がクリックされたら
    $('#slideToggle').on('click', function() {
        // boxクラスの要素をスライド表示/非表示する
        $('.box').slideToggle();
    });
});