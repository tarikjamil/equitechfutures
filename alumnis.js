// Create a variable for the API endpoint. In this example, we're accessing Xano's API
let xanoUrl = new URL("https://x8ki-letl-twmt.n7.xano.io/api:v0K9JRjG");

// Define a function (set of operations) to get restaurant information.
// This will use the GET request on the URL endpoint
function getAlumnis() {
  // Create a request variable and assign a new XMLHttpRequest object to it.
  // XMLHttpRequest is the standard way you access an API in plain Javascript.
  let request = new XMLHttpRequest();

  // Define a function (set of operations) to get restaurant information.
  // Creates a variable that will take the URL from above and makes sure it displays as a string.
  // We then add the word 'restaurant" so the API endpoint becomes https://x715-fe9c-6426.n7.xano.io/api:Iw1iInWB/restaurant
  let url = `${xanoUrl}/alumnis`;

  // Remember the 'request' was defined above as the standard way to access an API in Javascript.
  // GET is the verb we're using to GET data from Xano
  request.open("GET", url, true);

  // When the 'request' or API request loads, do the following...
  request.onload = function () {
    // Store what we get back from the Xano API as a variable called 'data' and converts it to a javascript object
    let data = JSON.parse(this.response);

    // Status 200 = Success. Status 400 = Problem.  This says if it's successful and no problems, then execute
    if (request.status >= 200 && request.status < 400) {
      // Map a variable called cardContainer to the Webflow element called "Cards-Container"
      let cardContainer = document.getElementById("Cards-Container");

      // This is called a For Loop. This goes through each object being passed back from the Xano API and does something.
      // Specifically, it says "For every element in Data (response from API), call each individual item restaurant"
      data.forEach((alumnis) => {
        // For each restaurant, create a div called card and style with the "Sample Card" class
        let style = document.getElementById("samplestyle");
        // Copy the card and it's style
        let card = style.cloneNode(true);

        card.setAttribute("id", "");
        card.style.display = "block";

        // When a restuarant card is clicked, navigate to the item page by passing the restaurant id
        card.addEventListener("click", function () {
          document.location.href = "/item?id=" + alumnis.id;
        });

        // For each restaurant, Create an image and use the restaurant image coming from the API
        let img = card.getElementsByTagName("IMG")[0];
        img.src = alumnis.image.url + "?tpl=big:box"; //

        let h2 = card.getElementsByTagName("H2")[0];
        h2.textContent = alumnis.name;

        let country = card.getElementsByClassName("country-name")[0];
        country.textContent = alumnis.country;

        let year = card.getElementsByClassName("year")[0];
        year.textContent = alumnis.year;

        let position = card.getElementsByClassName("position")[0];
        position.textContent = alumnis.position;

        let programname = card.getElementsByClassName("program-name")[0];
        programname.textContent = alumnis.program;

        // Place the card into the div "Cards-Container"

        cardContainer.appendChild(card);
      });
    }
  };

  // Send Restaurant request to API
  request.send();
}

// This fires all of the defined functions when the document is "ready" or loaded
(function () {
  getAlumnis();
})();

function filterTemplates() {
  let filterName = document.getElementById("filter-name").value.toLowerCase();
  let filterCountry = document
    .getElementById("filter-country")
    .value.toLowerCase();
  let filterYear = document.getElementById("filter-year").value.toLowerCase();
  let filterProgram = document
    .getElementById("filter-program")
    .value.toLowerCase();

  let templates = document.querySelectorAll('[w-el="memberItem"]');

  templates.forEach((template) => {
    let name = template
      .querySelector('[w-el="name"]')
      .textContent.toLowerCase();
    let country = template
      .querySelector(".country-name")
      .textContent.toLowerCase();
    let year = template.querySelector(".year").textContent.toLowerCase();
    let program = template
      .querySelector('[w-el="program"]')
      .textContent.toLowerCase();

    if (
      name.includes(filterName) &&
      country.includes(filterCountry) &&
      year.includes(filterYear) &&
      program.includes(filterProgram)
    ) {
      template.style.display = "block";
    } else {
      template.style.display = "none";
    }
  });
}
