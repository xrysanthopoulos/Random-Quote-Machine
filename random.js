$(document).ready(function(){
  
  getQuote();
 var randomColor;
 var randomNum;
 var quote;
 var author;
  
  function getQuote() {
    
   var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
   var color = Math.floor(Math.random() * colors.length);
      $("html body").css({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".btn").css({
        backgroundColor: colors[color]
      }, 1000);
        
    var url="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      $(".quote").html('"'+data.quoteText+'"');
      quote=data.quoteText;
      $(".author").html("-"+data.quoteAuthor);
      author=data.quoteAuthor;
    });
    
  }
  
  $("#newQuote").on("click", function(){
    getQuote();
  });
  
  $("#tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" +('"'+quote+'"' +author));
  })
});