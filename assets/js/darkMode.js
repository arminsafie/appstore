const FILE_PATH_LIGHT = "./assets/css/style.css";
const FILE_PATH_DARK = "./assets/css/dark.css";

const darkMode = (btnId, linkId) => {
  const link = document.getElementById(linkId);
  const lBtn = document.getElementById("l-btn");
  const dBtn = document.getElementById("d-btn");
  document.getElementById(btnId).addEventListener("click", () => {
    const currentHref = link.getAttribute("href");
    if (currentHref.includes("style.css")) {
      link.setAttribute("href", FILE_PATH_DARK);
      dBtn.classList.toggle("d-none");
      lBtn.classList.toggle("d-none");
    } else {
      link.setAttribute("href", FILE_PATH_LIGHT);
      lBtn.classList.toggle("d-none");
      dBtn.classList.toggle("d-none");
    }
  });
};

const darkBtnId = "dark-btn";
const linkId = "style-link";

darkMode(darkBtnId, linkId);
