// img에서 세션생성 함수
function createSesseion(target) {
  var count = 0;
  console.log(target);
  localStorage.setItem('"' + count++ + '"', target);
  if (localStorage.length === 3) {
    localStorage.removeItem(localStorage.key(1));
  }
}
