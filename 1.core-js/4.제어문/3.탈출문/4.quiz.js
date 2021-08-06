var pass = 0; // 정답 카운팅
var fail = 0; // 오답 카운팅

while(true) {
    var num1 = Math.floor(Math.random() * 101) + 1; // 연산의 처음 수
    var num2 = Math.floor(Math.random() * 101) + 1; // 연산의 다음 수

    var randomMark = Math.floor(Math.random() * 4) // 사칙연산 생성
    if(randomMark === 0) {
        var mark = '+';
    } else if(randomMark === 1) {
        var mark = '-';
    } else if(randomMark === 2) {
        var mark = '*'
    } else {
        var mark = '/'
    }

    var answer = +prompt(`${num1} ${mark} ${num2} = ??`); // 사용자의 답안

    if(answer === 0) break; // 답안이 0이면 프로그램 종료

    if(mark === '+') { // 사칙연산 기준 실제 정답 비교
        var correctAnswer = num1 + num2;
    } else if(mark === '-'){
        var correctAnswer = num1 - num2;
    } else if(mark === '*'){
        var correctAnswer = num1 * num2;
    } else {
        var correctAnswer = num1 / num2;
    }

    if(answer === correctAnswer) { // 사용자의 정답과 실제 답 비교후 출력
        alert('정답입니다.');
        pass++;
    } else {
        alert('오답입니다.');
        fail++;
    }

}

alert(`프로그램이 종료되었습니다.\n\n# 정답횟수: ${pass}회, 오답횟수: ${fail}`);