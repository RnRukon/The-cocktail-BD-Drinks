const theCocktailBD = async a => {

    const inputFieldValue = document.getElementById('input-field');

    const inputFieldValueText = inputFieldValue.value;

    if (a == 'a') {
        var url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputFieldValueText}`;

        var url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputFieldValueText}`;

        const inputFieldValue = document.getElementById('input-field');
        inputFieldValue.value = '';
    }
    else {
        var url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
    }





    try {
        const res = await fetch(url);
        const data = await res.json();
        drinksData(data.drinks);
    }
    catch (error) {
        console.log('error');
    }
}
theCocktailBD();


const drinksData = data => {
    const drinksContainer = document.getElementById('drinks-container');
    drinksContainer.textContent = "";
    // console.log(data);
    for (const drink of data) {
        const div = document.createElement('div');
        div.classList.add('col-lg-3');
        div.classList.add('col-md-4');
        div.classList.add('col-sm-12');
        div.classList.add('g-5');

        div.innerHTML = `
        
                 <div class="bg-info p-2  rounded-3"style="height:515px;" >
                    <div class="d-flex justify-content-center">
                    <img  class="img-fluid  rounded-3" src="${drink.strDrinkThumb}" alt="">
                    </div>
                  
                    <div>
                    
                    <h4>${drink.strDrink}</h4>
                    <div style="height:100px; overflow: hidden; overflow-y: scroll;">
                    <p>${drink.strInstructions}</p>
                    </div>
                    </div>
                    <button onclick="detailsData(${drink.idDrink})" class="btn btn-warning" href="">Details</button>
                </div>
                   
        
                `
        drinksContainer.appendChild(div);

    }
}

const searchButton = document.getElementById('search-button').addEventListener('click', () => {

    theCocktailBD('a');

})











const detailsData = async id => {

    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        drinksDataDetails(data.drinks);
    }
    catch (error) {
        console.log('error');
    }




}






function drinksDataDetails(data) {
    const detailContainer = document.getElementById('detailsContainer');
    detailContainer.textContent = '';
    // const drinksContainer = document.getElementById('drinks-container');
    // drinksContainer.textContent = "";
    for (const details of data) {
        const div = document.createElement('div');

        div.innerHTML = `
        
        <div class=" bg-warning p-5 d-flex justify-content-around  align-items-center rounded-3 " >

                    <div ">
                    <img  class="img-fluid w-75 rounded-3" src="${details.strDrinkThumb}" alt="">
                    </div>
                  
                    <div class="ms-3">
                    <h4>${details.strDrink}</h4>
                    <div>
                    <p>${details.strInstructions}</p>
                    <p>${details.strInstructionsIT}</p>
                    <p>${details.strInstructionsDE}</p>
                    <h3>DateModified: ${details.dateModified}</h3>
                    </div>
                    </div>
                    
                </div>
        
        
        `
        detailContainer.appendChild(div);

    }
}



const RandomDetailsData = async () => {

    const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        randomDrinksDataDetails(data.drinks);
    }
    catch (error) {
        console.log('error');
    }

}



function randomDrinksDataDetails(data) {
    const detailContainer = document.getElementById('detailsContainer');
    detailContainer.textContent = '';
    // const drinksContainer = document.getElementById('drinks-container');
    // drinksContainer.textContent = "";
    for (const details of data) {
        const div = document.createElement('div');

        div.innerHTML = `
        
        <div class=" bg-warning p-5 d-flex justify-content-around  align-items-center rounded-3 " >

                    <div ">
                    <img  class="img-fluid w-75 rounded-3" src="${details.strDrinkThumb}" alt="">
                    </div>
                  
                    <div class="ms-3">
                    <h4>${details.strDrink}</h4>
                    <div>
                    <p>${details.strInstructions}</p>
                    <p>${details.strInstructionsIT}</p>
                    <p>${details.strInstructionsDE}</p>
                    <h3>DateModified: ${details.dateModified}</h3>
                    </div>
                    </div>
                    
                </div>
        
        
        `
        detailContainer.appendChild(div);

    }
}



const randomSearch = document.getElementById('random-Search').addEventListener('click', () => {

    RandomDetailsData()

})
