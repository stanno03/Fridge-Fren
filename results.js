//* Constants 
// check for duplicates and align with other code 

const apiKey = '2ed4848d16c84d098d824814d9041a94';
const resultsDiv = document.querySelector('#recipe-results'); 
const favouritesDiv = document.querySelector('#favourites');
const mealPlannerDiv = document.querySelector('#mealPlanner');

//* Recipe title 
let recipeTitle = "Recipe Title";
const recipeTitleElem = document.querySelector('h1');

recipeTitleElem.textContent = `Yum! You are having ${recipeTitle}`;

//* Results page 
const urlParams = new URLSearchParams(window.location.search); //! need to align
const id = urlParams.get('id');

fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const title = data.title;
    const imageUrl = data.image;
    const calories = data.nutrition.nutrients.find(nutrient => nutrient.title === "Calories").amount;
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('item', 'w-screen', 'bg-cover', 'flex-1', 'max-w-fit', 'rounded-lg', 'bg-green-300', 'p-3.5', 'overflow-hidden');
    resultsDiv.appendChild(recipeDiv);
    
    const img = document.createElement('img');
    img.classList.add('w-full', 'h-72', 'rounded');
    img.src = imageUrl;
    recipeDiv.appendChild(img);
    
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('flex', 'items-center', 'justify-between');
    recipeDiv.appendChild(titleDiv);
    
    const titleHeading = document.createElement('h1');
    titleHeading.classList.add('title', 'text-blue-900', 'mt-1.25', 'ml-2.5', 'text-xl');
    titleHeading.textContent = title;
    titleDiv.appendChild(titleHeading);
    
    const viewButton = document.createElement('a');
    viewButton.classList.add('view-button', 'text-center', 'w-32', 'pt-4', 'py-0', 'bg-green-400', 'text-sm', 'no-underline', 'mt-8', 'self-start');
    viewButton.href = `recipe.html?id=${id}`;
    viewButton.textContent = 'View Recipe';
    titleDiv.appendChild(viewButton);
    
    const caloriesParagraph = document.createElement('p');
    caloriesParagraph.classList.add('item-data', 'block', 'mt-3', 'text-sm');
    caloriesParagraph.textContent = `Calories: ${calories}`;
    recipeDiv.appendChild(caloriesParagraph);
    
    const favouriteBtn = document.createElement('button');
    favouriteBtn.textContent = 'Add to Favourites';
    favouriteBtn.addEventListener('click', () => {
      const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
      favourites.push(data);
      localStorage.setItem('favourites', JSON.stringify(favourites));
    });
    recipeDiv.appendChild(favouriteBtn);
    
    const mealPlannerBtn = document.createElement('button');
    mealPlannerBtn.textContent = 'Add to Meal Planner';
    mealPlannerBtn.addEventListener('click', () => {
      const mealPlanner = JSON.parse(localStorage.getItem('mealPlanner')) || [];
      mealPlanner.push(data);
      localStorage.setItem('mealPlanner', JSON.stringify(mealPlanner));
    });
    recipeDiv.appendChild(mealPlannerBtn);
  })
  .catch(error => console.error(error));
    
    const favouriteBtn = document.createElement('button');
    favouriteBtn.textContent = 'Add to Favourites';
    favouriteBtn.addEventListener('click', () => {
      const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
      favourites.push(data);
      localStorage.setItem('favourites', JSON.stringify(favourites));
    });
    recipeDiv.appendChild(favouriteBtn);
    
    const mealPlannerBtn = document.createElement('button');
    mealPlannerBtn.textContent = 'Add to Meal Planner';
    mealPlannerBtn.addEventListener('click', () => {
      const mealPlanner = JSON.parse(localStorage.getItem('mealPlanner')) || [];
      mealPlanner.push(data);
      localStorage.setItem('mealPlanner', JSON.stringify(mealPlanner));
    });
    recipeDiv.appendChild(mealPlannerBtn);

//* Favourites 
window.addEventListener('load', () => {
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  favourites.forEach(recipe => {
    const recipeDiv = document.createElement('div');
    
    const img = document.createElement('img');
    img.src = recipe.image;
    recipeDiv.appendChild(img);
    
    const titleDiv = document.createElement('div');
    titleDiv.textContent = recipe.title;
    recipeDiv.appendChild(titleDiv);

    favouritesDiv.appendChild(recipeDiv);
  });
});

//* TikTok 
const tiktokApiUrl = 'https://api.tiktok.com';
const tiktokUserId = 'https://www.tiktok.com/@thomas_straker?lang=en'; 
const tiktokVideoId = 'https://www.tiktok.com/@thomas_straker/video/7148129145380293894?is_from_webapp=1&sender_device=pc&web_id=7225539507657999874';

const tiktokEmbedHtml = `
  <iframe
    src="${tiktokVideoId}"
    width="640"
    height="360"
    frameborder="0"
    allowfullscreen>
  </iframe>
`;

const resultsContainer = document.querySelector('#tiktok-embed-container');
resultsContainer.innerHTML = tiktokEmbedHtml;

//* Search again
const searchAgainButton = document.createElement('button');
searchAgainButton.textContent = 'Search again';
searchAgainButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

const searchAgainDiv = document.querySelector('#search-again');
searchAgainDiv.appendChild(searchAgainButton);
