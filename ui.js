// HTML Variables

// Activity
const actHtmlName = document.querySelector("#act-name"),
  actHtmlType = document.querySelector("#act-type"),
  actHtmlParticipants = document.querySelector("#act-participants");

// Dogs
const dogHtmlImg = document.querySelector("#dog-img"),
  dogHtmlName = document.querySelector("#dog-name");

// Memes
const memeHtmlImg = document.querySelector("#meme-img"),
  memeHtmlTitle = document.querySelector("#meme-title");

// Activity UI
class actUI {
  constructor() {
    (this.name = actHtmlName),
      (this.type = actHtmlType),
      (this.participants = actHtmlParticipants);
  }

  paint(name, type, participants) {
    this.name.innerHTML = "Loading...";
    this.type.innerHTML = "Type: ";
    this.participants.innerHTML = "Participants: ";

    setTimeout(() => {
      this.name.innerHTML = name;
      this.type.innerHTML = `Type: ${type}`;
      this.participants.innerHTML = `Participants: ${participants}`;
    }, 1000);
  }
}

// Dog UI
class dogUI {
  constructor() {
    (this.name = dogHtmlName), (this.img = dogHtmlImg);
  }

  paint(title, image) {
    this.name.innerHTML = "Loading...";
    this.img.src = "";

    setTimeout(() => {
      this.name.innerHTML = title;
      this.img.src = image;
    }, 2000);
  }
}

// Meme UI
class memeUI {
  constructor() {
    (this.title = memeHtmlTitle), (this.img = memeHtmlImg);
  }

  paint(title, image) {
    this.title.innerHTML = "Loading...";
    this.img.src = "";

    setTimeout(() => {
      this.title.innerHTML = title;
      this.img.src = image;
    }, 2000);
  }
}
