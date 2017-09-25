const unirest = require('unirest');

const search = {
  getRecipes: (req, res) => {
    let ingredients = req.body.ingredients;

    unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients"
                  + "ingredients=" + indgredients.join('%2C') + '&fillIngredients=false'
                  + "&limitLicense=false" + "&number=9" + "&ranking=1")
            .header("X-Mashape-Key", "g6z82G1ppXmshm8kdiFNBBj6a5WJp1RrdbQjsnE32l3FYee4eC")
            .header("Accept", "application/json")
            .end((result) => {
              console.log('Headers: ', result.headers);
              res.send(result.body);
            });
  }
}

module.exports = search;