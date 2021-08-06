console.log('================3번문제======================');

var numOver;

while (true) {
  numOver = +prompt("숫자 100이상의 수를 입력하세요.", 0);

  if (numOver > 100 || numOver == null) {
    break;
  }

}

console.log('================4번문제======================');

var n = 10; // 유효 범위값 n

for (var i = 2; i < n; i++) {
  if (!isPrime(i)) continue; // 함수로 코드 간결화 및 가독성 증가

  alert(i); // 판별된 소수만 띄우기
}

// 별도의 소수체크 함수 작성
function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}