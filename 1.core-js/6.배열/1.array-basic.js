// 배열의 생성
// 배열 변수 이름 관례: 복수형(-s), -list
var fruits = ['사과', '포도', '오렌지', '복숭아'];

// 배열의 개수(길이:Length)
console.log(`배열의 길이: ${fruits.length}개`);

// 배열 요소(element) 참조 : 인덱스 활용
console.log(`배열의 3번째 요소: ${fruits[2]}`);

var apple = fruits[0];
console.log(`apple: ${apple}`);

// 배열 요소 수정
fruits[1] = '수박';

console.log(fruits);

// 배열 전체 요소 참조 (배열순회(iteration))
console.log('=================');

for(var i = 0; i < fruits.length; i++){
    console.log(fruits[i] + '맛있어~');
}

