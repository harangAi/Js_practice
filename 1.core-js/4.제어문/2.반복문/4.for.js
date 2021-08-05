var total = 0;

for (n = 1; n <= 10; n++) {
    total += n;
}

console.log(`총합 : ${total}`);

console.log('==============================');

// 1 ~ 100사이 정수 중 8의 배수를 모두 출력
for (var num = 1; num <= 100; num++) {
    if (num % 8 === 0) {
        console.log(num);
    }
}

console.log('==============================');

// 50 ~ 350사이 정수 중 9의 배수이면서 18의 배수가 아닌 모든 정수를 출력


for (var num2 = 50; num2 <= 350; num2++) {
    if (num2 % 9 === 0 && num2 % 18 !== 0) {
        console.log(num2);
    }
}

console.log('==============================');

// 1 ~ 4000사이 정수 중 11의 배수의 개수를 구하시오.


var count = 0;

for (var num3 = 1; num3 <= 4000; num3++) {
    if (num3 % 11 === 0) {
        count++;
    }
}
console.log(`11의 배수의 총 갯수 : ${count}개`);
