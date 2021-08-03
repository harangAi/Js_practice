// 아래의 두 함수는 node.js환경에서는 작동하지 않음
// 오직 브라우저에서만 사용하는 함수
// prompt(): 브라우저에서 간단한 텍스트 입력을 처리해줌.
// alert(): 브라우저에서 간단한 텍스트 출력을 처리해줌

// prompt앞에 + 기호를 붙이면 숫자로 가져온다.

var num1 = +prompt('숫자를 하나 입력하세요!');
var num2 = +prompt('숫자를 하나 더 입력하세요!');


console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);

alert(`두 수의 합 : ${num1 + num2}`)