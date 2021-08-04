var money = 5000;
//조건연산자 사용
//var food = money >= 5000 ? '김치찌개' : '라면';

//if문 사용
var food;
if (money >= 5000) {
    food = '김치찌개';
} else if (money >= 1000) {
    fodd = '라면';
} else {
    food = '굶어';
}

var food = money >= 5000 ? '김치찌개' : (money>=1000 ? '라면' : '굶어');
