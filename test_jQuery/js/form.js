$(() => {
    // id属性がcheckの要素がクリックされたら
    $('#check').click(function() {
        // 名前(テキストボックス)を取得
        console.log('名前：' + $('[name="username"]').val());

        // 性別(ラジオボタン)を取得
        console.log('性別：' + $('[name="gender"]:checked').val());

        // 血液型(セレクトボックス)を取得
        console.log('血液型：' + $('[name="blood"]').val());

        // 趣味(チェックボックス)を取得
        $('[name="hobby"]:checked').each(function() {
            // $(this)は選択された要素を１つ１つを意味する
            console.log('趣味：' + $(this).val());
        });
    });

    // 名前が入力されたら
    $('[name="username"]').on('input', function() {
        let input = $(this).val();

        // 入力文字があればボタンを有効化。なければボタンを無効化
        if(input) {
            $('#check').prop('disabled', false);
        }
        else {
            $('#check').prop('disabled', true);
        }    
    });

    // 趣味のチェックボックスが変更されたら
    $('[name="hobby"]').change(function() {
        // チェックの数が3より大きいとき、アラートを出す
        if($('[name="hobby"]:checked').length > 3) {
            // チェックをつけようとしたものだけチェックを外す
            $(this).prop('checked', false);

            // アラートを出す
            alert('趣味は3つまでしか選べません。');
        }
    });
});