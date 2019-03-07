// Javascript
var unirest = require('unirest');

unirest.post(API_URL)
  .header("X-RapidAPI-Key", 55e96f404dmsh7344bda43019e81p13f978jsn758e4a5b3869)
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });

// Uploading FIles
unirest.post(API_URL)
  .header("X-RapidAPI-Key", API_KEY)
  .header({'Content-Type': 'multipart/form-data'})
  .field('parameter', 'value') // Form field
  .attach('file', '/path/to/file') // Attachment
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });

//   GET

unirest.get(API_URL)
  .header("X-RapidAPI-Key", API_KEY)
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });

//   PUT
unirest.put(API_URL)
  .header("X-RapidAPI-Key", API_KEY)
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });

//   POST
unirest.post(API_URL)
  .header("X-RapidAPI-Key", API_KEY)
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });

//   PATCH
unirest.patch(API_URL)
  .header("X-RapidAPI-Key", API_KEY)
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });

//   DELETE
unirest.delete(API_URL)
  .header("X-RapidAPI-Key", API_KEY)
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });
  

  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=apples%2Cflour%2Csugar")
.header("X-RapidAPI-Key", "55e96f404dmsh7344bda43019e81p13f978jsn758e4a5b3869")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});