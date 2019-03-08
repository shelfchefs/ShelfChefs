//DOM selectors
var $recipeSearch = $("#recipeSearch"),
    $go = $("#go"),
    $recipeSearchResults = $("#recipeSearchResults"),
    $ingredients = $("#ingredients"),
    $recipeName = $("#recipeName");
    $directions = $("#directions"),
    $addRecipe = $("#addRecipe"),
    $recipeListCard = $("#recipeListCard");
//array of recipe objects
var myRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
//Empty object to store search results
var searchResults = {};

//click event listener for search button
$recipeSearch.click(function(event){
    event.preventDefault(); 
    var queryURL = "https://api.edamam.com/search?app_id=f9f1544e&app_key=b4cfa069d95061e8028377fb6e951c1b&from=0&to=6&time=20&q=chicken+cheese+eggs&ingr=5";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        searchResults = response;
        console.log(searchResults);
        $recipeSearchResults.empty();
        searchResults.hits.map(displayResult);
        $recipeSearchResults.append(
            "<button class = 'btn btn-danger clearButton expandButton'>Clear Search Results</button>"
        );
        });
});


// //function to allow dynamically-created collapses to display
// $(document).on("click", ".resultButton", function(event){
//     var target = "collapse-" + event.currentTarget.id;
//     $("#" + target).collapse("toggle");
// });

//click listener for the clear button
$(document).on("click", ".clearButton", function(event){
    $recipeSearchResults.empty();
})

//click listener for the delete recipe button
$(document).on("click", ".deleteRecipe", function(event) {
    var itemVal = parseInt(event.currentTarget.id.substr(6));
    myRecipes.splice(itemVal, 1);
    $recipeListCard.empty();
    for (var i = 0; i < myRecipes.length; i++){
        displayRecipe(myRecipes[i], i);
    }
});

//function to initialize my recipes on load
$(document).ready(function(){
    for (var i = 0; i < myRecipes.length; i++){
        displayRecipe(myRecipes[i], i);
    }
});