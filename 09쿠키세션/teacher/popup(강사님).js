function addCookie(name, value) {
  // 시간 설정
  var date = new Date();
  date.setDate(date.getDate() + 1); // 하루 + 1
  // 내일 12시를 맞추기 위해 작성
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);

  // 쿠키 생성
  var cookie = "";
  cookie += name + "=" + value + "; ";
  // path=/ 를 붙여주자
  cookie += "expires=" + date.toUTCString() + "; path=/";

  document.cookie = cookie;
}

// 쿠키 확인
// name 은 꼭 필요 X
function getCookie(name) {
  // 배열로 나누어 받음
  var arr = document.cookie.split("; ");
  // 쿠키가 있다면
  if (arr.length != 0) {
    for (var i = 0; i < arr.length; i++) {
      // 해당 이름의 쿠키가 있다면
      if (arr[i].indexOf(name + "=") != -1) {
        return true; // 쿠키가 있다는 뜻
      }
    }
  }
}
