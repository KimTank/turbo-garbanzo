var box = document.querySelector(".box");
var toggleBtn = document.querySelector(".toggle");

var toggle = (function () {
  var isShow = false;
  // TODO: ① 클로저를 반환하는 함수를 작성하세요.
  return function () {
    isShow = !isShow;
    if (!isShow) {
      box.style.visibility = "visible";
    } else {
      box.style.visibility = "hidden";
    }
  };
})();

// ② 이벤트 프로퍼티에 클로저를 할당
toggleBtn.onclick = toggle;
