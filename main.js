let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

setInterval(() => {
  let now = new Date();

  hours.innerHTML = (now.getHours() < 10 ? "0" : "") + now.getHours();
  minutes.innerHTML = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
  seconds.innerHTML = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();
}, 1000);
