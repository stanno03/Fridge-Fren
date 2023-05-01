
var url = "https://api.spoonacular.com/recipes/complexSearch?includeIngredients="

// use jquery to select box
var  chicken = $('steak').checked
var  chicken = $('fish').checked
var  chicken = $('chicken').checked
var  cheese = $('cheese').checked
var  flour = $('flour').checked
var  sugar = $('sugar').checked
var  sugar = $('salt').checked


// iterate for each box checked and if checked or 'true' add that value to the URL 
    if(steak){
    var url = url + 'steak'
    }
    if(fish){
    var url = url + ',fish'
    }
    if(chicken){
    var url = url + ',chicken'
    }
    if(cheese){
    var url = url + ',cheese'
    }
    if(flour){
    var url = url + ',flour'
        }
    if(sugar){
    var url = url + ',sugar'
        }
    if(salt){
    var url = url + ',salt'
        }
// api call to spoonacular for receipe
$('search').on('click', function(){
    $.ajax({
        URL: url,
        Type: GET,
        headers:{         
            'Authorization' : f9d4380259ef478d8d7196ce99308f41,
        },
    success(results){
        $(this).results = JSON.parse(results)
        // need to dynamically update this use the array index for each returned item 
        $('').append();
        var recipeName = results.title;
        var recipePhoto = results.image;
        var recipePhotoFileExtension = results.imageType;
    }

    })

})

$(document).ready(function(){

// function to save a recipe to favourites using local storage
$('favourites').on('click', function(){
var recipeID = $this.
var 
// use jquery to select the recipe, save the name (id) that matches the api 
            localStorage.setItem('c ')
    })
});

// display the favourites stored in local storage
$("favourites1").val(localStorage.getItem(""));
$("favourites2").val(localStorage.getItem(""));
$("favourites3").val(localStorage.getItem(""));
$("favourites4").val(localStorage.getItem(""));
$("favourites5").val(localStorage.getItem(""));

