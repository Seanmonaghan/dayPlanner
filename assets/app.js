// Luxon Variable for convenience
let DateTime = luxon.DateTime;

// HTML Elements
let timeOfDay = $('#timeOfDay');
let currentDayText = $("#today");
let today = DateTime.local();
let currentTime = $("#currentTime");
let images = $(".timeImage");
let liEl = $("li");
let divEl = $("div");

// button variables
let nineButton = $(".9button");
let tenButton = $(".10button");
let elevenButton = $(".11button");
let twelveButton = $(".12button");
let oneButton = $(".1button");
let twoButton = $(".2button");
let threeButton = $(".3button");
let fourButton = $(".4button");
let fiveButton = $(".5button");

// Arrays for storing List Items for local storage
let array9 = [];
let array10 = [];
let array11 = [];
let array12 = [];
let array1 = [];
let array2 = [];
let array3 = [];
let array4 = [];
let array5 = [];

// setting local storage variables
// sessionStorage.getItem(array9);
// console.log(array9.text);

for (i = 0; i < array9.length; i++) {
    $(".09").append(sessionStorage.getItem(array9[i].text));
    console.log(array9);
}   

// Time Variables
let f = {hour: 'numeric', minute: '2-digit'};
let h = today.get('hour');
let currentTimeText = today.toLocaleString(f);

nineButton.click(function(){
    array9.push({text: $('#09input').val()});
    // sessionStorage.setItem("array9", JSON.stringify(array9));
    // console.log(array9);
    $('.09').append($('<li>', {
         text: $('#09input').val()
    }));
});
tenButton.click(function(){
    $('.10').append($('<li>', {
         text: $('#10input').val()
    }));
});
elevenButton.click(function(){
    $('.11').append($('<li>', {
         text: $('#11input').val()
    }));
});
twelveButton.click(function(){
    $('.12').append($('<li>', {
         text: $('#12input').val()
    }));
});
oneButton.click(function(){
    $('.1').append($('<li>', {
         text: $('#1input').val()
    }));
});
twoButton.click(function(){
    $('.2').append($('<li>', {
         text: $('#2input').val()
    }));
});
threeButton.click(function(){
    $('.3').append($('<li>', {
         text: $('#3input').val()
    }));
});
fourButton.click(function(){
    $('.4').append($('<li>', {
         text: $('#4input').val()
    }));
});
fiveButton.click(function(){
    $('.5').append($('<li>', {
         text: $('#5input').val()
    }));
});

// Check off completed list items
$("body").on('click', 'li', function() {
    $(this).css("text-decoration", "line-through");
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
        images.prepend($('<img>',{id:'sun',src:'http://clipart-library.com/image_gallery/n401246.jpg'}));
    }
};


function init() {
    setTimeOfDay();
}

init();