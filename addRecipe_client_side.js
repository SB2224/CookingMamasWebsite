var url = "http://localhost:3000/post";

function submitRecipe() {
  // 
  var recipeTitle = document.getElementById("recipeTitle").value;
  var sdescription = document.getElementById("sdescription").value;
  var mealCategory = document.querySelector('input[name="mealCategory"]:checked').value;
  var keRequirements = document.getElementById("keRequirements").value;
  var ingredients = document.getElementById("ingredients").value;
  var procedure = document.getElementById("procedure").value;

  let recipesJSONText = sessionStorage.getItem('recipes');
  const recipesJSONObject = JSON.parse(recipesJSONText);

    recipesJSONObject['recipes'].push({
      "recipeTitle": recipeTitle,
      "sdescription": sdescription,
      "mealCategory": mealCategory,
      "keRequirements": keRequirements,
      "ingredients": ingredients,
      "procedure": procedure
    });

  recipesJSONText = JSON.stringify(recipesJSONObject);

  alert(recipesJSONText);

  sessionStorage.setItem('recipes', recipesJSONText);

}

function readFromLocalStorage() {
  let textsource = localStorage.getItem('recipes');
  const obj = JSON.parse(textsource);
  let text = obj.recipes[0].recipeTitle;
  alert(text);
}

function onloadIndex() {

  let recipesJSONText = '{"recipes" : [' +
    //first recipe
    ' { "recipeTitle": "Breakfast Recipe"' +
    ' , "sdescription": "Breakfast Description"' +
    ' ,"mealCategory": "Breakfast"' +
    ' , "keRequirements": "Breakfast Requirements"' +
    ' , "ingredients": "Breakfast Ingredients"' +
    ' , "procedures": "Breakfast Procedures" }' +
    //second recipe
    ' , {"recipeTitle": "Lunch Recipe"' +
    ' , "sdescription": "Lunch Description"' +
    ' ,"mealCategory": "Lunch"' +
    ' , "keRequirements": "Lunch Requirements"' +
    ' , "ingredients": "Lunch Ingredients"' +
    ', "procedures": "Lunch Procedures" } ' +
    //third recipe
    ' , {"recipeTitle": "Dinner Recipe"' +
    ' , "sdescription": "Dinner Description"' +
    ' ,"mealCategory": "Dinner"' +
    ' , "keRequirements": "Dinner Requirements"' +
    ' , "ingredients": "Dinner Ingredients"' +
    ', "procedures": "Dinner Procedures" }  ] }';

  alert(recipesJSONText);

  sessionStorage.setItem('recipes', recipesJSONText);


}

function onloadBreakfast() {

  let recipesJSONText = sessionStorage.getItem('recipes');

  alert(recipesJSONText);

  const recipesJSONObject = JSON.parse(recipesJSONText);
  let title = recipesJSONObject.recipes[0].recipeTitle;

  document.getElementById("rtitle").innerHTML = title;

}

