//Once click on search button, then  grab value from input element
var searchButton = document.getElementById("searchButton");


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
    console.log (locRes);
    // write query to page so user knows what they are viewing
    var temp = locRes.main.temp;
    var humidity = locRes.main.humidity;
    var windSpeed =locRes.wind.speed;
    // var uvIndex = 
    // 
  })
  .catch(function (error) {
    console.error(error);
  });
  
}
searchButton.onclick = getCityName

var searchInput=document.getElementById("search-input");
var searchList=document.getElementById("search-list");
var searchForm=document.getElementById("search-form");

var searches=[];


function renderSearches() {
 
  searchList.innerHTML = "";
 
  for (var i = 0; i < searches.length; i++) {
    var search = searches[i];

    var li = document.createElement("li");
    li.textContent = search;
    li.setAttribute("data-index", i);

    searchList.appendChild(li);
  }
}

function init() {
  // Get stored search from localStorage
  var storedSearches = JSON.parse(localStorage.getItem("searches"));

  if (storedSearches !== null) {
    searches = storedSearches;
  }

  renderSearches();
}

function storeSearches() {
  // Stringify and set key in localStorage to searches array
  localStorage.setItem("searches", JSON.stringify(searches));
}

// Add submit event to form
searchForm.addEventListener("searchButton", function(event) {
  event.preventDefault();

  var searchText = searchInput.value.trim();

  // Return from function early if submitted searchText is blank
  if (searchText === "") {
    return;
  }

  // Add new searchText to todos array, clear the input
  searches.push(searchText);
  searchInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeSearches();
  renderSearches();
});

init()
