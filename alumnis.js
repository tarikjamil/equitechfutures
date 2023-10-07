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
