let currentDayText = document.getElementById('today');
let DateTime = luxon.DateTime;
let timeOfDay = document.getElementById('timeOfDay');



let today = DateTime.local();
let f = {month: 'long', day: '2-digit'};
let m = today.get('month');
let h = today.get('hour');
let tz = today.zoneName;

currentDayText.textContent = today.toLocaleString();

// Greeting Conditional
function setTimeOfDay() {
    if (h > 18) {
        timeOfDay.textContent = "Evening";
    } else if (h < 12) {
        timeOfDay.textContent = "Morning";
    } else {
        timeOfDay.textContent = "Day";
    };
};



setTimeOfDay();

