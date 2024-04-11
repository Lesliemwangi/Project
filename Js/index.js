const BASE_URL = "http://localhost:3000/mansionettes";

document.addEventListener("DOMContentLoaded", () => {
  fetchMansionette();
});

function fetchMansionette() {
  fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json)
    .then((mansionettes) => {
      console.log(mansionettes);
    }).catch((err) => console.log(err));
}
function renderMansionettes(mansionette) {
  const houses = document.querySelector("buy1");
  const houseCard = document.createElement("div");
  houseCard.classList.add();
}
