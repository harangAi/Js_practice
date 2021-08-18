//상수 : 불변의 고정값
const PI = 3.14159265; // 상수의 변수명은 대문자 표기가 관례

console.log(`pi: ${PI}`);

const TAX_RATE = 0.1; //세율
let preTaxPrice = 100; // 세전가격
//세후 가격
let postTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);


//const와 객체(배열, 객체, 함수)
const person = {
    name: '김철수',
    age: 30
};

// person = {
//     name = '박영희',
//     age: 25
// };

person.name = '김영희';

console.log(person);

const a;
console.log(a);

