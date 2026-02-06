const reasons = [
  "You make ordinary days feel lighter.",
  "You listen without trying to fix things.",
  "You make silence comfortable.",
  "You remember small details.",
  "You make me laugh without trying.",
  "You notice when something is off and check in.",
  "You are patient when I need time.",
  "You make shared plans feel simple.",
  "You are honest even when it is hard.",
  "You show up when it matters.",
  "You are kind to people who cannot give anything back.",
  "You keep your word.",
  "You give thoughtful advice without pushing it.",
  "You respect my boundaries.",
  "You make room for my worries without minimizing them.",
  "You notice the good in small moments.",
  "You help without keeping score.",
  "You make home feel steadier.",
  "You ask good questions.",
  "You are gentle with my mistakes.",
  "You celebrate quiet wins.",
  "You take care of yourself, and it shows.",
  "You make hard days feel manageable.",
  "You let me be fully myself around you.",
  "You check on the people I care about.",
  "You make effort feel natural.",
  "You bring a calm focus to messy days.",
  "You make the room feel softer when you enter."
];

const reasonEl = document.getElementById("reason");
const buttonEl = document.getElementById("next");
const progressEl = document.getElementById("progress");
const closingEl = document.getElementById("closing");

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
  }, 20);
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
    }, 80);
  }, 360);
}

showReason(index);
buttonEl.addEventListener("click", onNext);
