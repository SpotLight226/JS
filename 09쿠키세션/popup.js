function addCookie(name, value) {
  var date = new Date();
  // 쿠키가 하루동안 유지
  date.setDate(date.getDate() + 1);
  // 내일 12시를 맞추기위해 시, 분, 초 를 0으로
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);

  // 쿠키생성
  // 쿠키 내용작성
  var cookie = "";
  cookie += name + "=" + value + "; ";
  cookie += "expires=" + date.toUTCString() + "; path=/";
  // 쿠키를 생성한다
  document.cookie = cookie;
}

function getCookie() {
  // 쿠키를 가져와서 ; 로 구분 : 문자열로
  var arr = document.cookie.split("; ");
  // 쿠키 있을 때
  if (arr.length != 0) {
    for (var i = 0; i < arr.length; i++) {
      // 해당 쿠키 이름 있을 때
      if (arr[i].indexOf("popup_check=") != -1) {
        return true;
      }
    }
  }
}
