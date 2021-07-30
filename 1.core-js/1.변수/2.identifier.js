// 식별자 : 데이터를 구분하기 위한 고유의 이름 (변수, 함수..)
// 1. 대소문자를 구분할 것
var banana = '바나나';
var BANANA = '빠나나';

console.log(banana);
console.log(BANANA);

// 2. 숫자로 시작하거나 숫자 만으로 만들지 말것
// var 10 = 100;(숫자만)
// var 10hello = 10;(숫자로시작)
var hello10 = 10;

// 3. 특수문자는 $, _ 외 사용금지
// var my-addr = '대전 서구';
// var hello@ = '안녕';
var $bye = '잘가'
var my_addr = '대전 서구';

// 4. 띄어쓰기 불가능
// var user phone number = "01012345678";

// coding convention : 관례
var user_phone_number = 1; // snake_case - python, SQL
var userPhoneNumber = 1; // camelCase - javascript, java
var UserPhoneNumber = 1; // PascalCase - 클래스
var intUserPhoneNumber = 1; // type+HungarianCase(int)
var strUserPassword = 'abcd'; // type+HungarianCase(str)
var $button = document.getElementById('my-btn'); // $ : DOM노드

// 5. 키워드(예약어)는 식별자로 사용하지 말 것
// var var;
// var if;
// var for;

// 식별자 이름은 구체적이고 명확하며 일관되게 지을 것

