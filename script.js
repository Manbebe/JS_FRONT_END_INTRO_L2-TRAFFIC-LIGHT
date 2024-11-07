//Use query Selectors to get the class of all the button shapes
const colors = ["red", "blue", "green", "yellow", "purple"];
const redLight = document.querySelector('.red-light');
const greenLight = document.querySelector('.green-light');
const yellowLight = document.querySelector('.yellow-light');
const onLight = document.querySelector('.on-light');
const offLight = document.querySelector('.off-light');
const partyLight = document.querySelector('.party-light');
//Use getElementById which allows us to get the ID so that we can add an event listener to the buttons, listen for a click and then set the color via css properties.
const redSwitch = document.getElementById("red-switch");
const greenSwitch = document.getElementById("green-switch");
const yellowSwitch = document.getElementById("yellow-switch");
const onSwitch = document.getElementById("on-switch");
const offSwitch = document.getElementById("off-switch");
const partySwitch = document.getElementById("party-switch");
const cycleSwitch = document.getElementById("cycle-switch");

//Add event listeners that listen for a button click
redSwitch.addEventListener("click", () => {
    redLight.style.backgroundColor = "red";
});
greenSwitch.addEventListener("click", () => {
    greenLight.style.backgroundColor = "green";
});
yellowSwitch.addEventListener("click", () => {
    yellowLight.style.backgroundColor = "yellow";
});

//Turn all lights on and off with their specific buttons
offSwitch.addEventListener("click", () => {
    redLight.style.backgroundColor = "#444";
    greenLight.style.backgroundColor = "#444";
    yellowLight.style.backgroundColor = "#444";
});
onSwitch.addEventListener("click", () => {
    redLight.style.backgroundColor = "red";
    greenLight.style.backgroundColor = "green";
    yellowLight.style.backgroundColor = "yellow";
});

//Party Mode Button
partySwitch.addEventListener("click", () => {
    redLight.style.backgroundColor = "purple";
    greenLight.style.backgroundColor = "teal";
    yellowLight.style.backgroundColor = "hotpink";
});

//Turn all lights on and off at once with a single button
let currentLight = 'red'; //init current light state
let intervalId = null;

function cycleLight(){
    redLight.style.backgroundColor = "#444";
    yellowLight.style.backgroundColor = "#444";
    greenLight.style.backgroundColor = "#444";
    if(currentLight === 'red'){
        redLight.style.backgroundColor = "red";
        currentLight = 'yellow';
    } else if(currentLight === 'yellow'){
        yellowLight.style.backgroundColor = "yellow";
        currentLight = 'green';
    } else{
        greenLight.style.backgroundColor = "green";
        currentLight = 'red';
    }
}

cycleSwitch.addEventListener('click', () => {
    if(!intervalId){
        intervalId = setInterval(cycleLight, 200);
    }
});