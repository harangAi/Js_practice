//========================================= 전역변수 선언부 ==========================================
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    min: 1,
    max: 100
};

//========================================= 함수 정의부 ==============================================

// 기존 아이콘 전체삭제 함수
function clearAllIcons($numbers) {
    for (let $icon of [...$numbers.children]) {
        $numbers.removeChild($icon);
    }
}

// 숫자 아이콘 생성 함수
function makeNumberIcons(isClear=false) {
    const $numbers = document.getElementById('numbers');
    if (isClear) {
        clearAllIcons($numbers);
    }
    const $frag = document.createDocumentFragment();
    for (let i = gameDatas.min; i <= gameDatas.max; i++) {
        const $icon = document.createElement('div');
        $icon.classList.add('icon');
        $icon.textContent = i;
        $frag.appendChild($icon);
    }
    $numbers.appendChild($frag);
}

// updown 애니메이션 클래서 처리 함수
function executeUpDownAnimation(isUp) {
    const ANI_CLASS_NAME = 'selected';
    const [$up, $down] = [...document.querySelector('.result').children];
    if (isUp) {
        $down.classList.remove(ANI_CLASS_NAME);
        $up.classList.add(ANI_CLASS_NAME);
    } else {
        $up.classList.remove(ANI_CLASS_NAME);
        $down.classList.add(ANI_CLASS_NAME);
    }

}

// UpDown인 경우 처리할 내용을 정의하는 함수
function processUpDownCase(isUp) {

    if (isUp) { // up인 경우
        gameDatas.min = gameDatas.answer + 1;
        document.getElementById('begin').textContent = gameDatas.min;
    }
    else {
        // 최대값 갱신
        gameDatas.max = gameDatas.answer - 1;
        document.getElementById('end').textContent = gameDatas.max;
    }
    executeUpDownAnimation(isUp);
    makeNumberIcons(true);
}

// 정답을 맞췄을 때 처리함수
function processCorrect($target) {
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');
    $target.setAttribute('id', 'move');
}

// 클릭된 숫자를 판별해 결과를 알려주는 함수
function checkAnswer($target) {
    const {secret, answer} = gameDatas; //객체 디스트럭쳐링(ES6+)

    if (secret === answer) { // 정답인 경우
        processCorrect($target);
    } else if (secret < answer) { // down인 경우
        processUpDownCase(false);
    } else { // up인 경우
        processUpDownCase(true);
    }
}

//========================================= 메인 실행부 ==============================================
(function() {

    // 아이콘 배치 함수 호출
    makeNumberIcons();

    // 아이콘 클릭 이벤트
    const $numbers = document.getElementById('numbers');
    $numbers.addEventListener('click', e => {

        if (!e.target.matches('#numbers .icon')) return;
        gameDatas.answer = +e.target.textContent; //+로 정수(Integer) 처리
        // 정답 체크 함수 호출
        checkAnswer(e.target);
    });

})();