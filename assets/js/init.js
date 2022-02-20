const isPlaying = (sound) =>
  sound.paused && sound.currentTime >= 0 && !sound.started;

const random = (min, max) => ~~(Math.random() * (max - min + 1)) + min;

const kanbanList = [
  {
    imgUrl: "assets/images/kanban/kanban01.png",
    chat: [
      {
        msg: "Hello! My name is Ichihime. Glad to meet you-nya!",
        audio: "assets/audio/01/lobby_selfintro.mp3",
      },
      {
        msg: "Nyaa~...Snacks always taste better when they are given to me by someone else. I want more!",
        audio: "assets/audio/01/lobby_normal5.mp3",
      },
      {
        msg: "Cat ears are very sensitive and fragile. They can’t be touched by random, ordinary people! Speaking of them, master, would you like to touch them-nyaa?",
        audio: "assets/audio/01/lobby_normal7.mp3",
      },
    ],
  },
  {
    imgUrl: "assets/images/kanban/kanban02.png",
    chat: [
      {
        msg: "I am Miki Nikaido. Glad to meet you~",
        audio: "assets/audio/02/lobby_selfintro.mp3",
      },
      {
        msg: "If you can win over me on the Mahjong table, I will give you a little surprise.",
        audio: "assets/audio/02/lobby_normal2.mp3",
      },
      {
        msg: "Mahjong is fun. But...If I can play with someone I like...That’s even better~",
        audio: "assets/audio/02/lobby_normal3.mp3",
      },
    ],
  },
  {
    imgUrl: "assets/images/kanban/kanban03.png",
    chat: [
      {
        msg: "Nadeshiko here. Glad to meet you!",
        audio: "assets/audio/03/lobby_selfintro.mp3",
      },
      {
        msg: "Instead of being upset about one loss, how about revising the log and scoring a handsome win in your next match?",
        audio: "assets/audio/03/lobby_normal3.mp3",
      },
      {
        msg: "Want some beer? ...A life without alcohol is just too dull and boring.",
        audio: "assets/audio/03/lobby_normal5.mp3",
      },
    ],
  },
  {
    imgUrl: "assets/images/kanban/kanban04.png",
    chat: [
      {
        msg: "Yay! Kana-chan here. I’m the TOP1 idol!",
        audio: "assets/audio/04/game_top.mp3",
      },
      {
        msg: "What a beautiful day! It’s a perfect day to stay at home...Oops...to work!",
        audio: "assets/audio/04/lobby_normal2.mp3",
      },
      {
        msg: "What’s the trouble of being an idol? Work has taken too much game time away from me, I guess!",
        audio: "assets/audio/04/lobby_normal4.mp3",
      },
    ],
  },
  {
    imgUrl: "assets/images/kanban/kanban05.png",
    chat: [
      {
        msg: "My name is Riu Kujou. As you can see, I’m a maid... Please don’t keep looking at me.",
        audio: "assets/audio/05/lobby_selfintro.mp3",
      },
      {
        msg: "This goes here, that goes there. Come on, I swear I will beat you if you mess things up again next time.",
        audio: "assets/audio/05/lobby_normal1.mp3",
      },
      {
        msg: "Tsk, why is your room so messy? Get up now! I will clean the floor, you go clean the table. Move, now!",
        audio: "assets/audio/05/lobby_normal4.mp3",
      },
    ],
  },
  {
    imgUrl: "assets/images/kanban/kanban06.png",
    chat: [
      {
        msg: "Huh? Are you the new Mahjong player? You look terrible. Don’t hold Chiori back.",
        audio: "assets/audio/06/lobby_selfintro.mp3",
      },
      {
        msg: "Why are you looking at Chiori like that? Are you thinking of something dirty?",
        audio: "assets/audio/06/lobby_normal2.mp3",
      },
      {
        msg: "Idiot! Pervert! Fool! ...Um, aren’t you mad at all? What a strange person.",
        audio: "assets/audio/06/lobby_normal3.mp3",
      },
    ],
  },
  {
    imgUrl: "assets/images/kanban/kanban07.png",
    chat: [
      {
        msg: "...Yui Yagi here. Who are you? ...",
        audio: "assets/audio/07/lobby_selfintro.mp3",
      },
      {
        msg: "Why does everyone have so many facial expression? I don’t understand...",
        audio: "assets/audio/07/lobby_normal2.mp3",
      },
      {
        msg: "Senpai, senpai~, senpai, senpai... Senpai is an interesting word. Simply changing my tone can imply many different meanings.",
        audio: "assets/audio/07/lobby_normal4.mp3",
      },
    ],
  },
  {
    imgUrl: "assets/images/kanban/kanban08.png",
    chat: [
      {
        msg: "Nice...to...meet you.",
        audio: "assets/audio/08/lobby_selfintro.mp3",
      },
      {
        msg: "Magic Mahjong? I have only heard of spiritual Mahjong... If you would like to replenish your spirits... Maybe I can help...",
        audio: "assets/audio/08/lobby_normal2.mp3",
      },
      {
        msg: "Ah, master... Please don’t stare at me, I am shy...",
        audio: "assets/audio/08/lobby_normal6.mp3",
      },
    ],
  },
];

document.getElementById("titleShown").innerHTML =
  document.getElementById("title").innerHTML;

const kanban = document.querySelector(".kanban");

kanban.innerHTML = kanbanList
  .map(
    (d, index) =>
      `<img class="kanban-img kanban-img-${index}" src="${d.imgUrl}"/>`
  )
  .join("");

let kanbanTimeOut = -1,
  kanbanAudio = new Audio(),
  kanbanNow = -1;

const kanbanTimeOutFunc = () => {
  ++kanbanNow < kanbanList.length ? kanbanNow : (kanbanNow = 0);
  kanban.querySelector(`.kanban-img-${kanbanNow}`)?.classList.add("now");
  kanban
    .querySelector(
      `.kanban-img-${(kanbanNow - 1 < 0 ? kanbanList.length : kanbanNow) - 1}`
    )
    ?.classList.remove("now");
  return setTimeout(() => (kanbanTimeOut = kanbanTimeOutFunc()), 1e3 * 30);
};

kanbanTimeOut = kanbanTimeOutFunc();

kanbanList.map((d, index) => {
  let _ = kanban.querySelector(`.kanban-img-${index}`);
  _.addEventListener("click", () => {
    if (isPlaying(kanbanAudio)) {
      clearTimeout(kanbanTimeOut);
      let data = d.chat[random(0, d.chat.length - 1)];
      kanbanAudio = new Audio(data.audio);
      kanbanAudio.play();
      kanbanAudio.addEventListener("canplay", () => {
        kanbanTimeOut = setTimeout(
          () => (kanbanTimeOut = kanbanTimeOutFunc()),
          1e3 * (30 + ~~kanbanAudio.duration)
        );
      });
    }
  });
});

const options = document.getElementById("options");
const option = options.querySelectorAll(".option>*");
const gameEl = document.getElementById("game");

document.getElementById("start").addEventListener("click", () => {
  gameEl.classList.add("playing");
  kanbanAudio.pause();
  gameEl.innerHTML = `<div id="load"><div class="loading"></div></div><iframe class="gameIng" type="text/html" src="https://game.mahjongsoul.com/index.html">`;
});
document.addEventListener(
  "keydown",
  (e) => {
    switch (e.code) {
      case "F11":
        if (document.fullscreenEnabled) document.exitFullscreen();
        else document.querySelector("#game iframe")?.requestFullscreen();
        break;
    }
  },
  false
);

if (localStorage.getItem("area"))
  options.querySelector(".this").innerText = localStorage.getItem("area");

option.forEach((el) =>
  el.addEventListener("click", (el) => {
    options.querySelector(".this").innerHTML = el.target.innerHTML;
    localStorage.setItem("area", el.target.innerText);
    option.forEach((el) => el.classList.remove("active"));
    el.target.classList.add("active");
  })
);
options.addEventListener("click", () =>
  options.classList.toggle("show-options")
);
