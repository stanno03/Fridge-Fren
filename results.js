//*Constants 
// check for dupicates and align with other code 

const apiKey = 'spoonacular api'; //!should already have this from the search page, will need to align 
const input = document.getElementById("ingredients-input").value; //! OR 
const form = document.querySelector('#recipe-search-form');
const resultsDiv = document.querySelector('#recipe-results'); 
const favouritesDiv = document.querySelector('#favourites');
const mealPlannerDiv = document.querySelector('#mealPlanner');

//*recipe title 
let recipeTitle = "Recipe Title";

document.querySelector('h1').textContent = `Yum! You are having ${recipeTitle}`;

//*Results page 
//recipeID , pull that into //! TRIGGER ID 

GET https://api.spoonacular.com/recipes/{id}/information/card //! TRIGGER ID /card to get 

// GET https://api.spoonacular.com/recipes/716429/information?includereadyInMinutes=true //! TRIGGER ID 

// form.addEventListener('submit', (event) => {
//  event.preventDefault();
//  const searchQuery = document.querySelector('#search-query').value;
//  const cuisine = document.querySelector('#cuisine').value;

//Dont need anymore
// let apiUrl = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${searchQuery}&cuisine=${cuisine}`; //! results page
//   fetch(apiUrl)
//     .then(data => {
//       resultsDiv.innerHTML = ''; //! Clear previous results DO WE WANT THIS? local data req 
//       data.results.forEach(recipe => {
//         const recipeDiv = document.createElement('div');
//         const image = document.createElement('img');
//         image.src = recipe.image;
//         const name = document.createElement('h3');
//         name.textContent = recipe.title;
//         const link = document.createElement('a');
//         link.href = `https://spoonacular.com/recipes/${recipe.id}`; //! local storage 
//         link.textContent = 'View Recipe';
//         recipeDiv.appendChild(image);
//         recipeDiv.appendChild(name);
//         recipeDiv.appendChild(link);
//         resultsDiv.appendChild(recipeDiv);  
//       });
// });

//* Star Icon 
// import { StarIcon } from "@heroicons@1.0.6/24/outline";
// <StarIcon class="h-6 w-6 text-gray-500" />

// <svg 
//   fill="none" 
//   stroke="currentColor" 
//   stroke-width="1.5" 
//   viewBox="0 0 24 24" 
//   xmlns="http://www.w3.org/2000/svg" 
//   aria-hidden="true">
//   <path 
//   stroke-linecap="round" 
//   stroke-linejoin="round" 
//   d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
// </svg>

//* Favourites button
const favouriteBtn = document.createElement('button');
favouriteBtn.textContent = 'Add to Favourites';
recipeDiv.appendChild(favouriteBtn);

favouriteBtn.addEventListener('click', () => {
  const favourites = JSON.parse(localStorage.getItem('favorites')) || [];
  favourites.push(recipe);
  localStorage.setItem('favourites', JSON.stringify(favourites));
  alert('Recipe added to Favourites!');
});

window.addEventListener('load', () => {
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  favourites.forEach(recipe => {
    const recipeDiv = document.createElement('div');
    favouritesDiv.appendChild(recipeDiv);
  });
});

//* Meal Planner button 
const mealPlannerBtn = document.createElement('button');
mealPlannerBtn.textContent = 'Add to Favourites';
recipeDiv.appendChild(mealPlannerBtn);

mealPlannerBtn.addEventListener('click', () => {
  const mealPlanner = JSON.parse(localStorage.getItem('mealPlanner')) || [];
  mealPlanner.push(recipe);
  localStorage.setItem('mealPlanner', JSON.stringify(mealPlanner));
  alert('Recipe added to Meal Planner');
});

window.addEventListener('load', () => {
  const mealPlanner = JSON.parse(localStorage.getItem('mealPlanner')) || [];
  mealPlanner.forEach(recipe => {
    const recipeDiv = document.createElement('div');
    mealPlannerDiv.appendChild(recipeDiv);
  });
});

//* TikTok 
const tiktokApiUrl = 'https://api.tiktok.com';
const tiktokUserId = 'https://www.tiktok.com/@thomas_straker?lang=en'; 
const tiktokVideoId = 'https://www.tiktok.com/@thomas_straker/video/7148129145380293894?is_from_webapp=1&sender_device=pc&web_id=7225539507657999874';

//* Search again
<button onclick="window.location.href='index.html'">Search again</button> 

