let xanoUrl = new URL("https://x8ki-letl-twmt.n7.xano.io/api:1x5nfQFj");

function getAlumnis2() {
  let request = new XMLHttpRequest();
  let url = `${xanoUrl}/alumni`;
  request.open("GET", url, true);

  request.onload = function () {
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      let cardContainer = document.getElementById("Cards-Container");

      data.forEach((alumnis) => {
        let style = document.getElementById("samplestyle");
        let card = style.cloneNode(true);

        card.setAttribute("id", "");
        card.style.display = "block";

        card.addEventListener("click", function () {
          document.location.href = "/alumnisos?id=" + alumnis.id;
        });

        let img = card.getElementsByTagName("IMG")[0];
        img.src = alumnis.Picture.url;

        let h2 = card.getElementsByTagName("H2")[0];
        h2.textContent = alumnis.Name;

        let country = card.getElementsByClassName("country-name")[0];
        country.textContent = alumnis.Country;

        let year = card.getElementsByClassName("year")[0];
        year.textContent = alumnis.Year;

        let programname = card.getElementsByClassName("program-name")[0];
        programname.textContent = alumnis.Program;

        cardContainer.appendChild(card);
      });

      // Populate the select options after the cards are added.
      populateSelectOptions();
    }
  };

  request.send();
}

(function () {
  getAlumnis2();
})();
