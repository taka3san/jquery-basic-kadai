$(function () {
  // クリックされたら
  $(".btn").on("click", function () {
    // テキストボックスの「value」の値を変化させる
    $(".text-box").prop("value", "クリックしました！");
  });
});
