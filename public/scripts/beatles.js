// Arrays of Quotes
var paulQuotes = ["In the end, the love you take is equal to the love you make.", "I used to think anyone doing anything weird was weird. Now I know that it is the people that call others weird that are weird.", "You can judge a man's true character by the way he treats his fellow animals.", "If slaughterhouses had glass walls, everyone would be a vegetarian.", "I don't work at being ordinary.", "I am alive and well and unconcerned about the rumors of my death. But if I were dead, I would be the last to know.", "Think globally, act locally.", "And what's the point of changing when I'm happy as I am?", "Animation is not just for children - it's also for adults who take drugs."]
var johnQuotes = ["Everything is clearer when you're in love.", "You don't need anybody to tell you who you are or what you are. You are what you are!", "Reality leaves a lot to the imagination.", "Count your age by friends, not years. Count your life by smiles, not tears.", "As usual, there is a great woman behind every idiot.", "The more I see, the less I know for sure.", "A dream you dream alone is only a dream. A dream you dream together is reality.", "One thing you can't hide - is when you're crippled inside.", "If everyone demanded peace instead of another television set, then there'd be peace."];
var georgeQuotes = ["The Beatles saved the world from boredom", "Love one another.", "I wanted to be successful, not famous.", "If you don't know where you're going, any road will take you there.", "All the world is birthday cake, so take a piece, but not too much.", "Try to realize it's all within yourself no one else can make you change, and to see you're only very small and life flows on within you and without you.", "When you've seen beyond yourself, then you may find, peace of mind is waiting there.", "With our love, we could save the world.", "As long as you hate, there will be people to hate."];
var ringoQuotes = ["Drumming is my middle name.", "That's all drugs and alcohol do, they cut off your emotions in the end.", "People only look at me as a Beatle, but my friends look at me as a whole person. That's how life works, but it's not bugging me anymore.", "I was the new boy. It was like joining a new class at school where everybody knows everybody else but me.", "I've got blisters on me fingers!", "The Beatles were just four guys that loved each other. That's all they'll ever be.", "In the band I was in, we knew when we’d done the take, because it just feels good. It’s like golf. When you hit that ball right, you know. You feel it – you feel the connection. And connecting is good."];

  //randomize arrays -- Laurens Holst on stackoverflow
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  shuffleArray(paulQuotes);
  shuffleArray(johnQuotes);
  shuffleArray(georgeQuotes);
  shuffleArray(ringoQuotes);

  // add counter to beginning of array
  paulQuotes.unshift(1);
  johnQuotes.unshift(1);
  georgeQuotes.unshift(1);
  ringoQuotes.unshift(1);

  // get quote
  var getQuote = function(arr) {
    if (arr[0] == arr.length) {
      arr[0] = 1;
    }
    var index = arr[0];
    arr[0]++;
    return arr[index];
  }


$(document).ready(function() {    // start ready
  // Hover functions
  var imageUrl = "";
  $('button').hover(function() {
    imageUrl = $(this).css("background");
    $(this).css("background", "linear-gradient(0deg, #000, transparent 90%), " + imageUrl);
    $(this).html("<p>" + $(this).data("member") + "</p>");    //adds member name 
  }, function() {
    $(this).css("background", imageUrl);
    $(this).html("");
  });
  
  




  

  // generate quote when button is clicked
  $('button').click(function() {
    // get author data
    var author = $(this).data("member");
    // show overlay
    $('.overlay').fadeIn(200);
    $('#quote-text').fadeIn(200);
    
    //initialize array variable
    var arr = [];
    //get author's respective array
    switch (author) {
    case "Paul McCartney":
      arr = paulQuotes;
      break;
    case "John Lennon":
      arr = johnQuotes;
      break;
    case "George Harrison":
      arr = georgeQuotes;
      break;
    case "Ringo Starr":
      arr = ringoQuotes;
      break;
  }
    
    //get quote 
    var quote = getQuote(arr);


  
  //Need to change ' to %27 for twitter
  var tweetQuote = quote.replace(/\'/g, "%27");
  //quote = quote.replace(/\'/g, "&#39;");
      
  //display quote and twitter button in div
  $('#quote-text').html("<h1>\"" + quote + "\"</h1><i><h2>-" + author + "</h2></i>" + "<a href='https://twitter.com/intent/tweet?text=\"" + tweetQuote + "\" - " + author + "'><button class='tweet'><i class='fa fa-twitter'></i>Tweet it!</button></a>");
  
  // when overlay is clicked, hide
  $('.overlay').on("click", function() {
    $('.overlay').fadeOut(200);
    $('#quote-text').fadeOut(200);
  });
 });
}); // end ready