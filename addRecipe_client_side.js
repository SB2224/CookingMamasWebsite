var url = "http://localhost:3000/post";

function submitRecipe() {
    // 
    var recipeTitle = document.getElementById("recipeTitle").value;
    var sdescription = document.getElementById("sdescription").value;
    var mealCategory = document.querySelector('input[name="mealCategory"]:checked').value;
    var keRequirements = document.getElementById("keRequirements").value;
    var ingredients = document.getElementById("ingredients").value;
    var procedure = document.getElementById("procedure").value;

    
    
      let pumpkinPie = '{"pumpkin pie" : [' + ' { "recipeTitle":"recipeTitle" , "sdescription":"sdescription","mealCategory": "mealCategory","keRequirements":"keRequirements", "ingredients":"ingredients", "procedures":"procedure" } ] }' ;


    const recipe = JSON.parse(pumpkinPie);
    let text = JSON.stringify(recipe);
    alert(text);
    localStorage.setItem('recipeTitle sdescription mealCategory keRequirements ingredients procedures JSON', text);

    
    }

    function readFromLocalStorage()  {
        let textsource = localStorage.getItem('recipeTitle sdescription mealCategory keRequirements ingredients procedures JSON');
        const obj = JSON.parse(textsource);
        let text = obj.pumpkinPie[0].recipeTitle;
        alert(text);
    }