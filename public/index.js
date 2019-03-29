let fieldsRegex = Object.freeze({
    cardNumber:/^[a-zA-Z]*$/,
    cardHolderName:/^[a-zA-Z]*$/,
    cvv:/^[a-zA-Z]*$/,
    expiryDate:/^[a-zA-Z]*$/
});

let buttons = Object.seal({
    reset: document.getElementsByName("reset")[0],
    submit: document.getElementsByName("submit")[0],
})

let formValidity = function(formFieldsObj){
    let validityObj = {};
    for(let key in formFieldsObj){
        validityObj[key] = false;
    }
    return validityObj;
}(fieldsRegex);

function canResetForm(){
    return Object.values(formValidity).includes(true);
}

function isFormValid(){
    return !Object.values(formValidity).includes(false);
}

function isFieldValid(name,value){
    console.log(fieldsRegex);
    const fieldValidity = fieldsRegex[name].test(value);
    formValidity[name] = fieldValidity;
    return fieldValidity;
}

function formatFieldForValidity(name,value){
    return value;
}

function formatFieldForDisplay(name,value){
    return value;
}

function updateFieldDisplay(field,fieldValidity,displayValue){
    field.value = displayValue;
    if(!fieldValidity){
        field.classList.add("error");
    } else {
        field.classList.remove("error");
    }
}

function updateButtonDisplay(){
    if(canResetForm()){
        buttons["reset"].disabled = false;
    }
    else{
        buttons["reset"].disabled = true;
    }
    if(isFormValid()){
        buttons["submit"].disabled = false;
    }
    else{
        buttons["submit"].disabled = true;
    }
}

function formFieldUpdated(ev){
    const field = ev.target;
    const pureValue = formatFieldForValidity(field.name,field.value);
    const fieldValidity = isFieldValid(field.name,pureValue);
    const displayValue = formatFieldForDisplay(field.name,field.value);
    updateFieldDisplay(field,fieldValidity,displayValue);
    updateButtonDisplay();
}

function formButtonClicked(ev){
    console.log(ev.target.name);
}

(function(){
    let inputFields = document.getElementsByTagName("input");
    Array.prototype.forEach.call(inputFields,input => {
        switch(input.type){
            case "text" : input.onkeyup = formFieldUpdated;
            case "password" : input.onkeyup  = formFieldUpdated;
            default : null;
        }
    });
})();

