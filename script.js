function convertTime() {
var ovenTemp = document.getElementById('ovenTemp').value;
var ovenTime = document.getElementById('ovenTime').value;

if (ovenTemp && ovenTime) {
var airFryerTemp = ovenTemp - 25;
var airFryerTime = ovenTime * 0.8;

document.getElementById('result').innerHTML =
"Air Fryer Temperature: " + airFryerTemp + "°F<br>" +
"Air Fryer Time: " + Math.round(airFryerTime) + " minutes";
} else {
document.getElementById('result').innerHTML = "Please enter both oven temperature and time.";
}
}
