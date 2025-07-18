const stars = [
  { name: "x", description: "x", 'img':'', q: "x", a: "x" },
  { name: "y", description: "y", 'img':'', q: "x", a: "x" },
];

const modal = document.querySelector("#star-modal");
const sky = document.querySelector("#night-sky");

function openModal(num) {
  modal.style.display = "flex";
  sky.style.display = "none";

  document.querySelector("#name").innerHTML = stars[num].name;
  document.querySelector("#description").innerHTML = stars[num].description;
  document.querySelector("#q").innerHTML = stars[num].textbox;
}

function closeModal() {
  console.log("works");
  document.querySelector("#star-modal").style.display = "none";
  sky.style.display = "flex";
}
