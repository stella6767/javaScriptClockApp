
 // ,로 구분
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"); //꼭 js-clock 안에 h1태그가 포함되어있는지 체크하자..


function getTime(){
    const date= new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText=`${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`; 
}

function init(){
    getTime();
    setInterval(getTime,1000); //첫번째 인자는 함수, 1초마다 실행
}

init();