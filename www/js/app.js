var $ = Dom7;

var device = Framework7.getDevice();
var app = new Framework7({
  name: 'Framework7App', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element

  id: 'io.framework7.myapp', // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,

  navbar: {
    mdCenterTitle: true,
  },


  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});

var mainView = app.views.create('.view-main');
  
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');
const randomMeal = document.getElementById('randomMeal');

let urlSearch = '';

const fetchSearch = async(url) => {
	meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/${url}`)
    .then(res => res.json())
    .then(res => res.meals) 
};

const searchDisplay = async() => {
  await fetchSearch(urlSearch);

  if (meals == null){
    results.innerHTML = `<span class="noResult">No results</span>`
  }
  
  results.innerHTML = (
    
    meals.map(meal => (
            
      `
      
      `
    )).join('')
  );
};

searchInput.addEventListener('input', (e) => {
  urlSearch = `search.php?s=${e.target.value}`;
  searchDisplay();
});


// GET RANDOM MEAL
const randomMealDisplay = async() => {
  await fetchSearch('random.php');

  results.innerHTML = (
    
    meals.map(meal => (
            
      `
        <div class="randomContainer">
          <h2>${meal.strMeal}</h2>
          <div class="infos">
            <div></div>
            <div>${meal.strCategory}</div>
          </div>
          <img src='${meal.strMealThumb}' />
          <p>${meal.strInstructions}</p>
          <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
      `
    ))
  );
};

randomMeal.addEventListener('click', randomMealDisplay)
randomMealDisplay();
