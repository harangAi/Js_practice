// 빈문자열(empty string)
if('') console.log('ok1');
// 공백문자열(space)
if(' ') console.log('ok2');

if(undefined) console.log('ok3');
if(null) console.log('ok4');

if(-789) console.log('ok5');
if([]) console.log('ok6');
if({}) console.log('ok7');

if(NaN) console.log('ok8');

console.log('===========================');

var num = 10;
if(num % 2) {
    console.log('홀수입니다.');
} else {
    console.log('짝수입니다.');
}