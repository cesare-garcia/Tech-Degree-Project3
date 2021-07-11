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

// Variable for Step 8 established here: 

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

let formElement = document.querySelector('form');

// name already has a variable through nameField at the top of the program
// activities variable already established

let email = document.querySelector('#email');

function nameValidator() {
    let nameValue = nameField.value;
    let nameTest = /^[a-zA-z]+ ?[a=zA-z]*? ?[a-zA-z]*?$/.test(nameValue);

    return nameTest
}

function emailValidator() {
    let emailValue = email.value;
    let emailTest = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);

    return emailTest
}

function activitiesValidator() {
    let activitiesValue = totalActivities > 0;
    
    return activitiesValue
}

function cardNumberValidator() {
    let ccNumbValue = document.getElementById('cc-num').value;
    let ccTest = /^[0-9]{13,16}$/.test(ccNumbValue);
    return ccTest
}

function zipcodeValidator() {
    let zipCodeValue = document.getElementById('zip').value;
    let zipTest = /^[0-9]{5}$/.test(zipCodeValue);
    return zipTest
}

function cvvValidator() {
    let ccvValue = document.getElementById('cvv').value;
    let ccvTest = /^[0-9]{3}$/.test(ccvValue);
    return ccvTest
}

let totalActivities = 0;

formElement.addEventListener('submit', (e) => {

    // Must set totalActivities to 0 before running the loop, so that the counter doesn't carry over to a second or third submission
    // The loop must count from zero every single time the form is submitted.

    totalActivities = 0;
    for ( let i = 0; i < activitiesCheckboxes.length; i++ ) {
        if ( activitiesCheckboxes[i].checked ) {
            totalActivities += 1;
            // testing tool -> console.log(totalActivities);
        }
    }

    if ( !nameValidator() ) {
        e.preventDefault();
        console.log('Name Validator does not approve');
    }
    if ( !emailValidator() ) {
        e.preventDefault();
        console.log('Email validator does not approve');
    }
    if ( !activitiesValidator() ) {
        e.preventDefault();
        console.log('Activities validator does not approve');
        
    }
    if ( paymentOptions[1].selected ) {
        //console.log('Credit Card fires baby!') -> testing phrase

        if ( !cardNumberValidator() ) {
            e.preventDefault();
            console.log('Card Number Validator does not approve');
        }
        if ( !zipcodeValidator() ) {
            e.preventDefault();
            console.log('Zip Code Validator does not approve');
        }
        if ( !cvvValidator() ) {
            e.preventDefault();
            console.log('CVV Validator does not approve');
        }
    } 
});

// Step 9: Accessibility 