$(function () {
  $(".p-menu-btn").on("click", function () {
    $(".p-header-nav_list").toggleClass("is-active");
    $(".p-menu-btn").toggleClass("is-active");
  });
  $(".p-header-nav_item").on("click", function () {
    $(".p-header-nav_list").removeClass("is-active");
  });
});

$(function () {
  const imgHeight = $(".js-main-visual").outerHeight(); //画像の高さを取得。これがイベント発火位置になる。
  const header = $(".js-header"); //ヘッダーコンテンツ

  $(window).on("load scroll", function () {
    if ($(window).scrollTop() < imgHeight) {
      //メインビジュアル内にいるので、クラスを外す。
      header.removeClass("p-header-scroll");
    } else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      header.addClass("p-header-scroll");
    }
  });
});