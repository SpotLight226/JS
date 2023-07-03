// img에서 세션생성 함수
function setSession(target) {
  // 길이가 1까지 ( 2개 까지 )는 세션에 저장하고
  if (localStorage.length <= 1) {
    console.log(target);
    localStorage.setItem("img" + (localStorage.length + 1), target);
    // 아니라면, 키1 에 키2의 값을, 키2에 새로 들어온 값을 저장
  } else {
    localStorage.setItem("img1", localStorage.getItem("img2"));
    localStorage.setItem("img2", target);
  }
}
