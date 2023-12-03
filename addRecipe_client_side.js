
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

/*
function readFromLocalStorage() {
  let textsource = localStorage.getItem('recipes');
  const obj = JSON.parse(textsource);
  let text = obj.recipes[0].recipeTitle;
  alert(text);
}
*/

function readFromSession() {

  const recipesJSONText = sessionStorage.getItem('recipes');
  alert(recipesJSONText);

}

function onloadIndex() {

  let recipesJSONTextCurrent = sessionStorage.getItem('recipes');

  if (recipesJSONTextCurrent == null ) {

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


}

function onloadBreakfast() {

  let recipesJSONText = sessionStorage.getItem('recipes');

  const recipesJSONObject = JSON.parse(recipesJSONText);


  for (let i = 0; i < 6; i++) {
    let title = recipesJSONObject.recipes[i].recipeTitle;
    let description = recipesJSONObject.recipes[i].sdescription;


    if (i === 0) {
        document.getElementById("rtitle").innerText = title;
        document.getElementById("description").innerText = description;
    } else if (i === 1) {
        document.getElementById("rtitle1").innerText = title;
        document.getElementById("description1").innerText= description;
    } else if (i === 2) {
        document.getElementById("rtitle2").innerText = title;
        document.getElementById("description2").innerText = description;
    } else if (i === 3) {
        document.getElementById("rtitle3").innerText = title;
        document.getElementById("description3").innerText = description;
    } else if (i === 4) {
        document.getElementById("rtitle4").innerText = title;
        document.getElementById("description4").innerText = description;
    } else if (i === 5) {
      document.getElementById("rtitle5").innerText = title;
      document.getElementById("description5").innerText = description;
  }
}
  
}

