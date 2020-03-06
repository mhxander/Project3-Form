/* Team Treehouse
Full Stack Javascript
Project 3




*/

// start by selecting the name element, and putting on focus.
const name = document.querySelector('#name');
name.focus();

// Since I added the "Other Title" input in the HTML, I needed to hide it.
var otherJob = document.getElementById('other-title');
otherJob.style.display = 'none';

//T-shirt color info
//First, hide all colors, and put message in color field
const color = document.getElementById('color');
const jsPuns1 = color[0];
const jsPuns2 = color[1];
const jsPuns3 = color[2];
const heart1 = color[3];
const heart2 = color[4];
const heart3 = color[5];
for (i=0; i<color.length; i+=1) {
    color[i].hidden = true;
}
const colorChoice = document.createElement('option');
color.appendChild(colorChoice);
colorChoice.textContent = "Please select a T-shirt Theme";
colorChoice.selected = true;

const shirtDiv = document.querySelector('.shirt-box');

//putting even listener on design box, to trigger when a choice is selected.
//Will hide the colors until a choice is made(for exceeds).
//Hides colors again if "Select Theme" is chosen, though the box is hidden at the same time.
//Only including this to prove I know how to hide them again, though the box is hidden as well.
const design = document.querySelector('#design');
const jsPuns = document.querySelector('#design option[value="js puns"]');
const heart = document.querySelector('#design option[value="heart js');
const colorList = document.getElementById('colors-js-puns');
colorList.style.display = 'none';
design.addEventListener('change', () => {
    if(jsPuns.selected === true) {
        colorList.style.display = '';
        colorChoice.hidden = true;
        jsPuns1.selected = true;
        jsPuns1.hidden = false;
        jsPuns2.hidden = false;
        jsPuns3.hidden = false;
        heart1.hidden = true;
        heart2.hidden = true;
        heart3.hidden = true;
    } else if(heart.selected === true) {
        colorList.style.display = '';
        colorChoice.hidden = true;
        heart1.selected = true;
        jsPuns1.hidden = true;
        jsPuns2.hidden = true;
        jsPuns3.hidden = true;
        heart1.hidden = false;
        heart2.hidden = false;
        heart3.hidden = false;        
    } else {
        colorList.style.display = 'none';
        for (i=0; i<color.length; i+=1) {
            color[i].hidden = true;
        }
        colorChoice.selected = true;
    }
});

//For fun, changed the shirtDiv background color to match the shirt color chosen.
shirtDiv.addEventListener('change', () => {
    if(jsPuns1.selected === true) {
        shirtDiv.style.backgroundColor = "#6495ed";
    } else if (jsPuns2.selected === true) {
        shirtDiv.style.backgroundColor = '#2f4f4f';
    } else if (jsPuns3.selected === true) {
        shirtDiv.style.backgroundColor = '#FFD700';
    } else if (heart1.selected === true) {
        shirtDiv.style.backgroundColor = '#ff6347';
    } else if (heart2.selected === true) {
        shirtDiv.style.backgroundColor = '#4682b4';
    } else if (heart3.selected === true) {
        shirtDiv.style.backgroundColor = '#696969';
    } else {
        shirtDiv.style.backgroundColor = '';
    }
});

//Add "Other Job" box when "other" is selected, and remove it when something else is chosen
const otherTitle = document.querySelector('#title option[value="other"]');
const title = document.getElementById('title');
title.addEventListener('change', () => {
    if(otherTitle.selected === true) {
        otherJob.style.display = '';
    } else {
        otherJob.style.display = 'none';
    }
})

//Registering for Activities section
var totalCost = 0;
const activities = document.querySelector('.activities');
const costSum = document.createElement('element');
activities.appendChild(costSum);
activities.addEventListener('change', (e) => {
    const clicked = event.target;
    const dataCost = clicked.getAttribute('data-cost');
    const cost = parseInt(dataCost);
    if (clicked.checked) {
        totalCost += cost;
    } else {
        totalCost -= cost;
    }
    costSum.innerHTML = "Total Cost : $" + totalCost;
    const dayAndTime = clicked.getAttribute('data-day-and-time');
    const allCheckBoxes = document.querySelectorAll('.activities input');
    for (let i=0; i < allCheckBoxes.length; i += 1) {
        const currentTime = allCheckBoxes[i].getAttribute('data-day-and-time');
        if (currentTime === dayAndTime && clicked !== allCheckBoxes[i]) {
            if(clicked.checked) {
                allCheckBoxes[i].disabled = true;
            } else {
                allCheckBoxes[i].disabled = false;
            }
        }
    }
});


