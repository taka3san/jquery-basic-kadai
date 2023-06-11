// 注意！$(function() {...});で囲うとエラーが起きる
// ロード完了
$(window).on("load", function () {
  console.log("ロード完了イベントが発生しました。");
});

// $(function() {...})はHTML要素を全て読み込んでから処理する;
$(function () {
  // スクロール完了
  $(window).on("scroll", function () {
    console.log("スクロールイベントが発生しました。");
  });
});
