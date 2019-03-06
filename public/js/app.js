// // unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=a")
// .header("X-RapidAPI-Key", "7d31da62edmshd54e68ec02bb113p13dd0djsn14da885538d0")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

    //Sammy's Grocery add API

    // change groceryusda to spoonacular
//Sammy's Add a Shelf Section
    // $("#sortsection").on("click", function(event) {
    //     event.preventDefault();
    //     var newSection = $("#addsection").val().trim();
    //     $("#pantry").append("<ul class='sortable'>" + newSection);
    // });
    //Sammy's food API
    $("#submit").on("click", function(event) {
        event.preventDefault();
        var additem = $("#additem").val().trim();
        $("#listfood").empty();
        var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=a" + additem + ;
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            console.log(response);
            var results = response.list.item;
            for (var i = 0; i < results.length; i++) {
                var foodDiv = $("<div>");
                var list = $("<li>");
                list.html(results[i].name);
                list.attr("data-id", results[i].name);
                foodDiv.append(list);
                $("#listfood").append(foodDiv);
            };
            console.log(results)
            $("li").on("click", function(event) {
                var newFood = $(this).data("id");
                $("#pantry").append("<li class='ui-state-default'>" + newFood + "</li>");
                console.log(newFood);
            });
        });
    });
    //DOM selectors
var $recipeSearch = $("#recipeSearch"),
    $go = $("#go"),
    $recipeSearchResults = $("#recipeSearchResults"),
    $ingredients = $("#ingredients"),
    $recipeName = $("#recipeName");
    $directions = $("#directions"),
    $recipeListCard = $("#recipeListCard");
//array of recipe objects
// var myRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
//Empty object to store search results
var searchResults = {};
//ingredient counter for adding recipes
var currentIngredient = 1;

//sample pantry
var pantryArray = {
    names: ["flour", "butter", "sugar", "eggs", "baking soda", "baking powder", "salt"],
};

//function to convert a recipe to a recipe object.
function objectify(recipe) {
    //the values of our object
    var ingredientNames = [],
        name = recipe.recipe.label,
        source = recipe.recipe.source;
    //grab our ingredints in an array
    var ingredients = recipe.recipe.ingredientLines;
    //split each ingredient string into the parts for our object
    for (var i = 0; i<ingredients.length; i++) {
        ingredientNames.push(ingredients[i]);
        var ingArray = ingredients[i].split(" ");
        for (var j = 0; j<ingArray.length; j++) {
            if (parseInt(ingArray[j].charAt(0))) {
                measures.push(ingArray[j]) ; break;
                }
            if (j === ingArray.length-1) {
                measures.push(0);
                }
            }
        for (var k = 0; k < ingArray.length; k++) {
            if (unitsOfMeasure.indexOf(ingArray[k]) >= 0) {
                units.push(ingArray[k]); break;
                }
            if (k === ingArray.length - 1) {
                units.push("-----");
                }
                }
        }
    //add a url to find directions 
    var directions = "Check out the directions for this recipe at <a href = '" + recipe.recipe.url + "' target = '_/blank'>" + recipe.recipe.url + "</a>";
    //then create a new object with the constructed values
    var recipeObject = {
        name: name,
        ingredients: ingredientNames,
        directions: directions,
        source: source
        };
    return recipeObject;
};

//function to display the label of a search result.
function displayResult(object) {
    $recipeSearchResults.append("<button class = 'button btn-light expandButton resultButton' type = button data-toggle='collapse' id='result" + searchResults.hits.indexOf(object) +"' aria-expanded='false' aria-controls='result" + searchResults.hits.indexOf(object) +"'>" +
                                    object.recipe.label +
                                "</button>" +
                                "<div class = 'collapse resultCollapse' id = 'collapse-result" + searchResults.hits.indexOf(object) +"'>" +
                                    "<div class = 'card card-body'>" +
                                        "<a href = " + object.recipe.url + " target = '_/blank'>Source: " + object.recipe.source + "</a>" +
                                        "<img src = '" + object.recipe.image + "' alt = recipePic>" + 
                                        "<button class = 'button btn-success searchResultAddButton' id = " + searchResults.hits.indexOf(object) + ">Add to My Recipes</button>" +
                                    "</div>" +
                                "</div>"
                            )
};

//click event listener for search button
$go.click(function(event){
    event.preventDefault(); 
    var queryURL = "https://api.edamam.com/search?q="+ $recipeSearch.val().trim() +"&app_id=604fe6ae&app_key=04fae8d1362d3d0b9a9eade3d98b4b49";
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
        $recipeSearch.val("");    
});

//function to allow dynamically-created collapses to display
$(document).on("click", ".resultButton", function(event){
    var target = "collapse-" + event.currentTarget.id;
    $("#" + target).collapse("toggle");
    
});

//click listener for the clear button
$(document).on("click", ".clearButton", function(event){
    $recipeSearchResults.empty();
})