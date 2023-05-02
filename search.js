

$(".btn").on('click', function () {
// api call to spoonacular and get results of users serach.
    var searchedResults  = $("#search").val();
    var apiKey = "&apiKey=f9d4380259ef478d8d7196ce99308f41"
    var displayResults = "&number=6"
   
    var url = "https://api.spoonacular.com/recipes/complexSearch?includeIngredients=" + searchedResults + displayResults + apiKey

    fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
            // for(i = 0; i < data.length; i ++){
              var dataJSON = JSON.parse(data)
                
            // }
        console.log(dataJSON.length)
        })
    
      
    })
    .catch((error) => console.error("FETCH ERROR:", error));


// // add a listener onto each result that has been returned so if the user like the dish they can simply click and the recipe will be displayed.
// // can make the button embedded into the html
// $(".").on('click', function(){
//     window.location.href = "results.html"
//     // get the id from the selected recipe, redirect to the results page and dispplay the recipe.


//     var url = "https://api.spoonacular.com/recipes/id/analyzedInstructions?apiKey=f9d4380259ef478d8d7196ce99308f41"
// })


