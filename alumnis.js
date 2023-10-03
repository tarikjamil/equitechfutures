let xanoUrl = new URL("https://x8ki-letl-twmt.n7.xano.io/api:v0K9JRjG/");

function getAlumnis(filter = "") {
  let request = new XMLHttpRequest();
  let url = xanoUrl.toString() + "alumnis";
  request.open("GET", url, true);

  request.onload = function () {
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      const cardContainer = document.getElementById("Cards-Container");
      cardContainer.innerHTML = ""; // clear the container

      const filteredData = data.filter((alumni) => {
        return alumni.name.includes(filter);
      });

      filteredData.forEach((alumni) => {
        const style = document.getElementById("samplestyle");
        const card = style.cloneNode(true);

        card.setAttribute("id", "");
        card.style.display = "block";

        card.addEventListener("click", function () {
          document.location.href = "/alumni/" + alumni.slug;
        });

        const img = card.getElementsByTagName("IMG")[0];
        img.src = alumni.image.url + "?tpl=big:box";

        const h2 = card.getElementsByTagName("H2")[0];
        h2.textContent = alumni.name;

        const country = card.getElementsByClassName("country-name")[0];
        country.textContent = `${alumni.country.substring(0, 240)}`;

        const position = card.getElementsByClassName("position")[0];
        position.textContent = `${alumni.position.substring(0, 240)}`;

        const bio = card.getElementsByClassName("bio")[0];
        bio.textContent = `${alumni.bio.substring(0, 240)}`;

        cardContainer.appendChild(card);
      });
    }
  };
  request.send();
}

(function () {
  getAlumnis();
})();

document.querySelector(".Search").addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  getAlumnis(searchTerm);
});
