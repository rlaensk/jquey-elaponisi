$(window).scroll(() => {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    $("header")
      .css("backgroundColor", "white")
      .css("boxShadow", "0 0 10px 0 rgba(0, 0, 0, 0.1)");
    $(".hambergerMenu span").css("backgroundColor", "#B0B0B0");
    $(".languageBox>div").css("color", "#949494");
    $(".languageBox img").attr("src", "/img/arrow-g.png");
    $(".logoText a").css("color", "#949494");
    $(".csBox>div").css("color", "#949494");
    $(".csBox img").attr("src", "/img/arrow-g.png");
    $(".bookNow a").css("color", "#949494");
    console.log(scrollPosition);
  } else {
    $("header").css("backgroundColor", "transparent").css("boxShadow", "none");
    $(".hambergerMenu span").css("backgroundColor", "var(--heder-color)");
    $(".languageBox>div").css("color", "var(--heder-color)");
    $(".languageBox img").attr("src", "/img/arrow-w.png");
    $(".logoText a").css("color", "var(--heder-color)");
    $(".csBox>div").css("color", "var(--heder-color)");
    $(".csBox img").attr("src", "/img/arrow-w.png");
    $(".bookNow a").css("color", "var(--heder-color)");
  }
});
$(".subRoomImb img").on("mouseenter", function () {
  let newSrc = $(this).attr("data-img");
  let newTitle = $(this).attr("data-title");
  let newText = $(this).attr("data-text");
  $(".ImgBackgroundBox img").fadeOut(300, function () {
    $(".ImgBackgroundBox img").attr("src", newSrc).fadeIn(300);
  });
  $(".roomInfoBox h2").fadeOut(300, function () {
    $(".roomInfoBox h2").text(newTitle).fadeIn(300);
  });
  $(".roomInfoBox p").fadeOut(350, function () {
    $(".roomInfoBox p").text(newText).fadeIn(350);
  });
});

// Review Slider
let currentSlide = 1; // 1부터 시작하도록 설정
let slideCount = $(".reviewImgSubBox").children().length; // 슬라이드 개수
let slideWidth = $(".reviewImgSubBox").children().outerWidth(true); // 슬라이드 너비(마진 포함)

// 오른쪽 화살표 클릭 이벤트
$(".reviewArrowRight").on("click", function () {
  $(".reviewImgSubBox")
    .stop()
    .animate(
      { marginLeft: -slideWidth * currentSlide }, // 슬라이드 이동
      500,
      function () {
        // 마지막 슬라이드가 되면 첫 번째 슬라이드를 맨 뒤로 이동
        $(".reviewImgSubBox")
          .append($(".reviewImgSubBox").children().first()) // 첫 번째 슬라이드를 마지막으로 이동
          .css("margin-left", "0"); // 이동 후 margin-left 초기화
      }
    );

  // currentSlide 값을 슬라이드 개수에 따라 갱신
  currentSlide = (currentSlide + 1) % slideCount;
});
