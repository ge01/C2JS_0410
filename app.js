// Event listener that fires when a user clicks a button.
document.getElementById("myBtn").addEventListener("click", function(){
  computeChoice();
});

// Constant for membership rates
var ADULT_RATE = 120.0;
var CHILD_RATE = 60.0;
var SENIOR_RATE = 100.0;

// Global variables
var choice;       // Menu choice
var months;       // Number of months
var charges;      // Monthly charges

function computeChoice() {
  // Get the choice
  choice = parseInt(document.getElementById('choice').value);

  // Get the months
  months = parseInt(document.getElementById('months').value);

  // Use the menu selection to execute the correct charges
  if (choice == 1)
    charges = months * ADULT_RATE;
  else if (choice == 2)
    charges = months * CHILD_RATE;
  else if (choice == 3)
    charges = months * SENIOR_RATE;
  else if (choice > 3) {
    document.getElementById("outCharges").innerHTML = "The valid choices are 1 through 4. " +
    "Refresh the app and select one of those.";
  }
  // Display the total charges
  document.getElementById('outCharges').innerHTML = "The total charges are $" + charges.toFixed(2);
}
