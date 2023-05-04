//! ## WORKING CODE ##
let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};

var apiKey = "&apiKey=f9d4380259ef478d8d7196ce99308f41";

$(document).ready(function() {
  $.get("https://api.spoonacular.com/recipes/search?random&number=6&apiKey=f9d4380259ef478d8d7196ce99308f41", function(data) {
    // empty the search results div
    $(".search-results").empty();
    
    // loop through the search results and display them in the search results div
    for (var i = 0; i < data.results.length; i++) {
      var result = data.results[i];
      var item = '<div class="item w-screen bg-cover flex-1 max-w-fit rounded-lg bg-green-300 p-3.5 overflow-hidden">' +
        '<img class="w-full h-72 rounded" src="https://spoonacular.com/recipeImages/' + result.image + '" alt="' + result.title + '">' +
        '<div class="flex items-center justify-between">' +
          '<h1 class="title text-blue-900 mt-1.25 ml-2.5 text-xl">' + result.title + '</h1>' +
          '<a class="rounded-full view-button text-center w-32 pt-4 py-0 bg-green-400 text-sm no-underline mt-8 self-start;" href="' + result.sourceUrl + '">View Recipe</a>' +
        '</div>' +
        '<a class="rounded-full view-button text-center w-32 pt-4 py-0 bg-green-400 text-sm no-underline mt-8 self-start;" href="' + result.sourceUrl + '">View Recipe</a>' +
        '</div>' 
      $(".search-results").append(item);
    }
  })

  // function to search for recipes
  function searchRecipes() {
    // get the search query from the input field
    var query = $("#search").val();
    
    // make a GET request to the Spoonacular API with the search query
    $.get("https://api.spoonacular.com/recipes/search?&number=6" + apiKey + "&query=" + query, function(data) {
      // empty the search results div
      $(".search-results").empty();
      
      // loop through the search results and display them in the search results div
      for (var i = 0; i < data.results.length; i++) {
        var result = data.results[i];
        var item = '<div class="item w-screen bg-cover flex-1 max-w-fit rounded-lg bg-green-300 p-3.5 overflow-hidden">' +
          '<img class="w-full h-72 rounded" src="https://spoonacular.com/recipeImages/' + result.image + '" alt="' + result.title + '">' +
          '<div class="flex items-center justify-between">' +
            '<h1 class="title text-blue-900 mt-1.25 ml-2.5 text-xl">' + result.title + '</h1>' +
            '<a class="view-button text-center w-32 pt-4 py-0 bg-green-400 text-sm no-underline mt-8 self-start" href="' + result.sourceUrl + '">View Recipe</a>' +
          '</div>' +
          '<p class="item-data block mt-3 text-sm">Calories: ' + result.calories + '</p>' +
        '</div>';
        $(".search-results").append(item);
      }
    });
  }
  
  // bind the search function to the search button
  $("#btn").click(function() {
  //  var url = "https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=f9d4380259ef478d8d7196ce99308f41"

    searchRecipes();
  });
  
  // bind the search function to the enter key
  $("#search").keypress(function(event) {
    if (event.which == 13) {
      searchRecipes();
    }

    $("#foodfact").on('click', function(){
      $.ajax({
        async: false,
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/facts?limit=1',
        headers: { 'x-api-key': 'MnwIvd3jpy3FJQnXtFKRjA==cB7H5HsSlg1CxnDF'},
        
        success: function(result) {
          window.alert(result)
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });


    })
  });
});

//! Modal function
// Get the modal
const modal = document.getElementById("foodFactModal");

// Get the button that opens the modal
const button = document.getElementById("foodfact");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Array of food facts
const foodFacts = [
  "The world's largest pancake was made in Rochdale, Manchester, UK in 1994, which measured 15 meters in diameter and weighed 3 tons.",
  "Apples float in water because they are 25% air.",
  "Eating cheese before bed can give you nightmares.",
  "Honey never spoils - it has an indefinite shelf life.",
  "The most expensive pizza in the world costs $12,000 and is topped with white truffles, 24-karat gold flakes, and caviar.",
  "In ancient Rome, it was considered a sign of leadership to be the first to start eating at a banquet.",
  "The fear of cooking is called mageirocophobia.",
  "The world's largest gingerbread house was over 2,500 square feet.",
  "There is a species of mushroom that tastes like chicken and is aptly named 'chicken of the woods'.",
  "Peanuts aren't technically nuts, they're legumes.",
  "The 'butterfly' in 'butterfly shrimp' refers to the shape of the meat after it has been butterflied, not the species of shrimp.",
  "Popsicles were invented by an 11-year-old boy.",
  "The world's most expensive pizza costs $12,000.",
  "Apples are more effective at keeping people awake in the morning than caffeine.",
];

// Function to display a random food fact in the modal
function displayFoodFact() {
  // Get a random food fact from the array by using the Math.random function
  const randomFact = foodFacts[Math.floor(Math.random() * foodFacts.length)];

  // Display the food fact in the modal
  document.getElementById("food-fact").innerHTML = randomFact;

  // Open the modal by traversing the DOM
  modal.style.display = "block";
}

// Add event listener (when the user clicks the button, display a random food fact)
button.addEventListener("click", displayFoodFact);

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function() {
  modal.style.display = "none";
});

/* exported gapiLoaded */
      /* exported gisLoaded */
      /* exported handleAuthClick */
      /* exported handleSignoutClick */

      // TODO(developer): Set to client ID and API key from the Developer Console
      const CLIENT_ID = '<YOUR_CLIENT_ID>';
      const API_KEY = '<YOUR_API_KEY>';

      // Discovery doc URL for APIs used by the quickstart
      const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

      let tokenClient;
      let gapiInited = false;
      let gisInited = false;

      document.getElementById('authorize_button').style.visibility = 'hidden';
      document.getElementById('signout_button').style.visibility = 'hidden';

      /**
       * Callback after api.js is loaded.
       */
      function gapiLoaded() {
        gapi.load('client', initializeGapiClient);
      }

      /**
       * Callback after the API client is loaded. Loads the
       * discovery doc to initialize the API.
       */
      async function initializeGapiClient() {
        await gapi.client.init({
          apiKey: API_KEY,
          discoveryDocs: [DISCOVERY_DOC],
        });
        gapiInited = true;
        maybeEnableButtons();
      }

      /**
       * Callback after Google Identity Services are loaded.
       */
      function gisLoaded() {
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: '', // defined later
        });
        gisInited = true;
        maybeEnableButtons();
      }

      /**
       * Enables user interaction after all libraries are loaded.
       */
      function maybeEnableButtons() {
        if (gapiInited && gisInited) {
          document.getElementById('authorize_button').style.visibility = 'visible';
        }
      }

      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick() {
        tokenClient.callback = async (resp) => {
          if (resp.error !== undefined) {
            throw (resp);
          }
          document.getElementById('signout_button').style.visibility = 'visible';
          document.getElementById('authorize_button').innerText = 'Refresh';
          await listUpcomingEvents();
        };

        if (gapi.client.getToken() === null) {
          // Prompt the user to select a Google Account and ask for consent to share their data
          // when establishing a new session.
          tokenClient.requestAccessToken({prompt: 'consent'});
        } else {
          // Skip display of account chooser and consent dialog for an existing session.
          tokenClient.requestAccessToken({prompt: ''});
        }
      }

      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick() {
        const token = gapi.client.getToken();
        if (token !== null) {
          google.accounts.oauth2.revoke(token.access_token);
          gapi.client.setToken('');
          document.getElementById('content').innerText = '';
          document.getElementById('authorize_button').innerText = 'Authorize';
          document.getElementById('signout_button').style.visibility = 'hidden';
        }
      }

      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */
      async function listUpcomingEvents() {
        let response;
        try {
          const request = {
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime',
          };
          response = await gapi.client.calendar.events.list(request);
        } catch (err) {
          document.getElementById('content').innerText = err.message;
          return;
        }

        const events = response.result.items;
        if (!events || events.length == 0) {
          document.getElementById('content').innerText = 'No events found.';
          return;
        }
        // Flatten to string to display
        const output = events.reduce(
            (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
            'Events:\n');
        document.getElementById('content').innerText = output;
      }
