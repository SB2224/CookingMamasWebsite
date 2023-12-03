
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

  if (recipesJSONTextCurrent == null) {

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

    let indexText = '{ "index" : [' +
      '{ "value": 0 } ]}';

    alert(recipesJSONText);
    alert(indexText);

    sessionStorage.setItem('recipes', recipesJSONText);
    sessionStorage.setItem('index', indexText);

  }


}

function onloadBreakfast() {

  let recipesJSONText = sessionStorage.getItem('recipes');

  const recipesJSONObject = JSON.parse(recipesJSONText);


  for (let i = 0; i < 6; i++) {
    let title = recipesJSONObject.recipes[i].recipeTitle;
    let description = recipesJSONObject.recipes[i].sdescription;

    let titleId = "rtitle" + i;
    let descriptionId = "description" + i;

    if (i === 0) {
      document.getElementById(titleId).innerText = title;
      document.getElementById(descriptionId).innerText = description;
    } else if (i === 1) {
      document.getElementById(titleId).innerText = title;
      document.getElementById(descriptionId).innerText = description;
    } else if (i === 2) {
      document.getElementById(titleId).innerText = title;
      document.getElementById(descriptionId).innerText = description;
    } else if (i === 3) {
      document.getElementById(titleId).innerText = title;
      document.getElementById(descriptionId).innerText = description;
    } else if (i === 4) {
      document.getElementById(titleId).innerText = title;
      document.getElementById(descriptionId).innerText = description;
    } else if (i === 5) {
      document.getElementById(titleId).innerText = title;
      document.getElementById(descriptionId).innerText = description;
    }
  }

}

function onclickRecipe(currentId) {

  title = document.getElementById(currentId).innerText;
  alert(title);

  let recipesJSONText = sessionStorage.getItem('recipes');
  const recipesJSONObject = JSON.parse(recipesJSONText);

  length = recipesJSONObject.recipes.length;

  alert(length);

  for (let i = 0; i < length; i++) {

    var currentTitle = recipesJSONObject.recipes[i].recipeTitle;

    if (title == currentTitle) {

      alert(i);
      let indexText = sessionStorage.getItem('index');
      const indexObject = JSON.parse(indexText);

      indexObject['index'].push({
        "value": i
      });

      indexText = JSON.stringify(indexObject);

      var newIndexText = indexText.substring(0,11) +  indexText.substring(23,indexText.length);

      alert(newIndexText);

      sessionStorage.setItem('index', newIndexText);

    }

  }

  window.location.href = "recipePage.html";


}

function onloadRecipe() {


}

function getIndex() {

  let indexText = sessionStorage.getItem('index');
  const indexObject = JSON.parse(indexText);

  let currentValue = indexObject.index[0].value;

  alert(currentValue);


}

