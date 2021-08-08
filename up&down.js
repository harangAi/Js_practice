var targetNumber = Math.floor(Math.random() * 101) + 1;
var lifeNumber = 5;
var tryCounting = 1;


alert('[UP & DOWN 게임 1 ~ 100사이의 숫자 중 어떤 숫자가 들어 있을까요?]')

while(true) {
    var answer = +prompt('숫자를 입력하세요');
    if (answer > targetNumber) {
        alert('DOWN');
        lifeNumber--;
        if (lifeNumber > 0) {
            alert(`정답기회는 앞으로 ${lifeNumber}번!`);
        }
        tryCounting++;
    } else if(answer < targetNumber) {
        alert('UP');
        lifeNumber--;
        if (lifeNumber > 0) {
            alert(`정답기회는 앞으로 ${lifeNumber}번!`);
        }
        tryCounting++;
    } else {
        alert(`축하합니다. 정답은 ${targetNumber} 입니다.`)
        
        if (lifeNumber <= 0) {
            alert(`당신은 패배하였습니다. ${tryCounting}번 시도!`);
            break;
        } else {
            alert(`당신은 성공하였습니다. ${tryCounting}번 시도!`);
            break;
        }
    }
}