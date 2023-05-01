//*Constants 
// check for dupicates and align with other code 

const apiKey = 'spoonacular api'; //!should already have this from the search page, will need to align 
const input = document.getElementById("ingredients-input").value; //! OR 
const form = document.querySelector('#recipe-search-form');
const resultsDiv = document.querySelector('#recipe-results'); 
const favouritesDiv = document.querySelector('#favourites');

//*Results page 
//form.addEventListener('submit', (event) => {
//  event.preventDefault();
//  const searchQuery = document.querySelector('#search-query').value;
//  const cuisine = document.querySelector('#cuisine').value;
const apiUrl = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${searchQuery}&cuisine=${cuisine}`;
  fetch(apiUrl)
    .then(data => {
      resultsDiv.innerHTML = ''; //! Clear previous results DO WE WANT THIS? local data req 
      data.results.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        const image = document.createElement('img');
        image.src = recipe.image;
        const name = document.createElement('h3');
        name.textContent = recipe.title;
        const link = document.createElement('a');
        link.href = `https://spoonacular.com/recipes/${recipe.id}`; //! local storage 
        link.textContent = 'View Recipe';
        recipeDiv.appendChild(image);
        recipeDiv.appendChild(name);
        recipeDiv.appendChild(link);
        resultsDiv.appendChild(recipeDiv);  
      });
});

//* Favourites button 
// can dupicate for meal planner using "meal planner"
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

//* TikTok 
const tiktokApiUrl = 'https://api.tiktok.com';
const tiktokUserId = 'https://www.tiktok.com/@thomas_straker?lang=en'; 
const tiktokVideoId = 'https://www.tiktok.com/@thomas_straker/video/7148129145380293894?is_from_webapp=1&sender_device=pc&web_id=7225539507657999874';

// copied from the embed function within tiktok
// need to format 

<blockquote class="tiktok-embed" 
  cite="https://www.tiktok.com/@thomas_straker/video/7148129145380293894" 
  data-video-id="7148129145380293894" 
  style="max-width: 605px;min-width: 325px;" > 

  <section> 
    <a target="_blank" title="@thomas_straker" href="https://www.tiktok.com/@thomas_straker?refer=embed">@thomas_straker</a> 
    Spaghetti meatballs. A classic  All ingredients on @gorillasapp.uk  fantastic quality beef mince from HG Walter.  
    <a title="gorillasapp" target="_blank" href="https://www.tiktok.com/tag/gorillasapp?refer=embed">#GorillasApp</a> 
    <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> 
    <a title="foryourpage" target="_blank" href="https://www.tiktok.com/tag/foryourpage?refer=embed">#ForYourPage</a> 
    <a title="foodtok" target="_blank" href="https://www.tiktok.com/tag/foodtok?refer=embed">#FoodTok</a> 
    <a target="_blank" title="♬ original sound - Thomas Straker" href="https://www.tiktok.com/music/original-sound-7148129180256455429?refer=embed">♬ original sound - Thomas Straker</a> 
  </section> 

</blockquote> 

<script async src="https://www.tiktok.com/embed.js"></script>

