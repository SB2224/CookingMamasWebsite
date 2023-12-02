var url = "http://localhost:3000/post";

function submitRecipe() {
  // 
  var recipeTitle = document.getElementById("recipeTitle").value;
  var sdescription = document.getElementById("sdescription").value;
  var mealCategory = document.querySelector('input[name="mealCategory"]:checked').value;
  var keRequirements = document.getElementById("keRequirements").value;
  var ingredients = document.getElementById("ingredients").value;
  var procedure = document.getElementById("procedure").value;



  //let pumpkinPie = '{"pumpkin pie" : [' + ' { "recipeTitle": recipeTitle , "sdescription": sdescription,"mealCategory": mealCategory , "keRequirements": keRequirements , "ingredients": ingredients , "procedures": procedure } ] }' ;




  alert(recipes);
  localStorage.setItem('recipes' , recipes);


}

function readFromLocalStorage() {
  let textsource = localStorage.getItem('recipes');
  const obj = JSON.parse(textsource);
  let text = obj.recipes[0].recipeTitle;
  alert(text);
}

function onload() {

  let recipesJSONText = '{"recipes" : [' + 
  //first recipe
  ' { "recipeTitle": "Breakfast Recipe"' +
  ' , "sdescription": "Breakfast Description"' +
  ' ,"mealCategory": "Breakfast"' +
  ' , "keRequirements": "Breakfast Requirements"' +
  ' , "ingredients": "Breakfast Ingredients"' +
  ' , "procedures": "Breakfast Procedures" }'+
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