// 現在時刻を取得し表示する関数
function displayTime() {
    var date = new Date(); // 現在の日時を取得
    var time = date.toLocaleTimeString(); // 現在の時刻を取得
    document.getElementById('time').innerHTML = time; // HTML要素に時刻を設定
}

// 上記関数を1秒ごとに呼び出すタイマーを設定
setInterval(displayTime, 1000);