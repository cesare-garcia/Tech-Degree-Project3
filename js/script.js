// Test Code to ensure everything is set up correctly.
// console.log("Test!");

// Step 3: The Name Field. This code will cause cursor to automatically appear in the first text field.
// The .focus() method will be used to achieve this. 

const nameField = document.getElementById('name');
nameField.focus();

// Step 4: The Job Role Section. I will hide the Other Job Role input text by using style.display = 'none'.
// I will then use a 'Change' event listener to pick up on the moments when a person selects 

let otherJobRoleStatus = document.getElementById('other-job-role');
otherJobRoleStatus.style.display = 'none';
let jobRoleField = document.getElementById('title');

jobRoleField.addEventListener('change', (e) => {
    //console.log(e.target);
    if ( e.target.value == "other" ) {
        otherJobRoleStatus.style.display = 'block';
    } else {
        otherJobRoleStatus.style.display = 'none';
    }
})

// Step 5: 

let disableColor = document.getElementById('color');
disableColor.style.display = 'none';

let shirtDesignSelect = document.getElementById('design');

let shirtColorOptions = document.querySelectorAll('#color option');

console.log(shirtDesignSelect);
shirtDesignSelect.addEventListener('change', (e) => {
    disableColor.style.display = 'block';
    if ( e.target.value == 'js puns') {
        //console.log(shirtColorOptions[1])
        shirtColorOptions[1].selected = 'true';
        for ( let i = 1; i < 7; i++ ) {
            if ( i < 4 ) {
                shirtColorOptions[i].style.display = 'block';
            } else {
                shirtColorOptions[i].style.display = 'none';
            }
        }
    } else if ( e.target.value == 'heart js' ) {
        //console.log(shirtColorOptions[4])
        shirtColorOptions[4].selected = 'true';
        for ( let i = 1; i < 7; i++ ) {
            if ( i < 4 ) {
                shirtColorOptions[i].style.display = 'none';
            } else {
                shirtColorOptions[i].style.display = 'block';
            }
        }
    }
})

// Step 6: Register for Activities

let activitiesFieldSet = document.querySelector('.activities');
let activitiesCheckboxes = document.querySelectorAll('.activities input');

// Testing Variables:
// console.log(activitiesFieldSet);
// console.log(activitiesCheckboxes);

activitiesFieldSet.addEventListener('change', (e) => {

    // Testing Variables:
    //let clickedBox = e.target;
    //let clickedCost = clickedBox.getAttribute('data-cost');
    // console.log(clickedBox);
    // console.log(clickedCost);

    let totalCost = 0;
    let totalCostText = document.getElementById('activities-cost');

    for ( let i = 0; i < activitiesCheckboxes.length; i++ ) {
        if ( activitiesCheckboxes[i].checked ) {
            totalCost += parseInt(`${activitiesCheckboxes[i].getAttribute('data-cost')}`);
        }
    }
    totalCostText.innerHTML = `Total: $${totalCost}`;
})

// Step 7: Payment Info Section

let creditCardField = document.getElementById('credit-card');

let paypalField = document.getElementById('paypal');
paypalField.style.display = 'none';

let bitcoinField = document.getElementById('bitcoin');
bitcoinField.style.display = 'none';

let paymentOptions = document.querySelectorAll('#payment option');
paymentOptions[1].selected = 'true';

let paymentSelector = document.getElementById('payment');

paymentSelector.addEventListener('change', (e) => {
    if ( e.target.value == 'paypal' ) {
        paypalField.style.display = 'block';
        bitcoinField.style.display = 'none';
        creditCardField.style.display = 'none';
    } else if ( e.target.value == 'bitcoin' ) {
        bitcoinField.style.display = 'block';
        paypalField.style.display = 'none';
        creditCardField.style.display = 'none';
    } else if ( e.target.value == 'credit-card' ) {
        creditCardField.style.display = 'block'
        paypalField.style.display = 'none';
        bitcoinField.style.display = 'none'
    }
})

// Step 8: Form validation


