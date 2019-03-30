import api from "./api.mjs";

api.getProducts(1,3).then((products)=>console.log(products));













































// let fieldsRegex = Object.freeze({
//     cardNumber:/^[a-zA-Z]*$/,
//     cardHolderName:/^[a-zA-Z]*$/,
//     cvv:/^[a-zA-Z]*$/,
//     expiryDate:/^[a-zA-Z]*$/
// });

// let buttons = Object.seal({
//     reset: document.getElementsByName("reset")[0],
//     submit: document.getElementsByName("submit")[0],
// })

// let form = function(formFieldsObj){
//     let validityObj = {};
//     for(let key in formFieldsObj){
//         validityObj[key] = {value:"",validity:false};
//     }
//     return validityObj;
// }(fieldsRegex);

// function canResetForm(){
//     return Object.values(form).map((value)=>value.validity).includes(true);
// }

// function isFormValid(){
//     return !Object.values(form).map((value)=>value.validity).includes(false);
// }

// function isFieldValid(name,value){
//     const fieldValidity = fieldsRegex[name].test(value);
//     return fieldValidity;
// }

// function updateForm(fieldName,fieldValue,fieldValidity){
//     form[fieldName] = {value:fieldValue,validity:fieldValidity};
// }

// function formatFieldForValidity(name,value){
//     return value;
// }

// function formatFieldForDisplay(name,value){
//     return value;
// }

// function updateFieldDisplay(field,fieldValidity,displayValue){
//     field.value = displayValue;
//     if(!fieldValidity){
//         field.classList.add("error");
//     } else {
//         field.classList.remove("error");
//     }
// }

// function updateButtonDisplay(){
//     if(canResetForm()){
//         buttons["reset"].disabled = false;
//     }
//     else{
//         buttons["reset"].disabled = true;
//     }
//     if(isFormValid()){
//         buttons["submit"].disabled = false;
//     }
//     else{
//         buttons["submit"].disabled = true;
//     }
// }

// function formFieldUpdated(ev){
//     const field = ev.target;
//     const pureValue = formatFieldForValidity(field.name,field.value);
//     const fieldValidity = isFieldValid(field.name,pureValue);
//     const displayValue = formatFieldForDisplay(field.name,field.value);
//     updateForm(field.name,pureValue,fieldValidity);
//     updateFieldDisplay(field,fieldValidity,displayValue);
//     updateButtonDisplay();
// }

// function formButtonClicked(ev){
//     console.log(form);
// }

// (function(){
//     let inputFields = document.getElementsByTagName("input");
//     Array.prototype.forEach.call(inputFields,input => {
//         switch(input.type){
//             case "text" : input.onkeyup = formFieldUpdated; break;
//             case "password" : input.onkeyup  = formFieldUpdated; break;
//             case "button" : input.onclick = formButtonClicked; break;
//             default : null;
//         }
//     });
// })();