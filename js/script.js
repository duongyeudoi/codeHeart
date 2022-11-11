window.onload = function () {
  var context = new AudioContext();
  var audio = document.getElementById('audio');
  audio.src = './ido.mp3';
  audio.load();
  audio.play();
};
