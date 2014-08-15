(function(){
  //Create the HTML display
  var answer = 0;

    //Input handler
    var user_input = document.getElementById("user_input");
    var button = document.getElementById("find");

    //Capture the input values
    button.onclick = function (){
      //Capture the values, trim ending space, split them
      var splittheinputs = user_input.value.trim().split(" ");
      //Loop the values through the whatdahex function below
      for (k = 0; k < splittheinputs.length; k++){
        whatdahex(splittheinputs[k]);
      }
    }

  //Processing input
  function whatdahex (string){
    //Turn the hex values into decimals using parseint
    var hextoDecimal = parseInt(string, 16);
    //Turn decimals to binary
    var decimalToBinary = hextoDecimal.toString(2)
    //Put decimal values into an array
    var decimalArray = decimalToBinary.split("");
    //Subtract the array from 8 (size of map) to get number of zeros to add
    var numberOfZerosToAdd = 8 - decimalArray.length;
    //Create an empty array
    var concatArray = [];
    //Loop through number of zeros and add 0's into the empty array
    for (i = 0; i < numberOfZerosToAdd; i++){
      concatArray.push("0");
    //Combine the two arrays
    var combinedArray = concatArray.concat(decimalArray);

    //Convert the array into X's
    for (j = 0; j < combinedArray.length; j++){
      if(combinedArray[j] === "1"){
        combinedArray[j] = "X";
      }
    }
    };
    console.log(combinedArray);
  };
})();
