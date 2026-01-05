let time = 120;

const timerEl = document.getElementById("timer");
const btn = document.getElementById("actionBtn");

const countdown = setInterval(() => {
  let min = Math.floor(time / 60);
  let sec = time % 60;

  timerEl.textContent =
    `${min}:${sec.toString().padStart(2, "0")}`;

  time--;

  if (time < 0) {
    clearInterval(countdown);

    timerEl.textContent = "Ready";
    btn.disabled = false;
    btn.classList.add("active");

    btn.onclick = function () {
      window.location.href =
        "https://gringoxp.site/gringo/GetKey?Register=12382311249";
    };
  }
}, 1000);