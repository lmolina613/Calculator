"use strict";

window.onload = init;

function init(){
    const number1Field = document.querySelector("#number1Field");
    const number2Field = document.querySelector("#number2Field");
    const answerField = document.querySelector("#answerField");
    const addBtn = document.querySelector("#addBtn");
    addBtn.onclick = addBtnClicked;
    const subtractBtn = document.querySelector("#subtractBtn");
    subtractBtn.onclick = subtractBtnClicked;
    const multiplyBtn = document.querySelector("#multiplyBtn");
    multiplyBtn.onclick = multiplyBtnClicked;
    const divideBtn = document.querySelector("#divideBtn");
    divideBtn.onclick = divideBtnClicked; 
}

function addBtnClicked(){
    let addition = parseFloat(number1Field.value) + parseFloat(number2Field.value);
    answerField.value = addition;
}
function subtractBtnClicked(){
    let subtraction = parseFloat(number1Field.value) - parseFloat(number2Field.value);
    answerField.value = subtraction;
}
function multiplyBtnClicked(){
    let multiply = parseFloat(number1Field.value) * parseFloat(number2Field.value);
    answerField.value = multiplication;
}
function divideBtnClicked(){
    let divide = parseFloat(number1Field.value) / parseFloat(number2Field.value);
    answerField.value = division;
}
