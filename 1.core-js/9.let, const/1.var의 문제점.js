//1. 변수의 중복 선언 허용
var x = 10;
var x = 50;
console.log(x);

//2. 블록레벨 스코프 지원핮디 않음
var y = '안녕'; //전역변수

for(var y = 1; y <= 3; y++) {
    console.log(y);
}

console.log(`y: ${y}`);

//3. 변수 호이스팅 - 선언문은 전부 자동으로 위로 올라간다
z = 100;
console.log(z);