const audioPlayer = document.querySelectorAll(".audio-player");
const song = document.querySelectorAll("audio source");

//test like unique
audioPlayer.forEach((el, index) => {
  let btnPlay = el.querySelector(".controls .toggle-play");
  let audio = el.querySelector("audio source");
  let timeline = el.querySelector(".timeline");
  let progress = el.querySelector(".progress");
  let src = audio.src;
  let audioSrc = new Audio(src);
  timeline.addEventListener(
    "click",
    (e) => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek =
        (e.offsetX / parseInt(timelineWidth)) * audioSrc.duration;
      audioSrc.currentTime = timeToSeek;
    },
    false
  );

  setInterval(() => {
    progress.style.width =
      (audioSrc.currentTime / audioSrc.duration) * 100 + "%";
    // audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    //   audio.currentTime
    // );
  }, 500);

  audioSrc.pause();
  btnPlay.addEventListener("click", () => {
    if (audioSrc.paused) {
      btnPlay.classList.remove("play");
      btnPlay.classList.add("pause");
      audioSrc.play();
      btnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
      console.log(index);
    } else {
      btnPlay.classList.remove("pause");
      btnPlay.classList.add("play");
      audioSrc.pause();
      btnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
      console.log(index);
    }
  });
});

// const audioPlayer = document.querySelector(".audio-player");
// const audio = new Audio(
//   "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
// );
// //credit for song: Adrian kreativaweb@gmail.com

// console.dir(audio);

// audio.addEventListener(
//   "loadeddata",
//   () => {
//     // audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
//     //   audio.duration
//     // );
//     audio.volume = 0.75;
//   },
//   false
// );

// //click on timeline to skip around
// const timeline = audioPlayer.querySelector(".timeline");
// timeline.addEventListener(
//   "click",
//   (e) => {
//     const timelineWidth = window.getComputedStyle(timeline).width;
//     const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
//     audio.currentTime = timeToSeek;
//   },
//   false
// );

// //click volume slider to change volume
// const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
// volumeSlider.addEventListener(
//   "click",
//   (e) => {
//     const sliderWidth = window.getComputedStyle(volumeSlider).width;
//     const newVolume = e.offsetX / parseInt(sliderWidth);
//     audio.volume = newVolume;
//     audioPlayer.querySelector(".controls .volume-percentage").style.width =
//       newVolume * 100 + "%";
//   },
//   false
// );

// //check audio percentage and update time accordingly
// setInterval(() => {
//   const progressBar = audioPlayer.querySelector(".progress");
//   progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
//   // audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
//   //   audio.currentTime
//   // );
// }, 500);

// //toggle between playing and pausing on button click
// const playBtn = audioPlayer.querySelectorAll(".controls .toggle-play");
// const _player = document.querySelectorAll(".audio-player");
// _player.forEach((element, index) => {
//   let player = element.querySelector(".controls .toggle-play");
//   player.addEventListener("click", () => {
//     if (audio.paused) {
//       player.classList.remove("play");
//       player.classList.add("pause");
//       audio.play();
//       player.innerHTML = '<i class="fa-solid fa-pause"></i>';
//     } else {
//       player.classList.remove("pause");
//       player.classList.add("play");
//       audio.pause();
//       player.innerHTML = '<i class="fa-solid fa-play"></i>';
//     }
//   });
// });

// audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
//   const volumeEl = audioPlayer.querySelector(".volume-container .volume");
//   audio.muted = !audio.muted;
//   if (audio.muted) {
//     volumeEl.classList.remove("icono-volumeMedium");
//     volumeEl.classList.add("icono-volumeMute");
//   } else {
//     volumeEl.classList.add("icono-volumeMedium");
//     volumeEl.classList.remove("icono-volumeMute");
//   }
// });

// //turn 128 seconds into 2:08
// function getTimeCodeFromNum(num) {
//   let seconds = parseInt(num);
//   let minutes = parseInt(seconds / 60);
//   seconds -= minutes * 60;
//   const hours = parseInt(minutes / 60);
//   minutes -= hours * 60;

//   if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
//   return `${String(hours).padStart(2, 0)}:${minutes}:${String(
//     seconds % 60
//   ).padStart(2, 0)}`;
// }
