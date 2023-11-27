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
    console.log('validateInput is about to return false');
    return false;
  } else {
    error.textContent = '';
    console.log('input is valid and the validation function has run')
    return true;
  }
}

// Store input values in session storage -------------------------
function insertResults(
  fruit,
  capFruit,
  citricAcidPercent,
  malicAcidPercent,
  juiceAMount,
  peelWeight,
  totalWaterWeight,
  totalAcidPercentage,
  totalAcidWeight,
  citricAcid,
  malicAcid
) {
  // store values in session storage
  sessionStorage.setItem('fruit', fruit);
  sessionStorage.setItem('capFruit', capFruit);
  sessionStorage.setItem('citricAcidPercent', citricAcidPercent);
  sessionStorage.setItem('malicAcidPercent', malicAcidPercent);
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
  if (!validateInput(inputValue)) {
    // if input invalid...
    return;
  }
  // get values from select option
  let fruit = document.getElementById('fruit').value;
  let capFruit = fruit.charAt(0).toUpperCase() + fruit.slice(1);

  // set each acid percentage based on fruit selected, to provide details for in recipe
  let citricAcidPercent;
  let malicAcidPercent;
  if (fruit === 'lime') {
    citricAcidPercent = 4.5;
    malicAcidPercent = 1.5;
  } else if (fruit === 'lemon') {
    citricAcidPercent = 5;
    malicAcidPercent = 1;
  }

  // if input label is for juice, assign value to juiceAmount variable, else assign value to a peelWeight variable
  let juiceAmount;
  let peelWeight;
  let totalWaterWeight;
  if (
    document.querySelector('.inputTypeLabel').textContent ===
    'Amount of juice you want (ml):'
  ) {
    juiceAmount = inputValue;
    totalWaterWeight = juiceAmount;
    peelWeight = totalWaterWeight / 10;
  } else {
    peelWeight = inputValue;
    totalWaterWeight = peelWeight * 10;
    juiceAmount = totalWaterWeight;
  }

  // the output variables are: peelWeight, juiceAmount, totalWaterWeight, totalAcidPercentage (which is 6% for limes), totalAcidWeight citricAcid, malicAcid. The formula used if limes are the selected fruit option is: peelWeight * 10 = totalWaterWeight, totalWaterWeight * totalAcidPercentage = totalAcidWeight, citricAcid = totalAcidWeight * .45, malicAcid = totalAcidWeight * .15.
  // instantiate remaining calculated variables
  let totalAcidPercentage;
  let totalAcidWeight;
  let citricAcid;
  let malicAcid;

  // if lime is selected, set totalAcidPercentage to 6%, citricAcid being 4.5% of totalAcidWeight, malicAcid being 1.5% of totalAcidWeight
  if (fruit === 'lime') {
    totalAcidPercentage = 0.06;
    totalAcidWeight = totalWaterWeight * totalAcidPercentage;
    citricAcid = (totalAcidWeight * 0.45).toFixed(1);
    malicAcid = (totalAcidWeight * 0.15).toFixed(1);
  } else if (fruit === 'lemon') {
    totalAcidPercentage = 0.05;
    totalAcidWeight = totalWaterWeight * totalAcidPercentage;
    citricAcid = (totalAcidWeight * 0.9).toFixed(1);
    malicAcid = (totalAcidWeight * 0.1).toFixed(1);
  }
  console.log(`fruit specific calculation has been done and the variables are fruit: ${fruit}, juiceAmount: ${juiceAmount}, peelWeight: ${peelWeight}, citricAcidPercent: ${citricAcidPercent}, $malicAcidPercent: ${malicAcidPercent}, totalAcidPercentage: ${totalAcidPercentage}, totalAcidWeight: ${totalAcidWeight}, citricAcid: ${citricAcid}, malicAcid: ${malicAcid}.`);
  //console.log(fruit, citricAcidPercent, malicAcidPercent, juiceAmount, peelWeight, totalWaterWeight, totalAcidPercentage, totalAcidWeight, citricAcid, malicAcid);
  // format acid percentage for render
  totalAcidPercentage = (totalAcidPercentage * 100).toFixed(1);
  // call fn to insert results into recipe.html DOM
  insertResults(
    fruit,
    capFruit,
    citricAcidPercent,
    malicAcidPercent,
    juiceAmount,
    peelWeight,
    totalWaterWeight,
    totalAcidPercentage,
    totalAcidWeight,
    citricAcid,
    malicAcid
  );
}
