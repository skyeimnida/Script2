function notnum(){
    alert('Error! Input is  not a number');
}

function empty(){
    alert('Error! Empty Field');
}

// Get Inputs //
var Product = "";
var Price = 0;
var Quantity = 0;
var Tcash = 0;
var InputCash = 0;
var Change = 0;

// Declaring the inputs //
function getProduct() {

        Product = document.getElementById('Product').value;
}

function getPrice() {

        Price = Number(document.getElementById('Price').value);
}

function getQuantity() {

    Quantity = Number(document.getElementById('Quantity').value);
}

function getInputCash() {

    InputCash = Number(document.getElementById('InputCash').value);
}

// MAIN FUCNTIONS //
function GetTotal() {
    getProduct();
    getQuantity();
    getPrice();
        if(isNaN(Quantity) || isNaN(Price)){
            notnum();
        }
        else if(Quantity=="" || Price=="" || Product == ""){
            empty();
        }
        else {
        Tcash = Quantity * Price;
        document.getElementById("Tcash").innerHTML = Tcash;
        }
}

function getSave(){
    getInputCash();
    if (getInputCash < Tcash) {
    }
    else if (InputCash == ""){

    }
    else{
        Change = InputCash - Tcash;
        document.getElementById("Prc").innerHTML = Price;
        document.getElementById("Qty").innerHTML = Quantity;
        document.getElementById("Total").innerHTML = Tcash;
        document.getElementById("Mny").innerHTML = InputCash;
        document.getElementById("Change").innerHTML = Change;
    }
    
    
}