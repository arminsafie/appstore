const phoneNavBtn = document.getElementById("phone-nav-btn");
const phoneHidden = document.getElementById("phone-hidden");
console.log(phoneNavBtn);
phoneNavBtn.addEventListener("click", () => {
  phoneHidden.classList.toggle("phone-hidden-part-menu--active");
  document.body.classList.toggle("overflow-hidden");
});
