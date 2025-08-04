$(() => {
    // btnをクリックしたら、「クリックしました！」をtextのvalueに設定
    $('.btn').on('click', function() {
        $('.text-box').val('クリックしました！');
    });
});