//id「title」とclass「message」のテキストを取得
$(function() {
    const title = $("#title").text();
    const list = $(".message").text();
    console.log(title);
    console.log(list);
});

//classが「sample」で始まる要素のテキストを取得
$(function() {
    const text = $("[class^='sample']").text();
    console.log(text);
});

//ボタンがクリックされたときにコンソールにテキストを出力
$(function() {
    // ボタンがクリックされた場合
    $("button").on("click", function(){
        console.log("ボタンがクリックされました");
    });

    $("#mouse-event").on({
        "click": () => {
            // 背景を赤 
            $("#mouse-event").css("background-color", "red");
            // テキストを「click」 
            $("#mouse-event").text("click");
        },

        "dblclick": () => { 
            // 背景を緑 
            $("#mouse-event").css("background-color", "green"); 
            // テキストを「dblclick」 
            $("#mouse-event").text("dblclick");
        },

        "mouseenter": () => {
            // 背景を青 
            $("#mouse-event").css("background-color", "blue"); 
            // テキストを「mouseenter」 
            $("#mouse-event").text("mouseenter");
        },

        "mouseout": () => {
            // 背景をグレー 
            $("#mouse-event").css("background-color", "gray"); 
            // テキストを「mouseout」 
            $("#mouse-event").text("mouseout");
        },
    });

    $(document).on("click keydown", (e) => {
        //クリックされたとき
        if(e.type === "click"){
            $("#key-event").text("クリックされました");
        }
        //キーが押されたとき
        if(e.type === "keydown"){
            $("#key-event").text("キーが押されました");
        }
    });
});

