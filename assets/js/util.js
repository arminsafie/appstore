function toggleParagraph() {
  const paragraph = document.getElementById("paragraph");
  const button = document.getElementById("toggleButton");

  if (paragraph.classList.contains("expanded")) {
    paragraph.classList.remove("expanded");
    button.textContent = "ادامه";
  } else {
    paragraph.classList.add("expanded");
    button.textContent = "کمتر";
  }
}
