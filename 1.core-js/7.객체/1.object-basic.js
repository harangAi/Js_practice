
// 객체 생성
var dog = {
    // 프로퍼티(필드) 설정
    name: '뽀삐',
    kind: '진돗개',
    age: 2,
    favorite: ['산책', '개껌'],
    injection: true
};

var cat = {
    kind: '블랙러시안',
    age: 3,
    name: '나비',
    injection: false,
    favorite: ['낮잠', '캣타워']
}

console.log(typeof cat);

// 객체에 저장된 값을 참조
console.log(cat.name);
console.log(dog.age);
console.log(cat.favorite);
console.log(dog.favorite[0]);
cat.favorite.push('참치');
console.log(cat);

console.log('===================================');
// 참조 2
console.log(dog.injection);
console.log(dog['injection']); // 대괄호 참조시 반드시 key를 문자열 형태로 ...


// 프로퍼티 값 수정
dog.age = 5;
dog.favorite[1] = '어지럽히기';
console.log(dog);

// 프로퍼티 동적 추가
cat.master = '이군학';
console.log(cat);

// 프로퍼티 동적 삭제
delete cat.master;
console.log(cat);