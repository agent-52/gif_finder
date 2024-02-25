const image = document.querySelector("img");
const search = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");

function displayImage(name) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=9PDSKvVzmsNKs4GAsNr1sfKwzUAaVUiQ&s=${name}`,
    { mode: "cors" }
  )
    .then(function (response) {
      console.log("respose object resolved");
      return response.json();
    })
    .then(function (response) {
      console.log(response.data.images.original.url);
      image.src = response.data.images.original.url;
    })
    .catch(function (error) {
      console.log("Error", error);
    });
}

searchButton.addEventListener("click", () => {
  const name = search.value;
  displayImage(name);
});
