const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; //전역

function deleteToDo(event) {
  const btn = event.target; //이벤트가 발생한 dom. 여기서는 button 태그
  const li = btn.parentNode; //부모 태그를
  toDoList.removeChild(li); //html part에서 지우고
  const cleanToDos = toDos.filter(function(toDo) { //li.id가 아닌 것만 걸러내기
    return toDo.id !== parseInt(li.id); // li.id는 string이라 number로 형변환
  });
  toDos = cleanToDos; //대체
  saveToDos(); //로컬스토리지에 저장
}

function saveToDos() { //로컬에 저장해서 휘발되지 않게
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //자바스크립트 오브젝트를 string으로 변환
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1; //1부터
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo); //클릭 리스너 등록
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li); //여기까지는 추가했지만 휘발성(새로고침하면 날라감)
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) { //form submit시(Enter)
  event.preventDefault(); //기본 form 동작을 막아주고
  const currentValue = toDoInput.value; //input 박스 안의 내용을 가져온 다음
  paintToDo(currentValue); //넘겨준다.
  toDoInput.value = ""; //다시 비워줌
}

function loadToDos() { // userName 없다면 toDolist 출력되지 않음. 새로고침해도 로컬내용보고 불러옴
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); //자바스크립트 object로 변환
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit); //리스너 등록
}

init();