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
    var display = displayData(name);

    $(".currentWeather").html(display);

  })

  .catch(function (error) {
    console.error(error);
  });
  
}
function displayData(name){
	return "<h3><strong>Temperature</strong>:" + locRes.main.temp +"</h3>" +
	       "<h3><strong>Humidity</strong>:" + locRes.main.humidity +"</h3>";
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
searchForm.addEventListener("click", function(event) {
  event.preventDefault();
  // console.log(searchForm);
  var searchText = searchInput.value.trim();
  
  // Return from function early if submitted searchText is blank
  if (searchText === "") {
    return;
  }

  // Add new searchText to search array, clear the input
  searches.push(searchText);
  searchInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeSearches();
  renderSearches();
});

init()
