// //Hex to Decimal
// function ConvertToDec(){
//   var hexNumber = document.getElementById('NumberInput').value;
//   //parse the hex value
//   var decNumber = parseInt(hexNumber,16);
//   console.log(decNumber)
//   document.getElementById('Result').value = decNumber;


// //Decimal to Binary
//  function ConvertToBinary(){
//   var numberValue = document.getElementById('NumberInput').value;
//   var decNumber = Number(numberValue);
//   var binaryNumber = decNumber.toString(2).toUpperCase();

//Input handler


//Validate the inputs are Hex


//Processing input
var hexInput = "7E";
var hextoDecimal = parseInt(hexInput, 16);
var decimalToBinary = hextoDecimal.toString(2)
var decimalArray = decimalToBinary.split("");
var numberOfZerosToAdd = 8 - decimalArray.length;
var concatArray = [];
for (i = 0; i < numberOfZerosToAdd; i++){
  concatArray.push(0);
};

//Combine the two arrays
var combinedArray = concatArray.concat(decimalArray);
console.log(combinedArray);

//Convert the array into X's
for (j = 0; j < combinedArray.length; j++){
  if(combinedArray[j] === "1"){
    combinedArray[j] = "X";
  }
}
console.log(combinedArray);