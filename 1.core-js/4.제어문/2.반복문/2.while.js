// 1~10까지의 누적합

var num = 1;
var end = 10;
var total = 0;

while (num <= end) {
    total += num;
    num++;
}

console.log(`수의 총합은 ${total}입니다.`);

console.log('==============================');

var x = 0;
while (x < 10) {
    console.log('메롱!');
    x++;
}

console.log('==============================');

// 1 ~ 100사이 정수 중 8의 배수를 모두 출력
var num = 1;

while (num <= 100) {
    if (num % 8 === 0) {
        console.log(num);
    }
    num++;
    
}

console.log('==============================');

// 50 ~ 350사이 정수 중 9의 배수이면서 18의 배수가 아닌 모든 정수를 출력

var num2 = 50;
while (num2 <= 350) {
    if (num2 % 9 === 0 && num2 % 18 !== 0) {
        console.log(num2);
    }
    num2++;
}

console.log('==============================');

// 1 ~ 4000사이 정수 중 11의 배수의 개수를 구하시오.

var num3 = 1;
var count = 0;

while (num3 <= 4000) {
    if (num3 % 11 === 0) {
        count++;
    }
    num3++;
}
console.log(`11의 배수의 총 갯수 : ${count}개`);
