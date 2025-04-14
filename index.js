const containerEl = document.querySelector(".container");

const careers = [
  "Web Developer",
  "Software Engineer",
  "Youtuber",
  "UX Designer",
  "Instructor",
  "Freelancer",
];

let careersIndex = 0;
let characterIndex = 1;

function updateCareer() {
  const article = ["A", "E", "I", "O", "U"].includes(
    careers[careersIndex].slice(0, 1)
  )
    ? "An"
    : "A";
  containerEl.innerHTML = `<h1>I'm ${article}
   ${careers[careersIndex].slice(0, characterIndex)}</h1>`;
  characterIndex++;

  if (characterIndex > careers[careersIndex].length) {
    characterIndex = 1;
    careersIndex++;
  }

  if (careersIndex >= careers.length) {
    careersIndex = 0;
  }
}

setInterval(updateCareer, 250);
