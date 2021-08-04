var height = +prompt('당신의 키는 몇입니까?');

if (height >= 140) {
    var age = +prompt('당신의 나이는 몇살입니까?');
    if (age >= 8) {
        alert('당신은 놀이기구를 탈 수 있습니다.');
    } else {
        alert('당신은 나이가 어려 탈 수 없습니다.');
    }

} else {
    alert('당신의 키가 기준에 부족하여 탈 수 없습니다.')
}

alert('오늘도 좋은 하루 되세요!');