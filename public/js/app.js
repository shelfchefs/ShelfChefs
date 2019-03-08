
    $(document).ready(function () {
        $recipeSearch = $("#recipeSearch"),
        $go = $("#go"),
        $clearButton = $("#clearButton"),
        $recipeListCard = $("#recipeListCard");

//function to display the label of a search result.
function displayResult(object) {
    $recipeSearchResults.append("<div class='l-content' >" +
                                    "<div class='pricing-tables pure-g' > "+  
                                        "<div class='pure-u-1 pure-u-md-1-3' id='result' >" + 
                                            "<div class='pricing-table pricing-table-free' >" +
                                                "<div class='v'"+
                                            searchResults.hits.indexOf(object) +"' aria-expanded='false' aria-controls='result" + searchResults.hits.indexOf(object) +"'>" +
                                    object.recipe.label +
                                    "</div>" + 
                                    "</div>" + 
                                    "</div>" + 
                                "</div>" +   
                                "</div>" +
                                // "<div class = 'collapse resultCollapse' id = 'collapse-result" + searchResults.hits.indexOf(object) +"'>" +
                                   
                                         +
                                         "<div class = 'card card-body'>" +
                                         "<a href = " + object.recipe.url + " target = '_/blank'>Take me to recipe! " +
                                     "</div>" +
                                "</div>"
                            )
};


//click event listener for search button
$go.click(function(event){
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
            "<button id = 'clearButton' class = 'pure-button'>Clear Search Results</button>"
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
$(document).on("click", $.clearButton, function(event){
    $recipeSearchResults.empty();
});

});