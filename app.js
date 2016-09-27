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
  // Display the table of speeds
  for (kph = START_SPEED; kph <= END_SPEED; kph += INTERVAL) {
    // Calculate miles per hour.
    mph = kph * CONVERSION_FACTOR;

    // Display to console the conversion.
    console.log(kph + " KPH is the same as " + mph.toFixed(2) + " MPH");
  }
  // Display the last speed conversion
  document.getElementById('outSpeed').innerHTML = kph + " KPH is the same as " +
    mph.toFixed(2) + " MPH";
}
