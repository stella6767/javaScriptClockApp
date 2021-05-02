const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".js-greetings");


const USER_LS = "currentUser", //local storage key 값
    SHOWING_CN = "showing"; 


function saveName(text){
    localStorage.setItem(USER_LS, text); //Local Storage = 만료기한 없음, Session Storage = 세션 종료 시 만료.
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreetings(currentValue);
    saveName(currentValue);
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit); //submit 리스너 등록
}


function paintGreetings(text){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello ${text}`;
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        askForName();
    }else{
        paintGreetings(currentUser);
    }
}

function init(){
  loadName();  

}

init();


//local storage : 아주 작은 정보를 컴퓨터에 저장시키는 방법