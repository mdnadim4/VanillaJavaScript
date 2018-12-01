let text = document.querySelector("#text");
let search = document.querySelector("#search");
let result = document.querySelector("#result");

search.addEventListener("keyup", () => {
  let match = text.value.indexOf(search.value);
  if (match === -1) {
    result.innerHTML = `The value 
    ${search.value} was not found`;
  } else {
    result.innerHTML = `The value
    <strong>${search.value}</strong> was found at 
    <strong>${match}</strong>`;
  }
});
