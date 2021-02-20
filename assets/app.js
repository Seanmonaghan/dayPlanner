// Luxon Variable for convenience
let DateTime = luxon.DateTime;

// HTML Elements
let timeOfDay = $('#timeOfDay');
let currentDayText = $("#today");
let today = DateTime.local();
let saveButtons = $(".btn");
let currentTime = $("#currentTime");
let nine = $(".09");
let images = $(".timeImage");



// Time Variables
let f = {hour: 'numeric', minute: '2-digit'};
let m = today.get('month');
let h = today.get('hour');
let currentTimeText = today.toLocaleString(f);

saveButtons.click(function(){
    $('.09').append($('<li>', {
         text: $('#09input').val()
    }));
});






// Greeting Conditional
function setTimeOfDay() {
    currentDayText.text(today.toLocaleString());
    currentTime.text(currentTimeText);
    if (h > 18) {
        timeOfDay.text("Evening");
        images.prepend($('<img>',{id:'moon',src:'http://clipart-library.com/images_k/moon-clipart-transparent/moon-clipart-transparent-10.png'}));
    } else if (h < 12) {
        timeOfDay.text("Morning");
        images.prepend($('<img>',{id:'risingSun',src:'https://www.pikpng.com/pngl/m/2-24499_28-collection-of-sunrise-clipart-transparent-clip-art.png'}));
    } else {
        timeOfDay.text("Day");
        images.prepend($('<img>',{id:'sun',src:'http://clipart-library.com/image_gallery/614668.gif'}));
    }
};


function init() {
    setTimeOfDay();
}

init();