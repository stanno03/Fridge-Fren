
var url = "https://api.spoonacular.com/recipes/complexSearch?"

// use jquery to select box
var  cheese = $('cheese').checked
var  flour = $('flour').checked
var  sugar = $('sugar').checked
var  = $('').checked

// iterate for each box checked and if checked or 'true' add that value to the URL 
    if(cheese){
    var url = url + ''
    }
    if(flour){
    var url = url + ''
        }
    if(sugar){
    var url = url + ''
        }
    
// api call to spoonacular for receipe

$('').on('submit',({
    $.ajax({
        URL: url,
        Type: GET,
    })
})



$(document).ready(function(){

// function to save a recipe to favourites using local storage
$('favourites').on('click', function(){
// use jquery to select the recipe, save the name (id) that matches the api 

    })
});
// display the favourites stored in local storage
$("").val(localStorage.getItem(""));
$("").val(localStorage.getItem(""));
$("").val(localStorage.getItem(""));
$("").val(localStorage.getItem(""));
$("").val(localStorage.getItem(""));

