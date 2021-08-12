// x ~ y 까지의 누적합을 구하는 함수 정의
// 함수를 정의할 때 외부에서 받아올 값을 저장하는 변수
// 매개변수(parameter)
function calcRangeTotal(begin, end) {
    var total = 0;
    for(var n = begin; n <= end; n++) {
        total += n;
    }

    return total;
}
// 함수를 호출할 때 함수에 전달하는 값 3, 8을 인수(argument)
var result1 = calcRangeTotal(3, 8);
console.log(result1);

var result2 = calcRangeTotal(10);
console.log(result2);

console.log('======================');
// 매개 변수의 기본값
function sayHello(language) {
    language = language || '한국어';

    if(language === '한국어') {
        console.log('안녕하세요~');
    } else if (language === '영어') {
        console.log('hello~');
    } else if (language === '중국어') {
        console.log('따쟈하오~');
    }

}

sayHello();

//매개변수가 없는 함수
function selectRandomPet() {
    var pets = ['멍멍이', '야옹이', '짹짹이', '어흥이', '꾹꾹이'];
    var rn = Math.floor(Math.random() * pets.length);
    return pets[rn];
}

console.log(selectRandomPet());