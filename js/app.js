const enlaces = document.querySelectorAll(".First_a");
const submit = document.querySelector(".First_submit");
const display = document.querySelector(".First");
const none = document.querySelector(".Second");
const numbers = document.querySelectorAll("a");
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    enlaces.forEach((e) => {
      e.classList.remove("First_a--active");
    });
    enlace.classList.add("First_a--active");
  });
});

submit.addEventListener("click", () => {
  display.classList.add("First--none");
  none.classList.remove("Second--none");
});

let rating = -1;

function updateRating(num) {
  rating = num;
  console.log(rating);
}

submit.addEventListener("click", () => {
  if (rating === -1) return;
  document.querySelector(
    ".Second_rating"
  ).innerText = `You selected ${rating} out of 5`;
});
