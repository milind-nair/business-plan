const reasons = [
  "You make every day fun.",
  "You make me feel like I could never get bored with you.",
  "You make me feel safe and loved.",
  "You make me feel cared for.",
  "You are the life of every party.",
  "You are passionate about the things you like.",
  "You are a foodie.",
  "You are aggressive about your goals in life, and I respect you for it.",
  "You talk endlessly and make me talk endlessly.",
  "You make me feel like my presence actually matters.",
  "You give life more color than it had before you.",
  "You can turn a random Tuesday into an memorable event.",
  "You make hard days feel manageable.",
  "You let me be fully myself around you.",
  "You reach for my hand without thinking.",
  "You make me laugh until my sides hurt.",
  "You never let a moment feel wasted.",
  "You remind me what it feels like to be truly alive.",
  "You light up every room you walk into.",
  "You make adventures out of ordinary moments.",
  "You share your excitement about food like it's contagious.",
  "You inspire me to chase my own dreams harder.",
  "You challenge me in ways that make me better.",
  "You are a reason to live for."
];

const reasonEl = document.getElementById("reason");
const buttonEl = document.getElementById("next");
const progressEl = document.getElementById("progress");
const closingEl = document.getElementById("closing");
const introEl = document.getElementById("intro");
const revealEl = document.getElementById("reveal");

let index = 0;
let locked = false;

function showReason(i) {
  reasonEl.textContent = reasons[i];
  progressEl.textContent = `Reason ${i + 1} of ${reasons.length}`;
}

function setEndState() {
  buttonEl.textContent = "That’s all. For now.";
  buttonEl.disabled = true;
  progressEl.textContent = "All reasons shared";
  closingEl.hidden = false;
  window.setTimeout(() => {
    closingEl.classList.add("show");
  }, 30);
}

function onNext() {
  if (locked) return;
  if (index >= reasons.length - 1) return;

  locked = true;
  reasonEl.classList.add("fade");

  window.setTimeout(() => {
    index += 1;
    showReason(index);
    reasonEl.classList.remove("fade");

    if (index === reasons.length - 1) {
      setEndState();
    }

    window.setTimeout(() => {
      locked = false;
    }, 90);
  }, 380);
}

function dismissIntro() {
  introEl.classList.add("dismiss");
  document.body.classList.remove("intro-active");
  window.setTimeout(() => {
    introEl.hidden = true;
  }, 650);
}

showReason(index);
buttonEl.addEventListener("click", onNext);
revealEl.addEventListener("click", dismissIntro);
