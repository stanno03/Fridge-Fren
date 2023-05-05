# Fridge Fren

### Eat Great. Feel Greater!

Food should be fun. Use Fridge Fren to search for recipes using your available ingredients at home. 


=======
### User Story

```md
AS A foodie…

I WANT TO create new recipes based off what I have in my fridge
SO THAT I can save money and time
WHEN I enter an ingredient in the search bar
THEN I am presented with an array of choices (recipes) relevant to the search input
WHEN I click on one of them
THEN I am presented with the recipe instructions with all its data (cooking method, ingredients, calories, time, cuisine)
WHEN I click on the Add To Favorite
THEN the relevant recipe gets saved in my local storage 
SO THAT it can be restored at a later date
```

### Conditions 
```md
GIVEN I new a recipe to cook a meal for 
WHEN I add search input 
THEN I am presented with a list of recipe options
WHEN I select the recipe I want to explore 
THEN I am directed to the ingredients and instructions for the dish 
WHEN I select the random food facts 
THEN I am presented with a random food fact 
WHEN I like a recipe 
THEN I am able to favourite that recipe 
WHEN I want to recall my favourite recipes 
THEN I can access the favourite recipes 
WHEN I want to add the recipe to a calendar 
THEN I can add a recipe to my google calendar 
```


## To-Do/Back Log
```md
Expanding the search to use other parameters such as cost or cooking time 
Linking the meal planner to smart fridges for shopping lists 
Creating a pantry to select all user’s pantry items
Social links 
Profile creation
Tiktok API/token 
Link to nutrition tracking apps 
```


# Fridge Fren README


Fridge Fren is a web application that helps you search for recipes based on the ingredients you have in your fridge. This README file provides an overview of the project, its features, and how to set it up.

## Features

- Search for recipes based on the ingredients you have available
- View recipes and their ingredients
- Get a random food fact
- Responsive design
- Navbar with links to various pages (Home, About, Favorites, and Contact)
- Login and Signup buttons

## Technologies

- HTML
- CSS (using Tailwind CSS)
- JavaScript (using jQuery)
- Spoonacular API (to search for recipes)
- Font Awesome (for icons)

## Getting Started

To run Fridge Fren on your local machine, follow these steps:

1. Clone this repository to your local machine using `git clone`.
2. Create an account on [Spoonacular website](https://spoonacular.com/food-api) to obtain your `app_id` and `app_key` for accessing their recipe search API.
4. Replace the placeholders for `YOUR_APP_ID`, `YOUR_APP_KEY`, and `YOUR_ACCESS_KEY` in the `index.html` file with your actual `app_id`, `app_key`, and `access_key`.
5. Open the `index.html` file in your browser.

## Usage

Once you have the Fridge Fren website up and running, you can start searching for recipes based on the ingredients you have in your fridge. Simply type in the ingredients you have in the search bar and click on the "Search" button. Fridge Fren will then fetch recipes from the Spoonacular API that match your ingredients and display them on the screen.

You can click on a recipe to view its ingredients. You can also get a random food fact by clicking on the "Random Food Fact" button.

## Screenshots

### Random Fun Fact Generator

![Screen Shot 2023-05-04 at 6 29 08 pm](https://user-images.githubusercontent.com/126050763/236151778-c4093b8b-bf2a-43a5-85aa-5ad268dc909a.png)

### Search for ingredients

![Screen Shot 2023-05-04 at 6 27 59 pm](https://user-images.githubusercontent.com/126050763/236152208-261e27fc-0a28-455d-b361-08b914133b0b.png)

### Footer 
![Screen Shot 2023-05-04 at 6 28 12 pm](https://user-images.githubusercontent.com/126050763/236152068-0f51f3f1-f68e-4c51-b508-3f98bd164cd4.png)

### Local Storage
![Screen Shot 2023-05-06 at 8 23 12 am](https://user-images.githubusercontent.com/126050763/236578972-96a63ddc-838a-41e8-b823-0298219f9c3a.png)



## Credits

Fridge Fren was created by Daniel, Natalie and Freddy. It uses the following APIs and libraries:

- [Spoonacular API](https://spoonacular.com/food-api)
- [Tailwind CSS](https://tailwindcss.com/)
- [jQuery](https://jquery.com/)
- [Google Font](https://fonts.google.com/)

## License

This project is licensed under the [MIT License](LICENSE).
© 2023 Fridge Fren

