const $video = document.querySelector("#video");
const $title = document.querySelector("#title");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector("#progress");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);
$video.addEventListener("loadmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);
$progress.addEventListener("input", handleInput);

function handlePlay() {
  $video.play();
  $title.style.opacity = 0;
  $play.hidden = true;
  $pause.hidden = false;
  $backward.hidden = false;
  $forward.hidden = false;
  $progress.hidden = false;
  $progress.style.opacity = 0;
}

function handlePause() {
  $video.pause();
  $title.style.opacity = 1;
  $pause.hidden = true;
  $play.hidden = false;
  $backward.hidden = true;
  $forward.hidden = true;
  $progress.style.opacity = 1;
}

function handleBackward() {
  $video.currentTime -= 10;
}

function handleForward() {
  $video.currentTime += 10;
}

function handleLoaded() {
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}

function handleInput() {
  $video.currentTime = $progress.value;
}
