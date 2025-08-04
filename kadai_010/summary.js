$(() => {
    // id属性がchange-colorの要素をクリックしたら
    $('#change-color').on('click', function() {
        // id属性がtargetの要素の色を赤色に変更する
        $('#target').css('color', 'red');
    });

    // id属性がchange-textの要素をクリックしたら
    $('#change-text').on('click', function() {
        // id属性がtargetの要素のテキストを「Hello World!」に変更する
        $('#target').text('Hello World!');
    });

    // id属性がfade-outの要素をクリックしたら
    $('#fade-out').on('click', function() {
        // id属性がtargetの要素をフェードアウトさせる
        $('#target').fadeOut();
    });

    // id属性がfade-inの要素をクリックしたら
    $('#fade-in').on('click', function() {
        // id属性がtargetの要素をフェードインさせる
        $('#target').fadeIn();
    });
});