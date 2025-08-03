$(() => {
    $('p').text('jQueryを勉強しよう');

    // 追加リストのナンバリング変数の初期化
    let count = 1;

    // append要素がクリックされたときの処理
    $('#append').on('click', () => {
        // 新しいリストアイテムを作成
        const newItem = $('<li>').text(`新しいアイテム ${count}`);
        
        // ulに新しいリストアイテムを追加
        $('ul').append(newItem);
        
        // ナンバリング変数をインクリメント
        count++;
    });

    // remove要素がクリックされたときの処理
    $('#remove').on('click', () => {
        // ulの最後のリストアイテムを削除
        $('li:last').remove();
        
        // ナンバリング変数をデクリメント（ただし、0未満にはしない）
        if (count > 1) {
            count--;
        }
    });

    // hide要素がクリックされたときの処理
    $('#hide').on('click', () => {
        // ulを非表示にする
        $('ul').hide();
    });
    // show要素がクリックされたときの処理
    $('#show').on('click', () => {  
        // ulを表示する
        $('ul').show();
    });
});