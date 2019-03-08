var queryURL = "https://api.edamam.com/search?app_id=f9f1544e&app_key=b4cfa069d95061e8028377fb6e951c1b&from=0&to=6&time=20&q=chicken+cheese+eggs&ingr=5";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {



        console.log(response);

        //console.log(hits.0.recipe.ingredients)
        });