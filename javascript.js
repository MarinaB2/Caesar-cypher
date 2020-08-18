
 
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var fullAlphabet = alphabet + alphabet + alphabet;
  

  function encrypt(){

    var cipherText = document.getElementById("textInput").value;
    var shiftValue = document.getElementById("shiftNumber").value;

    shiftValue = (shiftValue % alphabet.length);
    var result = '';
  
    for(i=0; i < cipherText.length; i++){

       var letter = cipherText[i];
       var upper = (letter == letter.toUpperCase());
       letter = letter.toLowerCase();
      
       var index = alphabet.indexOf(letter);
         index = ((index + shiftValue) + alphabet.length);
         
         var nextLetter = fullAlphabet[index];

         if(upper) nextLetter = nextLetter.toUpperCase();

         result += nextLetter;
       
    }
      
    document.getElementById("output").innerHTML = result;
  }

  function decrypt(){

    var cipherText = document.getElementById("textInput").value;
    var shiftValue = document.getElementById("shiftNumber").value;

    shiftValue = (shiftValue % alphabet.length);
    var result = '';
  
    for(i=0; i < cipherText.length; i++){

       var letter = cipherText[i];
       var upper = (letter == letter.toUpperCase());
       letter = letter.toLowerCase();
      
       var index = alphabet.indexOf(letter);
         index = ((index - shiftValue) + alphabet.length);

         var nextLetter = fullAlphabet[index];

         if(upper) nextLetter = nextLetter.toUpperCase();
         result += nextLetter;
       
    }
      
    document.getElementById("output").innerHTML = result;
  }