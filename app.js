
  //Input handler
  var user_input = document.getElementById("user_input");
  var button = document.getElementById("find");

  button.onclick = function (){
    var splittheinputs = user_input.value.trim().split(" ");
    // console.log(splittheinputs);
    for (k = 0; k < splittheinputs.length; k++){
      // console.log(splittheinputs[k]);
      whatdahex(splittheinputs[k]);
    }
  }


  //Processing input
function whatdahex (string){
  var hextoDecimal = parseInt(string, 16);
  var decimalToBinary = hextoDecimal.toString(2)
  var decimalArray = decimalToBinary.split("");
  // console.log(decimalArray);
  var numberOfZerosToAdd = 8 - decimalArray.length;
  var concatArray = [];
  for (i = 0; i < numberOfZerosToAdd; i++){
    concatArray.push("0");
  //Combine the two arrays
  var combinedArray = concatArray.concat(decimalArray);
  // console.log(combinedArray);

  //Convert the array into X's
  for (j = 0; j < combinedArray.length; j++){
    if(combinedArray[j] === "1"){
      combinedArray[j] = "X";
    }
  }
  };
  console.log(combinedArray);
};


// })();