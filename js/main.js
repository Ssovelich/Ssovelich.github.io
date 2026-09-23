"use strict";

const classes = ["first", "second", "third", "fourth"];

//** task 1 */
const p1 = document.querySelector("#p1");
p1.style.backgroundColor = "gold";

//** task 2 */
const p2 = document.querySelector("#p2");
p2.style.backgroundColor = "gold";
p2.style.color = "blue";
p2.style.fontSize = "2rem";

//** task 3 */
const p3 = document.querySelector("#p3");
p3.classList.add("third");

//** task 4 */
const p4 = document.querySelector("#p4");
p4.classList.add("fourth", "border");

//** task 5 */
const firstButton = document.querySelector("#p1 button");
firstButton.style.backgroundColor = "gold";
firstButton.style.color = "blue";

//** task 6 */
const secondButton = document.querySelector("#p2 button");
secondButton.addEventListener("click", () => {
  p1.style.display = "none";
});

//** task 7 */
const thirdButton = document.querySelector("#p3 button");
thirdButton.addEventListener("click", () => {
  p1.style.display = "block";
});

//** task 8 */
const fourthButton = document.querySelector("#p4 button");
fourthButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
