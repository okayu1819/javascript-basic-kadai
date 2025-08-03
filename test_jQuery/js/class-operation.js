$(function() {
    // idがaddの要素をクリックしたとき
    $('#add').click(function() {
        // idがtargetの要素にsampleクラスを追加する
        $('#target').addClass('sample');
    });

    // idがremoveの要素をクリックしたとき
    $('#remove').click(function() {
        // idがtargetの要素からsampleクラスを削除する
        $('#target').removeClass('sample');
    }); 

    // idがtoggleの要素をクリックしたとき
    $('#toggle').click(function() {
        // idがtargetの要素のsampleクラスを切り替える
        $('#target').toggleClass('sample');
    });

    // idがhasの要素をクリックしたとき
    $('#has').click(function() {
        // id属性がtargetの要素にsampleクラスがあるか取得する
        let result = $('#target').hasClass('sample');

        // 条件分岐してconsole.logを表示する
        if (result) {
            console.log('sampleクラスがあります');
        } else {
            console.log('sampleクラスはありません');
        }
    });
});