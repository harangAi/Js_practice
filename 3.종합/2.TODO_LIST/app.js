// 전역변수
const todos = [{
        id: 1,
        text: '할 일 1',
        done: false
    },
    {
        id: 2,
        text: '할 일 2',
        done: false
    },
    {
        id: 3,
        text: '할 일 3',
        done: false
    }
];

// 함수 정의부

// 추가될 새로운 할 일의 신규 아이디를 만들어서 리턴하는 함수
function makeNewId() {
    if (todos.length > 0) {
        return todos[todos.length - 1].id + 1;
    } else { // 기존 데이터가 한개도 없는 경우
        return 1;
    }
}

// 새 할 일을 화면에 렌더링하는 함수
function randerNewToDo(newToDo) {
    // 기존의 li에 새로운것만 추가됨
    const $li = document.createElement('li');
    $li.dataset.id = newToDo.id;
    $li.classList.add('todo-list-item');

    const newElement = `
        <label class="checkbox">
            <input type="checkbox">
            <span class="text">${newToDo.text}</span>
        </label>
        <div class="modify"><span class="lnr lnr-undo"></span></div>
        <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
    `;
    $li.innerHTML = newElement;

    const $toDoList = document.querySelector('.todo-list');
    $toDoList.appendChild($li);
}

// 할 일의 내용이 잘 입력되었는지 검사하는 함수
function validateInputText($targetInput) {
    // trim(): 문자열의 앞뒤 공백을 모두 제거
    if ($targetInput.value.trim() === '') {
        $targetInput.setAttribute('placeholder', '필수 입력사항입니다!');
        $targetInput.style.background = 'orangered';
        $targetInput.value = '';
        return false;
    } else {
        $targetInput.setAttribute('placeholder', '할 일을 입력하세요');
        $targetInput.style.background = '';
        return true;
    }
}

// 할 일 추가 기능 처리 함수
function insertTodoData() {

    const $todoText = document.getElementById('todo-text');

    // 입력값 검증
    if (!validateInputText($todoText)) return;
    // if (validateInputText($todoText) === false) return;

    // 1. 데이터 처리 : 필요한 데이터를 생성하여 todos배열에 추가
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    todos.push(newToDo);
    // console.log(newToDo);
    // console.log(todos);

    // 2. 추가된 데이터를 화면에 렌더링
    randerNewToDo(newToDo);

    // 3. 입력 완료 후 input창 텍스트 지우기
    $todoText.value = '';
}

// data-id값으로 배열을 탐색하여 아이디가 일치하는 객체의 인덱스를 반환
function findIndexByDataId(dataId) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === dataId) {
            return i;
        }
    }
    return null; //탐색 실패 증거로 null을 반환
}

// 할 일 완료 처리
function changeCheckState($label) {
    /*
        1. 체크가 된 label태그에 checked클래스를 추가해야 함.
        2. 이 함수에는 체크가 된 label태그의 정보가 필요함.
        3. 이 label태그는 이벤트 핸들러가 알고 있음.
    */
    console.log($label);
    $label.classList.toggle('checked');

    /*
        4. 문제상황: css만 변했지 실제 데이터(done)는 변하지 않음.
        5. 만약 서버가 있었다면 서버에 완료상태를 반영해줘야 함.
        6. todos배열의 객체에 접근해서 done값을 변경해줘야 함.
        7. 만약에 두번째 체크박스를 선택했다면 todos배열의 1번인덱스의 done값을 수정해야 함.
        8. label태그의 정보를 알고 있다면 그 부모태그 li에 접근할 수 있고,
            그 태그의 data-id속성을 조회하면 객체의 id값을 얻을 수 있음.
    */
    // console.log($label.parentNode.id);
    const dataId = +$label.parentNode.dataset.id;

    /*  9. id값을 기반으로 배열을 탐색하여 data-id와 일치하는
        id프로퍼티를 가진 객체가 있는 인덱스를 찾아야 함.
    */
    const idx = findIndexByDataId(dataId);
    console.log(`idx: ${idx}번`);

    //  10. 찾은 인덱스로 해당 객체에 접근해서 done값을 수정
    if(idx !== null) {
        todos[idx].done = !todos[idx].done;
    }
    console.log(todos);
   

}

// 할 일 삭제 처리 함수
function removeToDoData($delTarget) {
    // 1. 삭제 대상 li태그를 ul에서 제거해야 함
    const $ul = document.querySelector('.todo-list');
    $ul.removeChild($delTarget);

    // 2. todos배열에서 해당 객체 삭제
    const delIdx = findIndexByDataId(+$delTarget.dataset.id);
    todos.splice(delIdx, 1);
    console.log(todos);
}

// 할 일 수정모드 진입 이벤트 처리 함수
function enterModifyMode($modSpan) {

    // 버튼 모양을 교체 (클래스 교체)
    $modSpan.classList.replace('lnr-undo', 'lnr-checkmark-circle');

    // 텍스트 span을 input:text로 교체
    const $label = $modSpan.parentNode.previousElementSibling;
    // console.log($label);
    const $textSpan = $label.lastElementChild;
    // console.log($textSpan);

    const $modInput = document.createElement('input');
    $modInput.setAttribute('type', 'text');
    $modInput.setAttribute('value', $textSpan.textContent);
    $modInput.classList.add('modify-input');

    $label.replaceChild($modInput, $textSpan);
}

// 할 일 수정 완료 이벤트 처리 함수
function modifyToDoData($checkSpan) {

    // 버튼 모양을 원래대로 되돌림
    $checkSpan.classList.replace('lnr-checkmark-circle', 'lnr-undo');

    // input:text를 span.text로 교체
    const $label = $checkSpan.parentNode.previousElementSibling;
    const $modInput = $label.lastElementChild;

    const $newSpan = document.createElement('span');
    $newSpan.classList.add('text');
    $newSpan.textContent = $modInput.value; // 실시간 변동값 가져올려면 .value써야함 getAttribute(value)는 원래값 가져옴

    $label.replaceChild($newSpan, $modInput);

    // 배열 데이터 수정
    const idx = findIndexByDataId(+$label.parentNode.dataset.id)
    todos[idx].text = $newSpan.textContent;

    console.log(todos);

}



/* 내가 한거
// 할 일 수정 처리 함수
function modifyToDoData($modifyTarget) {

    $modifyTarget.removeChild($modifyTarget.lastElementChild);
    const $new = document.createElement('input');

    $modifyTarget.appendChild($new);
    $modifyTarget.lastElementChild.setAttribute('type', 'text');
    $modifyTarget.lastElementChild.classList.add('modify-input');
   
}
*/


// 메인 실행부
(function () {

    // 할 일 추가 이벤트
    const $addBtn = document.getElementById('add');
    $addBtn.addEventListener('click', e => {
        e.preventDefault(); // btn의 submit 전송기능(버튼누르면 새로고침 됨) 중단

        // console.log('추가버튼 클릭!');

        insertTodoData();
    });

    // 할 일 완료(체크박스) 이벤트
    const $todoList = document.querySelector('.todo-list');
    $todoList.addEventListener('change', e => {

        if(!e.target.matches('.checkbox input[type=checkbox]')) return;
        //console.log('체크박스 체인지 이벤트 발생');

        //console.log(e.target.nextElementSibling);

        // 체크박스에 변화가 생겼을 때 CSS변동 처리 함수
        changeCheckState(e.target.parentNode);

    });

    /* 내가 한거
    $todoList.addEventListener('click', e => {

        if(!e.target.matches('.remove span') && !e.target.matches('.modify span')) {
            return;
        }
        // 할 일 삭제버튼 클릭 이벤트
        else if (e.target.matches('.remove span')) {
            // console.log('삭제 버튼 클릭됨!', e.target);
            console.log(e.target.parentNode.parentNode);

            removeToDoData(e.target.parentNode.parentNode);
        }
        // 할일 수정버튼 클릭 이벤트
        else if (e.target.matches('.modify span')) {
            // e.preventDefault();
            
            console.log(e.target.parentNode.previousElementSibling);

            modifyToDoData(e.target.parentNode.previousElementSibling);
        }
    });
    */

    
    // 할 일 삭제버튼 클릭 이벤트
    $todoList.addEventListener('click', e => {

        if(!e.target.matches('.remove span')) return;

        // console.log('삭제 버튼 클릭됨!', e.target);
        console.log(e.target.parentNode.parentNode);

        removeToDoData(e.target.parentNode.parentNode);
    });

    // 할 일 수정 이벤트 (수정모드진입, 수정완료)
    $todoList.addEventListener('click', e => {

        // 이벤트 발생 요소가 수정모드진입버튼이라면~
        if (e.target.matches('.modify span.lnr-undo')) {
            console.log(e.target);
            enterModifyMode(e.target);
        }
        else if (e.target.matches('.modify span.lnr-checkmark-circle')) {
            modifyToDoData(e.target);
        }
        else {
            return;
        }
    } );

})();