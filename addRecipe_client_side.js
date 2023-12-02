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

  alert("Onload Worked!");

  let recipesJSONText = '{"recipes" : [' + 
  //first recipe
  ' { "recipeTitle": "Default1 Recipe"' +
  ' , "sdescription": "Default1 Description"' +
  ' ,"mealCategory": "Breakfast"' +
  ' , "keRequirements": "Default1 Requirements"' +
  ' , "ingredients": "Default1 Ingredients"' +
  ' , "procedures": "Default1 Procedures" }'+
  //third recipe
  ' , {"recipeTitle": "Default2 Recipe"' +
  ' , "sdescription": "Default2 Description"' +
  ' ,"mealCategory": "Lunch"' +
  ' , "keRequirements": "Default2 Requirements"' +
  ' , "ingredients": "Default2 Ingredients"' +
  ', "procedures": "Default2 Procedures" } ' +
  //second recipe
  ' , {"recipeTitle": "Default2 Recipe"' +
  ' , "sdescription": "Default2 Description"' +
  ' ,"mealCategory": "Dinner"' +
  ' , "keRequirements": "Default2 Requirements"' +
  ' , "ingredients": "Default2 Ingredients"' +
  ', "procedures": "Default2 Procedures" }  ] }';

}