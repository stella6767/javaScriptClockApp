const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image(); //이미지 객체 생성
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image); //
}

function genRandom() { // 0~2까지 난수 생성
  const number = Math.floor(Math.random() * IMG_NUMBER); //floor = 소수점 이하 버리기
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();