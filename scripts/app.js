// All HTML Variables
const actBtn = document.querySelector("#act-random-btn"),
  dogBtn = document.querySelector("#dog-random-btn"),
  memeBtn = document.querySelector("#meme-random-btn");

// Class callers
const act = new actClass(),
  dog = new dogClass(),
  meme = new memeClass();

//UI Class
const uiAct = new actUI(),
  uiDog = new dogUI(),
  uiMeme = new memeUI();

// Event Listeners
actBtn.addEventListener("click", randomAct);
dogBtn.addEventListener("click", randomDog);
memeBtn.addEventListener("click", randomMeme);

// Functions
function randomAct(e) {
  e.preventDefault();
  act.getActivity().then((data) => {
    uiAct.paint(data.activity, data.type, data.participants);
  });
}

function randomDog(e) {
  e.preventDefault();
  dog.getDogName().then((name) => {
    let randomNum = Math.floor(Math.random() * name.dogNameLength) + 1;
    let randomDog = name.dogNameArr[randomNum];

    dog.getRandomDog(randomDog).then((data) => {
      uiDog.paint(data.dogName, data.dogImg);
    });
  });
}

function randomMeme(e) {
  e.preventDefault();
  meme.getMeme().then((data) => {
    uiMeme.paint(data.memeTitle, data.memeImg);
  });
}
