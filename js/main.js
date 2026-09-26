"use strict";

const alertBox = document.querySelector(".alert");

//** task 1 */
const btnPrimary = document.querySelector(".btn-primary");
btnPrimary.onclick = function () {
  alertBox.className = "alert mt-5 alert-primary";
  alertBox.textContent = "A simple primary alert—check it out!";
};

//** task 2 */
const btnSecondary = document.querySelector(".btn-secondary");
btnSecondary.addEventListener("click", () => {
  alertBox.className = "alert mt-5 alert-primary";
  alertBox.textContent = "A simple secondary alert—check it out!";
});

//** task 3 */
const btnSuccess = document.querySelector(".btn-success");

btnSuccess.addEventListener("mouseover", () => {
  alertBox.classList.add("alert-success");
  alertBox.textContent = "A simple success alert—check it out!";
});

btnSuccess.addEventListener("mouseout", () => {
  alertBox.classList.remove("alert-success");
  alertBox.textContent = "";
});

//** task 4 */
const btnDanger = document.querySelector(".btn-danger");

btnDanger.addEventListener("focus", () => {
  alertBox.classList.add("alert-danger");
  alertBox.textContent = "A simple danger alert—check it out!";
});

btnDanger.addEventListener("focusout", () => {
  alertBox.classList.remove("alert-danger");
  alertBox.textContent = "";
});

//** task 5 */
const btnDark = document.querySelector(".btn-dark");
const btnLight = document.querySelector(".btn-light");

btnLight.classList.add("hide");

function toggleMode() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    btnDark.classList.add("hide");
    btnLight.classList.remove("hide");
  } else {
    btnDark.classList.remove("hide");
    btnLight.classList.add("hide");
  }
}

btnDark.addEventListener("click", toggleMode);
btnLight.addEventListener("click", toggleMode);

//** task 6 */
const btnInfo = document.querySelector(".btn-info");

btnInfo.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    alertBox.classList.add("alert-info");
    alertBox.textContent = "A simple info alert—check it out!";
  }
});

//** task 7 */
const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  const cardTitle = cards[i].querySelector(".card-title");
  console.log(cardTitle.textContent);
}

//** task 8 */
for (let i = 0; i < cards.length; i++) {
  const cardTitle = cards[i].querySelector(".card-title");
  const addToCartBtn = cards[i].querySelector(".add-to-cart");

  addToCartBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(cardTitle.textContent);
  });
}
