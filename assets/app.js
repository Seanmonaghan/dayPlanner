// Luxon Variable for convenience
let DateTime = luxon.DateTime;

// HTML Elements
let timeOfDay = $('#timeOfDay');
let currentDayText = $("#today");
let today = DateTime.local();
let saveButtons = $("button");
let currentTime = $("#currentTime");
let nine = $(".09");
let images = $(".timeImage");
let liEl = $("li");
let divEl = $("div");



// Time Variables
let f = {hour: 'numeric', minute: '2-digit'};
let m = today.get('month');
let h = today.get('hour');
let currentTimeText = today.toLocaleString(f);

saveButtons.click(function(event){
    event.preventDefault;
    $('.09').append($('<li>', {
         text: $('#09input').val()
    }));
});

$("body").on('click', 'li', function() {
    $(this).css("text-decoration", "line-through");
});



divEl.on('click', function(e) {
    e.stopPropagation;
    console.log($(this));
});


// Greeting Conditional
function setTimeOfDay() {
    currentDayText.text(today.toLocaleString());
    currentTime.text(currentTimeText);
    if (h > 18) {
        timeOfDay.text("Evening");
        $("body").css("background-color", "grey");
        images.prepend($('<img>',{id:'moon',src:'http://clipart-library.com/images_k/moon-clipart-transparent/moon-clipart-transparent-10.png'}));
    } else if (h < 12) {
        timeOfDay.text("Morning");
        $("body").css("background-color", "lightblue");
        images.prepend($('<img>',{id:'risingSun',src:'https://www.pikpng.com/pngl/m/2-24499_28-collection-of-sunrise-clipart-transparent-clip-art.png'}));
    } else {
        timeOfDay.text("Day");
        $("body").css("background-color", "orange");
        images.prepend($('<img>',{id:'sun',src:'http://clipart-library.com/image_gallery/614668.gif'}));
    }
};


function init() {
    setTimeOfDay();
}

init();