$(document).ready(function() {
    // Gets an optional query string from our url (i.e. ?post_id=23)
    var url = window.location.search;
    var ingredientId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;
  
    // If we have this section in our url, we pull out the post id from the url
    // In localhost:8080/cms?post_id=1, postId is 1
    if (url.indexOf("?post_id=") !== -1) {
      ingredientId = url.split("=")[1];
      getPostData(ingredientId);
    }
  
    // Getting jQuery references to the post body, title, form, and category select
    var nameInput = $("#name");
    // var cmsForm = $("#cms");
    // // Adding an event listener for when the form is submitted
    // $(cmsForm).on("submit", function handleFormSubmit(event) {
    //   event.preventDefault();
    //   // Wont submit the post if we are missing a body or a title
    //   if (!nameInput.val().trim() || !bodyInput.val().trim()) {
    //     return;
    //   }
      // Constructing a newPost object to hand to the database
      var newIngredient = {
        name: nameInput.val().trim(),
      };
  
      console.log(newIngredient);
  
      // If we're updating a post run updatePost to update a post
      // Otherwise run submitPost to create a whole new post
      if (updating) {
        newIngredient.id = ingredientId;
        updatePost(newIngredient);
      }
      else {
        submitPost(newIngredient);
      }
    });
  
    // Submits a new post and brings user to blog page upon completion
    function submitPost(Post) {
      $.post("/api/ingredient/", Post, function() {
        window.location.href = "/blog";
      });
    }
  
    // Gets post data for a post if we're editing
    function getPostData(id) {
      $.get("/api/ingredient/" + id, function(data) {
        if (data) {
          // If this post exists, prefill our cms forms with its data
          nameInput.val(data.name);
          // If we have a post with this id, set a flag for us to know to update the post
          // when we hit submit
          updating = true;
        }
      });
    }
  
    // Update a given post, bring user to the blog page when done
    function updatePost(post) {
      $.ajax({
        method: "PUT",
        url: "/api/ingredient",
        data: post
      })
        .then(function() {
          window.location.href = "/blog";
        });
    }
  
  