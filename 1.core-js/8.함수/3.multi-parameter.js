// 2개의 정수의 합을 구하는 함수
function add2(n1, n2) {
    return n1 + n2;
}

// add2(add2(10, 20), 30);

// 3개의 정수의 합을 구하는 함수
function add3(n1, n2, n3) {
    return n1 + n2 + n3;
}

// n개의 정수의 합을 구하는 함수
function addAll(numbers) {
    var total = 0;
    for(var n of numbers) {
        total += n;
    }
    return total;
}

var result1 = addAll([10, 20]);
console.log(`result: ${result1}`);

// 스프레드 문법(ES6+)
function addAll2(...numbers) {  //함수에 진입하는 순간 매개변수를 배열로 만들어줌
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}
var result2 = addAll2(10, 20, 30, 100); 
console.log(`result2: ${result2}`);

var arr = [1,2,3];
arr.splice(1, 1, '메롱', '하이');
console.log(arr);