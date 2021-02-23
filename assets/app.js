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



// local storage

let stored9 = localStorage.getItem('stored9');
$("#09input").val(stored9);

let stored10 = localStorage.getItem('stored10');
$("#10input").val(stored10);

let stored11 = localStorage.getItem('stored11');
$("#11input").val(stored11);

let stored12 = localStorage.getItem('stored12');
$("#12input").val(stored12);

let stored1 = localStorage.getItem('stored1');
$("#1input").val(stored1);

let stored2 = localStorage.getItem('stored2');
$("#2input").val(stored2);

let stored3 = localStorage.getItem('stored3');
$("#3input").val(stored3);

let stored4 = localStorage.getItem('stored4');
$("#4input").val(stored4);

let stored5 = localStorage.getItem('stored5');
$("#5input").val(stored5);


// Time Variables
let f = {
    hour: 'numeric',
    minute: '2-digit'
};
let h = today.get('hour');
let currentTimeText = today.toLocaleString(f);

nineButton.click(function () {
    var textOfNine = $('#09input').val();
    localStorage.setItem('stored9', textOfNine);
});
tenButton.click(function () {
    var textOfTen = $('#10input').val();
    localStorage.setItem('stored10', textOfTen);
});
elevenButton.click(function () {
    var textOfEleven = $('#11input').val();
    localStorage.setItem('stored11', textOfEleven);
});
twelveButton.click(function () {
    var textOfTwelve = $('#12input').val();
    localStorage.setItem('stored12', textOfTwelve);
});
oneButton.click(function () {
    var textOfOne = $('#1input').val();
    localStorage.setItem('stored1', textOfOne);
});
twoButton.click(function () {
    var textOfTwo = $('#2input').val();
    localStorage.setItem('stored2', textOfTwo);
});
threeButton.click(function () {
    var textOfThree = $('#3input').val();
    localStorage.setItem('stored3', textOfThree);
});
fourButton.click(function () {
    var textOfFour = $('#4input').val();
    localStorage.setItem('stored4', textOfFour);
});
fiveButton.click(function () {
    var textOfFive = $('#5input').val();
    localStorage.setItem('stored5', textOfFive);
});

// Greeting Conditional
function setTimeOfDay() {
    currentDayText.text(today.toLocaleString());
    currentTime.text(currentTimeText);
    if (h > 17) {
        timeOfDay.text("Evening");
        $("body").css("background-color", "#241663");
        $("div").css("background-color", "#202040");
        $("body").css("color", "#ffbd69");
        $("footer").css("color", "white");
        images.prepend($('<img>', {
            id: 'moon',
            src: 'http://clipart-library.com/images_k/moon-clipart-transparent/moon-clipart-transparent-10.png'
        }));
    } else if (h < 12) {
        timeOfDay.text("Morning");
        $("body").css("background-color", "#8ac4d0");
        $("div").css("background-color", "#ffd384");
        $("body").css("color", "#4a3933");
        $("footer").css("color", "black");
        images.prepend($('<img>', {
            id: 'risingSun',
            src: 'https://www.pikpng.com/pngl/m/2-24499_28-collection-of-sunrise-clipart-transparent-clip-art.png'
        }));
    } else {
        timeOfDay.text("Afternoon");
        $("body").css("background-color", "#ffe227");
        $("div").css("background-color", "#d9dab0");
        $("body").css("color", "#4a3933");
        $("footer").css("color", "black");
        console.log("grah");
        images.prepend($('<img>', {
            id: 'sun',
            src: 'http://clipart-library.com/image_gallery/n401246.jpg'
        }));
    }
};


function setDivider() {
    if (h === 9) {
        $("#9Div").css('border', 'double 10px');
    };
    if (h === 10) {
        $("#10Div").css('border', 'double 10px');
    };
    if (h === 11) {
        $("#11Div").css('border', 'double 10px');
    };
    if (h === 12) {
        $("#12Div").css('border', 'double 10px');
    };
    if (h === 13) {
        $("#1Div").css('border', 'double 10px');
    };
    if (h === 14) {
        $("#2Div").css('border', 'double 10px');
    };
    if (h === 15) {
        $("#3Div").css('border', 'double 10px');
    };
    if (h === 16) {
        $("#4Div").css('border', 'double 10px');
    };
    if (h === 17) {
        $("#5Div").css('border', 'double 10px');
    };  
};


// Set color based on time of day
function setPastTimes() {
    if (h > 9) {
        $("#9Div").css('opacity', '0.7')
    };
    if (h > 10) {
        $("#9Div").css('opacity', '0.7')
        $("#10Div").css('opacity', '0.7')
    };
    if (h > 11) {
        $("#9Div").css('opacity', '0.7')
        $("#10Div").css('opacity', '0.7')
        $("#11Div").css('opacity', '0.7')
    };
    if (h > 12) {
        $("#9Div").css('opacity', '0.7')
        $("#10Div").css('opacity', '0.7')
        $("#11Div").css('opacity', '0.7')
        $("#12Div").css('opacity', '0.7')
    };
    if (h > 13) {
        $("#9Div").css('opacity', '0.7')
        $("#10Div").css('opacity', '0.7')
        $("#11Div").css('opacity', '0.7')
        $("#12Div").css('opacity', '0.7')
        $("#1Div").css('opacity', '0.7')
    };
    if (h > 14) {
        $("#9Div").css('opacity', '0.7')
        $("#10Div").css('opacity', '0.7')
        $("#11Div").css('opacity', '0.7')
        $("#12Div").css('opacity', '0.7')
        $("#1Div").css('opacity', '0.7')
        $("#2Div").css('opacity', '0.7')
    };
    if (h > 15) {
        $("#9Div").css('opacity', '0.7')
        $("#10Div").css('opacity', '0.7')
        $("#11Div").css('opacity', '0.7')
        $("#12Div").css('opacity', '0.7')
        $("#1Div").css('opacity', '0.7')
        $("#2Div").css('opacity', '0.7')
        $("#3Div").css('opacity', '0.7')
    };
    if (h > 16) {
        $("#9Div").css('opacity', '0.7')
        $("#10Div").css('opacity', '0.7')
        $("#11Div").css('opacity', '0.7')
        $("#12Div").css('opacity', '0.7')
        $("#1Div").css('opacity', '0.7')
        $("#2Div").css('opacity', '0.7')
        $("#3Div").css('opacity', '0.7')
        $("#4Div").css('opacity', '0.7')
    };
    if (h > 17) {
        $("#9Div").css('opacity', '0.7')
        $("#10Div").css('opacity', '0.7')
        $("#11Div").css('opacity', '0.7')
        $("#12Div").css('opacity', '0.7')
        $("#1Div").css('opacity', '0.7')
        $("#2Div").css('opacity', '0.7')
        $("#3Div").css('opacity', '0.7')
        $("#4Div").css('opacity', '0.7')
        $("#5Div").css('opacity', '0.7')
    };
};

// Set color based on time of day


function init() {
    setTimeOfDay();
    setDivider();
    setPastTimes();
}

init();