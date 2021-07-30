var greeting;
greeting = 'hello';
greeting = "안녕 ㅎㅎ";
greeting = `잘가~`;

console.log(typeof greeting);

var str = '그는 나에게 "안녕"이라고 말했다.';
console.log(str);

str = "Let's GO!";
console.log(str);

str = "그는 나에게 \"안녕\"이라고 말했다.";
console.log(str);

//탈출 문자
str = '나는 \t\t 홍길동 \n입니다.'
console.log(str);

var filePath = 'D:\\temp\\new_icon.png';
console.log(filePath);

//탬플릿 리터럴 Ver.ES6(2015)
var template = `<ul>
<li>
<a href="#">HOME</a>
</li>
</ul>`;

var month = 8;
var day = 15;
var anni = '광복절';

console.log(month + '월 ' + day + '일은 ' + anni + '입니다.'); //ES5
console.log(`${month}월 ${day}일은 ${anni}입니다.`); //ES6