// Create a request variable and assign a new XMLHttpRequest object to it.
var myUrl = new URL(document.location.href);
var myParam = myUrl.searchParams.get("id") || 1;

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
let xanoUrl = new URL(
  "https://x8ki-letl-twmt.n7.xano.io/api:v0K9JRjG/alumnis/" + myParam
);

// Open a new connection, using the GET request on the URL endpoint
request.open("GET", xanoUrl.toString(), true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    // Map a variable called itemContainer to the Webflow element called "Item-Container"
    const itemContainer = document.getElementById("Item-Container");

    // For each restaurant, create a div called card and style with the "Sample Card" class
    const item = document.getElementById("samplestyle");

    const img = item.getElementsByTagName("IMG")[0];
    img.src = data.banner.url + "?tpl=big:box";

    // Create an h1 and set the text content to the film's title
    const h1 = item.getElementsByTagName("H1")[0];
    h2.textContent = alumnis.name;

    // Create a p and set the text content to the film's description
    const p = item.getElementsByTagName("P")[0];
    p.textContent = `${data.description.substring(0, 240)}`; // Limit to 240 chars

    // Append the card to the div with "Item-Container" id
    itemContainer.appendChild(item);
  } else {
    console.log("error");
  }
};

// Send request
request.send();
