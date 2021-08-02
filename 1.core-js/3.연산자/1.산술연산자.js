// 나눗셈 연산
console.log(27 / 5);

// 나머지 연산
console.log(27 % 5);
console.log(5 % 4);

// 뒤에 숫자가 더 크면 앞에 숫자가 나머지
console.log(4 % 10);

// 0으로 나누기 불가한 경우
console.log(10 % 0);
// NaN은 산술 연산이 불가능한 경우 반환되는 값

console.log(0 % 4);

var num = 2;
console.log(2 ** 3); //2의 세제곱(ES6+)
console.log(Math.pow(num, 3)); // 2의 세제곱(ES5)


// 증감 연산자 ++, --

var x = 3;
x++;
++x;
console.log(`x: ${x}`);

// 전위 연산(prefix), 후위 연산(postfix)
var a = 10;
var b = ++a;
console.log(`a: ${a}, b: ${b}`);

b = ++a;
console.log(`a: ${a}, b: ${b}`);

b= --a;
console.log(`a: ${a}, b: ${b}`);


/*
    아래 코드가 전부 실행 된 이후
    a, b, c, d에 할당된 값을 구하세요.
    (console.log로 확인하지 말 것!)
*/
var a = 1, b = 1;
var c = ++a;
var d = b++;