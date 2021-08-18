
var x = 'global x'; // 전역변수

// 매개변수 x : 지역 스코프
function outer(x) {
    var y = 'outer local y';
    console.log(x);
    console.log(y);

    function inner() {
        var x = 'inner local x';
        var z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
}

outer('outer local x');
console.log(x);