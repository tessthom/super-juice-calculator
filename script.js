// Nav bar toggler -------------------------
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
});

// Get current year for footer -------------------------
const getCurrentYear = () => {
  return new Date().getFullYear();
};

let year = document.querySelector('.year');
year.textContent = getCurrentYear();

// Input validation -------------------------
// Function takes input value. If garbage, returns error message. If valid, returns true.
function validateInput(input) {
  const error = document.querySelector('.error');
  // check for empty string
  if (isNaN(input) || input === '' || input < 1) {
    error.style.display = 'block';
    error.textContent = 'Please enter a valid number';
    return false;
  } else {
    error.textContent = '';
    return true;
  }
}

// Store input values in session storage -------------------------
function insertResults(juiceAMount, peelWeight, totalWaterWeight, totalAcidPercentage, totalAcidWeight, citricAcid, malicAcid) {
  sessionStorage.setItem('juiceAMount', juiceAMount);
  sessionStorage.setItem('peelWeight', peelWeight);
  sessionStorage.setItem('totalWaterWeight', totalWaterWeight);
  sessionStorage.setItem('totalAcidPercentage', totalAcidPercentage);
  sessionStorage.setItem('totalAcidWeight', totalAcidWeight);
  sessionStorage.setItem('citricAcid', citricAcid);
  sessionStorage.setItem('malicAcid', malicAcid);

  // navigate to recipe.html
  window.location.href = 'recipe.html';
}

// Input type toggle -------------------------
const toggleInputBtn = document.getElementById('toggleInputBtn');


// function that changes the input label and name if input is toggled between final desired amount of juice or weight of peels when user clicks on the inputTypeBtn button
function toggleInputType() {
  const inputLabel = document.querySelector('.inputTypeLabel');
  if (inputLabel.textContent === 'Amount of juice you want (ml):') {
    inputLabel.textContent = 'Weight of peels (g):';
  } else {
    inputLabel.textContent = 'Amount of juice you want (ml):';
  }
}

// Calculator logic -------------------------
function calculateRecipe() {
  // validate input
  const inputValue = document.getElementById('inputValue').value;
  if (!validateInput(inputValue)) { // if input invalid...
    return;
  }
  // get values from select option and input field
  const selectOption = document.getElementById('selectOption').value;
  let juiceAMount;
  let peelWeight;

  // if input label is for juice, assign value to juiceAmount variable, else assign value to a peelWeight variable
  if (document.querySelector('.inputTypeLabel').textContent === 'Amount of juice you want (ml):') {
    juiceAMount = document.getElementById('input').value;
  } else {
    peelWeight = document.getElementById('input').value;
  }

  // the output variables are: peelWeight, juiceAmount, totalWaterWeight, totalAcidPercentage (which is 6% for limes), totalAcidWeight citricAcid, malicAcid. The formula used if limes are the selected fruit option is: peelWeight * 10 = totalWaterWeight, totalWaterWeight * totalAcidPercentage = totalAcidWeight, citricAcid = totalAcidWeight * .45, malicAcid = totalAcidWeight * .15.
  // instantiate all variables
  let totalWaterWeight;
  let totalAcidPercentage;
  let totalAcidWeight;
  let citricAcid;
  let malicAcid;

  // if lime is selected, set totalAcidPercentage to 6%, citricAcid being 4.5% of totalAcidWeight, malicAcid being 1.5% of totalAcidWeight
  if (selectOption === 'lime') {
    totalAcidPercentage = .06;
    totalWaterWeight = peelWeight * 10;
    totalAcidWeight = totalWaterWeight * totalAcidPercentage;
    citricAcid = totalAcidWeight * .45;
    malicAcid = totalAcidWeight * .15;
  } else if (selectOption === 'lemon') {
    totalAcidPercentage = .05;
    totalWaterWeight = peelWeight * 10;
    totalAcidWeight = totalWaterWeight * totalAcidPercentage;
    citricAcid = totalAcidWeight * .45;
    malicAcid = totalAcidWeight * .15;
  } else if (selectOption === 'orange') {
    totalAcidPercentage = .04;
    totalWaterWeight = peelWeight * 10;
    totalAcidWeight = totalWaterWeight * totalAcidPercentage;
    citricAcid = totalAcidWeight * .45;
    malicAcid = totalAcidWeight * .15;
  } else if (selectOption === 'grapefruit') {
    totalAcidPercentage = .03;
    totalWaterWeight = peelWeight * 10;
    totalAcidWeight = totalWaterWeight * totalAcidPercentage;
    citricAcid = totalAcidWeight * .45;
    malicAcid = totalAcidWeight * .15;
  } else if (selectOption === 'pomelo') {
    totalAcidPercentage = .02;
    totalWaterWeight = peelWeight * 10;
    totalAcidWeight = totalWaterWeight * totalAcidPercentage;
    citricAcid = totalAcidWeight * .45;
    malicAcid = totalAcidWeight * .15;
  } else if (selectOption === 'kumquat') {
    totalAcidPercentage = .07;
    totalWaterWeight = peelWeight * 10;
    totalAcidWeight = totalWaterWeight * totalAcidPercentage;
    citricAcid = totalAcidWeight * .45;
    malicAcid = totalAcidWeight * .15;
  } else if (selectOption === 'yuzu') {
    totalAcidPercentage = .08;
    totalWaterWeight = peelWeight * 10;
    totalAcidWeight = totalWaterWeight * total
  };

  // call fn to insert results into recipe.html DOM
  insertResults(juiceAMount, peelWeight, totalWaterWeight, totalAcidPercentage, totalAcidWeight, citricAcid, malicAcid);

  // open recipe.html using best practice - window.location?

}

