// Student Philosophy Text Split into Two Paragraphs
const philosophyText1 = `As a first-year coding student, I see programming not just as a technical skill, but as a way of thinking. Coding teaches me how to break down complex problems into smaller, manageable pieces and approach challenges with logic and patience. Every bug is not a failure, but a clue; every error message is feedback guiding me toward understanding. I’m learning that progress in coding isn’t about memorizing syntax, but about developing persistence, curiosity, and the ability to learn how to learn. The process can be frustrating at times, but that struggle is where real growth happens.`;

const philosophyText2 = `At the same time, coding feels like a creative act. It’s a way to turn ideas into something tangible, to build tools, experiences, or solutions from nothing but thought and effort. As I continue learning, I want to balance discipline with exploration—following best practices while still experimenting and asking “what if?” My philosophy is to stay patient with myself, embrace mistakes as part of the journey, and focus on steady improvement rather than perfection.`;

const para1 = document.getElementById("philosophy-text-1");
const para2 = document.getElementById("philosophy-text-2");

let index1 = 0;
let index2 = 0;

// Type first paragraph
function typePhilosophy1() {
  if (index1 < philosophyText1.length) {
    para1.textContent += philosophyText1.charAt(index1);
    index1++;
    setTimeout(typePhilosophy1, 50);
  } else {
    // Start second paragraph after a short delay
    setTimeout(typePhilosophy2, 500);
  }
}

// Type second paragraph
function typePhilosophy2() {
  if (index2 < philosophyText2.length) {
    para2.textContent += philosophyText2.charAt(index2);
    index2++;
    setTimeout(typePhilosophy2, 50);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typePhilosophy1();
});