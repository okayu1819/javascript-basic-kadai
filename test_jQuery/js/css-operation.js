$(function() {
    // id属性がredの要素がクリックされたら
    $('#red').click(function() {
        // id属性がtargetの要素のcolorプロパティをredに変更
        $('#target').css('color', 'red');
    });

    // id属性がblueの要素がクリックされたら
    $('#blue').click(function() {
        // id属性がtargetの要素のcolorプロパティをblueに変更
        $('#target').css('color', 'blue');
    });
});