
function submitRecipe() {
  // 
  var recipeTitle = document.getElementById("recipeTitle").value;
  var sdescription = document.getElementById("sdescription").value;
  var mealCategory = document.querySelector('input[name="mealCategory"]:checked').value;
  var keRequirements = document.getElementById("keRequirements").value;
  var ingredients = document.getElementById("ingredients").value;
  var procedures = document.getElementById("procedure").value;

  let recipesJSONText = sessionStorage.getItem('recipes');
  const recipesJSONObject = JSON.parse(recipesJSONText);

  recipesJSONObject['recipes'].push({
    "recipeTitle": recipeTitle,
    "sdescription": sdescription,
    "mealCategory": mealCategory,
    "keRequirements": keRequirements,
    "ingredients": ingredients,
    "procedures": procedures
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
      ' { "recipeTitle": "Pancakes"' +
      ' , "sdescription": "Fluffy batter baked in a flat pan."' +
      ' ,"mealCategory": "Breakfast"' +
      ' , "keRequirements": "Frying Pan <br>Measuring Cups <br>Mixing Bowls <br>Spatula <br>Stove"' +
      ' , "ingredients": "Flour (2 Cups) <br>White Sugar (1/4 Cup) <br>Baking Powder (4 Teaspoons) <br>Baking Soda (1/4 Teaspoon) <br>Salt (1/2 Teaspoon) <br>Milk (1 3/4 Cups) <br>Butter (1/4 Cup) <br>Pure Vanilla Extract (2 Teaspoons) <br>One Large Egg"' +
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
  length = recipesJSONObject.recipes.length;
  var j = 0;

  // for the title and description to show on meal page
  for (let i = 0; i < length; i++) {
    let title = recipesJSONObject.recipes[i].recipeTitle;
    let description = recipesJSONObject.recipes[i].sdescription;
    let meal = recipesJSONObject.recipes[i].mealCategory;

    if (meal == "Breakfast") {

      let titleId = "rtitle" + j;
      let descriptionId = "description" + j;

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

    j++;
      
      /*
      // checks if the blue divs has text value in it. if none it stays hidden
      let indiv = "individual" + i;
  
      var myDiv = document.getElementByClass(indiv);
  
      var currentTitle = document.getElementById(titleId).innerText;
      
      if (currentTitle === " ") {
        myDiv.style.display = "none";
      } 
    */
    
    
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

      var newIndexText = indexText.substring(0, 11) + indexText.substring(23, indexText.length);

      alert(newIndexText);

      sessionStorage.setItem('index', newIndexText);

    }

  }

  window.location.href = "recipePage.html";


}

function onloadRecipe() {

  let indexText = sessionStorage.getItem('index');
  const indexObject = JSON.parse(indexText);
  let currentValue = indexObject.index[0].value;

  let recipesJSONText = sessionStorage.getItem('recipes');
  const recipesJSONObject = JSON.parse(recipesJSONText);
  let recipeTitle = recipesJSONObject.recipes[currentValue].recipeTitle;
  let sdescription = recipesJSONObject.recipes[currentValue].sdescription;
  let keRequirements = recipesJSONObject.recipes[currentValue].keRequirements;
  let ingredients = recipesJSONObject.recipes[currentValue].ingredients;
  let procedures = recipesJSONObject.recipes[currentValue].procedures;

  document.getElementById("recipeTitle").innerHTML = recipeTitle;
  document.getElementById("sdescription").innerHTML = sdescription;
  document.getElementById("keRequirements").innerHTML = keRequirements;
  document.getElementById("ingredients").innerHTML = ingredients;
  document.getElementById("procedures").innerHTML = procedures;

}

function getIndex() {

  let indexText = sessionStorage.getItem('index');
  const indexObject = JSON.parse(indexText);

  let currentValue = indexObject.index[0].value;

  alert(currentValue);


}
