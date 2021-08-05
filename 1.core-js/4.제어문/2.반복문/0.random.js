// 난수(랜덤값) 생성 : Math.random() - 0.0 이상 1.0미만의 실수 난수를 생성
var rnd = Math.random();
console.log(`랜덤값: ${rnd}`);

if (rnd > 0.66) {
    console.log('오늘은 치킨이닭!');
} else if (rnd > 0.33) {
    console.log('오늘은 집밥!');
} else {
    console.log('오늘은 단식이다!');
}

// Math.floor() : 내림값, Math.ceil() : 올림, Math.round() : 반올림
console.log('============================');

console.log(Math.floor(3.789));
console.log(Math.ceil(5.221));
console.log(Math.round(7.6));

console.log('============================');

/* 
    # 1 ~ 10 사이의 랜덤 정수 생성
    Math.random() -> 0.0 <= ~  < 1.0
    Math.random() * 10  -> 0.0 <= ~ < 10.0
    Math.floor(Math.random() * 10) -> 0 <= ~ < 10
    Math.floor(Math.random() * 10) + 1 -> 1 <= ~ < 11
*/

var ri = Math.floor(Math.random() * 10) + 1;
console.log(`랜덤정수: ${ri}`);


/* 
    # 랜덤 정수 만들기 공식
    - x 이상 y 이하의 랜덤 정수 생성
    - Math.floor(Math.random() * (y - x + 1)) + x;
*/
// 110 ~ 200 사이의 랜덤 정수
var an = Math.floor(Math.random() * 91) + 110;
console.log(`랜덤정수: ${an}`);
