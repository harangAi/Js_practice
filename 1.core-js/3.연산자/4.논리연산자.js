var t = true;
var f = false;

// && : AND 연산
console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

console.log('================================');

// || : OR 연산
console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

console.log('================================');

// (!) NOT 연산 : 논리반전
console.log(!t);
console.log(!f);

var money = 100;
if (money) {
    console.log('go to shopping');
} else {
    console.log('stay home');
}

console.log('================================');
