// 게임 데이터
var min = 1; // 최소값
var max = 100; //  최대값
// 실제 정답(랜덤 숫자)
var answer = Math.floor(Math.random() * 100) + 1;

var countDown = 6;

alert(`[UP & DOWN 게임 1 ~ 100 사이의 숫자를 맞춰보세요.]`);

while(true) {
    // 사용자가 입력한 숫자
    var userAnswer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);

    countDown--;
    
    // 입력값 검증
    if (userAnswer === answer) {
        alert('정답입니다!');
        break;
    } else if (userAnswer < answer) {
        alert('UP!');
        min = userAnswer;
    } else {
        alert('DOWN!');
        max = userAnswer;
    }

    if (countDown === 0) {
        alert(`응 너 졌어~~ 정답은 ${answer}이야~`);
        break;
    } else {
        alert(`${countDown}번의 기회가 남았습니다.`);
    }

}

