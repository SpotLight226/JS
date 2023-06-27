var menuBtn = document.getElementById("menuBtn");
var sidenav = document.querySelector(".sidenav");

/* 기본 이벤트 처리
menuBtn.onclick = function () {
  if (sidenav.style.width === "200px") {
    sidenav.style.width = "0px";
  } else {
    sidenav.style.width = "200px";
  }
};
*/

// 표준 이벤트 처리
menuBtn.addEventListener("click", function () {
  console.log(sidenav.style.width);
  console.log(window.innerWidth); // 브라우저의 너비

  var wid = sidenav.style.width;
  // width가 공백 이거나 200px 이라면
  //   if (wid === "" || wid === "200px") {
  //     sidenav.style.width = "0px";
  //   } else {
  //     sidenav.style.width = "200px";
  //   }

  // 브라우저 너비가 767보다 작을 때 => 모바일
  if (window.innerWidth <= 767) {
    if (wid === "" || wid === "0px") {
      sidenav.style.width = "200px";
    } else {
      sidenav.style.width = "0px";
    }

    // 일반 브라우저
  } else {
    if (wid === "" || wid === "200px") {
      sidenav.style.width = "0px";
    } else {
      sidenav.style.width = "200px";
    }
  }
});
