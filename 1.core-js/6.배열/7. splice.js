

// splice() : 배열 요소 삭제
var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

// 1번 인덱스부터 2개를 삭제해라
// splice는 삭제된 요소를 다시 배열로 만들어 복사본을 리턴
var delFoods = foods.splice(1, 2);
// console.log(delFoods);

// 0번 인덱스부터 1개를 삭제하고 그 자리에 '치킨'을 삽입
foods.splice(0, 1, '치킨');
console.log(foods);


// 1번 인덱스에 보쌈을 삽입해라
foods.splice(1, 0, '보쌈');
console.log(foods);

foods.push('파스타');
console.log(foods);

// 2번 인덱스부터 끝까지 삭제
foods.splice(2);
console.log(foods);

// 특정요소를 탐색하여 삭제
console.log('==============================');

foods.push('족발');
foods.push('닭발');
foods.push('파스타');

console.log(foods);

// 사용자 삭제 요구 데이터
var requestData = '파스타';

if (foods.includes(requestData)) {
    foods.splice(foods.indexOf(requestData), 1)
    console.log(`${requestData} : 삭제 완료!`);
    console.log(foods);
} else {
    console.log(`${requestData} : 존재하지 않는 음식입니다.`);
}