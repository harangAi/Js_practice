// OR 연산자
console.log('hello'||'world');
console.log(0||'안녕');

// AND 연산자
console.log('hello'&&'world');
console.log(''&&'메롱');

console.log('=========================');

var x = 10;
if (x > 0) console.log('x는 0보다 크다');

x > 0 && console.log('x는 0보다 크다');

var baseLanguage = undefined;
baseLanguage = baseLanguage || 'korean';
console.log(baseLanguage);
