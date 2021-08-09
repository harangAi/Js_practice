// 명시적 문자열 변환
var a = 10, b = 20;
var result = String(a) + String(b);
var result1 = a.toString() + b.toString();
var result2 = '' + a + b;
console.log(`result: ${result}, ${result1}, ${result2}`);

console.log('======================');
// 명시적 숫자 변환
var m = '100', n = '5.11';
var result3 = Number(m) + Number(n);
var result4 = parseInt(m) + parseFloat(n);
var result5 = (+m) + (+n);
console.log(`result: ${result3}, ${result4}, ${result5}`);

console.log('======================');
//명시적 논리 변환
var ex1  = Boolean(null);
console.log(ex1);
var ex2 = !!'메롱';
console.log(ex2);