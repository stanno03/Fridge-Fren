
//! ## WORKING CODE ##
let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};

var apiKey = "&apiKey=f9d4380259ef478d8d7196ce99308f41";

// 




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









//! ### OLD CODE ###
// $("#btn").on("click", function () {
//   // api call to spoonacular and get results of users serach.
//   var searchedResults = $("#search").val();
//   var apiKey = "&apiKey=f9d4380259ef478d8d7196ce99308f41";
//   var displayResults = "&number=6";

//   var url =
//     "https://api.spoonacular.com/recipes/complexSearch?includeIngredients=" +
//     searchedResults +
//     displayResults +
//     apiKey;

//   fetch(url)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("NETWORK RESPONSE ERROR");
//       }
//     })
//     .then((data) => {
//       for (i = 0; i < 6; i++) {
//         var recipeTitle = data.results[i].title;
//         var recipeImage = data.results[i].image;
//         var recipeId = data.results[i].id;
//       }
//       console.log(data);
//     })

//     .catch((error) => console.error("FETCH ERROR:", error));
// });

// // // add a listener onto each result that has been returned so if the user like the dish they can simply click and the recipe will be displayed.
// // // can make the button embedded into the html
// // $(".").on('click', function(){
// //     window.location.href = "results.html"
// //     // get the id from the selected recipe, redirect to the results page and dispplay the recipe.

// //     var url = "https://api.spoonacular.com/recipes/id/analyzedInstructions?apiKey=f9d4380259ef478d8d7196ce99308f41"
// // })
