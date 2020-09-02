// use 'let' instead of 'var', basically the same thing
// i'll explain differences later, both used for variables
// use 'const' for things that will not change

let lookAway= 7;
let noon = 12;
let lunchTime = 12;
let napTime = lunchTime + 2;
let evening = 18;
let petTime = -1;

const showCurrentTime = function() {
    const clock = document.getElementById('clock');
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let meridian = "AM";

    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours -12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds <10) {
        seconds = "0" + seconds;
    }

    const clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;

};

const updateClock = function() {
    const currentHour = new Date().getHours();
    console.log("update clock, current hour: " + currentHour);
    console.log("pet time: " + petTime + ", look away: " + lookAway + ", lunch time: " + lunchTime);
    let messageText;
    let image = "";

    const timeEvent = document.getElementById("timeEvent");
    const sempaiImage = document.getElementById("sempaiImage");

    if (currentHour === petTime) {
        image = "https://i.kym-cdn.com/photos/images/newsfeed/000/943/157/ccd.jpg";
        messageText = "kyaaaaa";
        console.log("it's petting hour!");
    }
    else if (currentHour === lookAway) {
        image = "https://i.imgur.com/xHzNQi3.jpg";
        messageText = "right now!!!";
        console.log("notice me sempai");
    }
    else if (currentHour === lunchTime) {
        image = "https://i.kym-cdn.com/photos/images/newsfeed/000/943/150/51e.jpg"
        messageText = "You want to go out with me?";
        console.log("it's lunch hour!");
    }
    else if (currentHour === napTime) {
        image = "https://i.kym-cdn.com/photos/images/newsfeed/000/943/138/ff9.png"
        messageText = "he noticed me";
        console.log("it's nap hour!");
    }
    else if (currentHour < noon) {
        image = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/049f7c6d-be36-496a-b991-5659b932efbb/d68ajfc-bffb6971-d370-458b-847e-2fde42d3b377.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDQ5ZjdjNmQtYmUzNi00OTZhLWI5OTEtNTY1OWI5MzJlZmJiXC9kNjhhamZjLWJmZmI2OTcxLWQzNzAtNDU4Yi04NDdlLTJmZGU0MmQzYjM3Ny5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.J60112LgySYrj7OGL28er4TqlPqE1LVe6ebFdsasmAY";
        messageText = "Of course I don't like you baka sempai";
        console.log("it's morning!");
    }
    else if (currentHour >= evening) {
        image = "https://i.kym-cdn.com/photos/images/original/000/943/154/454.gif";
        messageText = "Sempai noticed me";
        console.log("it's evening!");
    }
    else {
        image = "https://i.imgur.com/oeVJxuW.png";
        messageText = "good afternoon"
        console.log("it's afternoon!");
    }

    timeEvent.innerText = messageText;
    sempaiImage.src = image;

    showCurrentTime();
};

updateClock();

const oneSecond = 1000;
setInterval(updateClock, oneSecond); // calls updateClock() every one second (1000 milliseconds)


// pet button handling
const petButton = document.getElementById("petTheSharkButton");

const petEvent = function() {
    if (petTime < 0) {
        petTime = new Date().getHours(); // returns 10 if 10am, 20 if 10pm
        petButton.innerText = "Why would I want you to pet me?";
        petButton.style.backgroundColor = '#fff';
        petButton.style.color = '#000';
    }
    else {
        petTime = -1;
        petButton.innerText = "Pet the kawaii shark";
        petButton.style.backgroundColor = '#000';
        petButton.style.color = '#fff';
    }
};
petButton.addEventListener("click", petEvent);


// wake up handling
const lookAwaySelector = document.getElementById("lookAwaySelector");

const lookAwayEvent = function() {
    lookAway = Number(lookAwaySelector.value);
    console.log("look away: " + lookAway);
};

lookAwaySelector.addEventListener("change", lookAwayEvent);


// lunch handling
const lunchTimeSelector = document.getElementById("lunchTimeSelector");

const lunchEvent = function() {
    lunchTime = Number(lunchTimeSelector.value);
    console.log("lunch time: " + lunchTime);
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// nap handling
const napTimeSelector = document.getElementById("napTimeSelector");

const napEvent = function() {
    napTime = Number(napTimeSelector.value);
    console.log("nap time: " + napTime);
};

napTimeSelector.addEventListener("change", napEvent);