//How Jason would solve this problem

(function (){
  //Initialization stuff when the page first loads
  var maxLength = 8;
  var inputString = "18 3C 7E 7E 18 18 18 18"

  function processInputString(inputString) {
    var outputArray = [];
    var splitHexArray = inputString.split(" ");

    for (var i = 0; i < splitHexArray.length; i++){
      var currentValue = splitHexArray[i];
      var convertedValue = parseInt(currentValue, 16).toString(2);
      var outputPaddedValue = "";
      var paddingLength = maxLength - convertedValue.length;
      var tempPadding = "";

      for (var j = 0; j < paddingLength; j++) {
        tempPadding += "0";
      }

      outputPaddedValue = tempPadding + convertedValue;

      outputPaddedValue = outputPaddedValue.replace("1", "X", "g").replace("0", " ", "g");

      outputArray.push(outputPaddedValue);

    }

    return outputArray;

  }

  function  displayElements(elementArray){
    for (var i = 0; i < elementArray.length; i++) {
      var currentBinaryValue = elementArray[i];
      var containerElement = document.getElementById('container');
      var binaryRowElement = document.createElement('div');

      binaryRowElement.innerHTML = currentBinaryValue;

      containerElement.appendChild(binaryRowElement);

    }
  }

  var outputArray = processInputString(inputString);

  displayElements(outputArray);

})();