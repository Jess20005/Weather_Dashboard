//Once click on search button, then  grab value from input element
var searchButton = document.getElementById("searchButton")

function getCityName(event) {
    event.preventDefault()
    var cityNameInput = document.getElementById("search-input").value
    searchApi(cityNameInput)
}

//
function searchApi(name) {
    var locQueryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=87bf69b5ba24306a1d2648c4053a20d1';
  
    fetch(locQueryUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (locRes) {
        // write query to page so user knows what they are viewing
        var wind = locRes.wind.speed;
        var temp = locRes.main.temp;

      })
      .catch(function (error) {
        console.error(error);
      });
      
  }
searchButton.onclick = getCityName