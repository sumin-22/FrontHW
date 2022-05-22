const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

//toDos 저장소 만들기
const TODOS_LS = "toDos";
//todolist 목록 배열. 계속해서 변화하기 때문에 const가 아닌 let사용
let toDos = [];

//리스트 지우기
function deleteToDo(e){
    //이벤트가 일어나는 장소 알려주기
    const btn = e.target;
    //btn의 부모 노드를 li에 저장
    const li = btn.parentNode;
    //todolist에서 li 요소 삭제
    toDoList.removeChild(li);
    //filter는 해당함수가 toDos의 모든 item들에게 실행하도록 하여 true item으로 다시 배열을 구성
    const cleanToDos = toDos.filter(function(toDo){
        //toDo.id와 li.id를 비교해서 다른것만 toDos에 저장!!
        return toDo.id !== parseInt(li.id);
    });
    //실행 배열과 저장소 배열이 차이가 나기 때문에 필터된 배열도 다시 할당
    toDos = cleanToDos;
    saveToDos();
}; 

//요소를 저장하기 위한 함수
function saveToDos(){
    // JSON.stringify는 자바스크립트 object를 string으로 바꿔줌
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};

//화면에 출력해주기
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "🗑️";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    span.addEventListener('click', function(){  
      span.style.textDecoration = "line-through";
  })
    // toDoList.appendChild(li); 
    // 원페이지에 스크롤 보이지 않게 하기 위해 숫자 제한 : 7개
    if(newId < 8){
        toDoList.appendChild(li);
    }else{
        alert("최대 7개까지 작성할 수 있습니다!")
    }
    const toDoObj = {
        text: text,
        id: newId
    };
    // toDos.push(toDoObj);
    // 원페이지에 스크롤 보이지 않게 하기 위해 숫자 제한 : 7개
    if(newId < 8){
        toDos.push(toDoObj);
    }
    saveToDos();
};

function handleSubmit(e){
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    // 엔터 누르면 input 안 초기화
    toDoInput.value = "";
};

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
};

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
};

init();