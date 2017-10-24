const wordList = {
    noun: ['man','dog','balloon','firetruck'],
    verb: ['run','stand','play','sing'],
    adjective: ['huge','tiny','silly','sleepy'],
    adverb: ['quickly','slowly','eerily','haphazardly']
  }
  $(document).ready( initializeApp );
  function initializeApp(){
    applyEventListeners();
  }
  function applyEventListeners(){
    $("#swapButton").click( swapWords );
  }

//   function randomNum (){
//       Math.floor(Math.random())
//   }
  
  function swapWords(){
    console.log(wordList);
    var exchangeSpan = $(".exchange");
    for (var i = 0; i < exchangeSpan.length; i++){
        var wordtypeValue = exchangeSpan[i].getAttribute("wordtype")
        var randomNum = Math.floor(Math.random() * wordList[wordtypeValue].length)
        var randomWord = wordList[wordtypeValue][randomNum];
        if (exchangeSpan[i].hasAttribute("gerund")) {
            randomWord += "ing" 
        };
        exchangeSpan[i].innerHTML = randomWord;
        // switch (wordtypeValue) {
        //     case "verb" :
        //     let num = Math.floor(Math.random() * wordList.verb.length);
        //     var verbWord = wordList.verb[num];
        //     exchangeSpan[i].innerHTML = verbWord;
        //     break;
        //     case "noun" :
        //     let num = Math.floor(Math.random() * wordList.verb.length);
        //     var verbWord = wordList.verb[num];
        //     exchangeSpan[i].innerHTML = verbWord;
        //     break;
        //     case "verb" :
        //     let num = Math.floor(Math.random() * wordList.verb.length);
        //     var verbWord = wordList.verb[num];
        //     exchangeSpan[i].innerHTML = verbWord;
        //     break;
        //     case "verb" :
        //     let num = Math.floor(Math.random() * wordList.verb.length);
        //     var verbWord = wordList.verb[num];
        //     exchangeSpan[i].innerHTML = verbWord;
        //     break;
        // }

    }
    //select and store (the array) of all the elements with a class of "exchange"
    //loop through all the elements, getting an index
      //get one element from the element array above
      //get the value of the wordtype attribute of the element.  this will be the type of word that you is needed
      //get and store a random number corresponding to the word array above.  For example, if the wordType attribute was 'noun' , get the noun property from the wordList
      //get the word from the word list and store it
      //if the element has a 'gerund' attribute of '' (ie just the property, no value)
          //add 'ing' to the end of the word you selected above
      //
      //change the element's text to the new word
    //end of loop
  }