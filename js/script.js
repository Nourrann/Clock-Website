const minElement = document.querySelector(".min");
const hourElement = document.querySelector(".hour");
const secElement = document.querySelector(".sec");

function setClock() {
  const currentTime = new Date();
  const currentHour =
    currentTime.getHours() > 12
      ? currentTime.getHours() - 12
      : currentTime.getHours();
  hourElement.style.transform = `rotate(${currentHour * 30}deg)`;
  const currentMin = currentTime.getMinutes();
  minElement.style.transform = `rotate(${currentMin * 6}deg)`;
  const currentSec = currentTime.getSeconds();
  secElement.style.transform = `rotate(${currentSec * 6}deg)`;
}
setClock();
setInterval(setClock, 1000);
