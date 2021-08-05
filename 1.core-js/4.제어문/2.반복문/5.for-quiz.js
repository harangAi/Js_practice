/*
- Quiz. 아래 요구사항에 맞는 코드를 작성하고 
        콘솔에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 2~9단 중 무작위로 구구단이 등장하게 하세요.
2. for문과 while문으로 각각 구현하세요.
힌트) 먼저 2단을 구현해 본 뒤, 성공하면 랜덤 구구단으로 바꿔보기
- 출력 예시
====================
랜덤 구구단 4단
====================
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
*/

var rndTt = Math.floor(Math.random() * 8) + 2; //구구단 단수
var num; // 단수에 곱해질 1~9까지의 영역을 담을 변수

console.log('====================');
console.log(`랜덤 구구단 ${rndTt}단`);
console.log('====================');

for (num = 1; num <= 9; num++) {
    console.log(`${rndTt} X ${num} = ${rndTt * num}`);
}

console.log('====================');
console.log('====While문 버전====');
console.log('====================');

var num2 = 1;
while (num <= 9) {
    console.log(`${rndTt} X ${num2} = ${rndTt * num2}`);
    num2++;
}