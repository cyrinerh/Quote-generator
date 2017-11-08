 var quote = ["<h3>You cannot shake hands with a clenched fist. -Indira Gandhi</h3>", "<h3>&quot;There\'s a difference between a philosophy and a bumper sticker.&quot;<br /><small>-Charles M. Schulz</small></h3>","<h3>&quot;We are what we repeatedly do. Excellence, therefore, is not an act but a habit.&quot;<br /><small>-Aristotle</small></h3>",
 "<h3>&quot;Take calculated risks. That is quite different from being rash.&quot;<br /><small>-George S. Patton</small></h3>","<h3>&quot;If you do not hope, you will not find what is beyond your hopes.&quot;<br /><small>-St. Clement of Alexandra</small></h3>","<h3>&quot;Dream big and dare to fail.&quot;<br /><small>-Norman Vaughan</small></h3>","<h3>&quot;With will one can do anything.&quot;<br /><small>-Samuel Smiles</small></h3>","<h3>&quot;We are all inventors, each sailing out on a voyage of discovery, guided each by a private chart, of which there is no duplicate. The world is all gates, all opportunities.&quot;<br /><small>-Ralph Waldo Emerson</small></h3>","<h3>&quot;When you get into a tight place and everything goes against you, till it seems you could not hang on a minute longer, never give up then, for that is just the place and time that the tide will turn.&quot;<br /><small>-Harriet Beecher Stowe</small></h3>","<h3>&quot;You cannot shake hands with a clenched fist.&quot;<br /><small>-Indira Gandhi</small></h3>"]

 var color = ["#00ffdd","blue","gray","black","yellow","green"];

  function tweet(message) {
    window.open('https://twitter.com/intent/tweet?&text='   + encodeURI(message));
  }
  function tweetHandler(msg) {
    tweet(msg); 
  }
 $(document).ready(function() {

  var msg = quote[0];
  $('.message h3').html(msg);

  $("#getMessage").on("click", function(){

    var randomquote = Math.floor(Math.random() * quote.length);
    var randomColor = color[Math.floor(Math.random() * color.length)];
    msg = quote[randomquote];
    $(".message").html(msg);
    $(".body").css("background-color",randomColor);
    $(".message").css("color",randomColor);

  });
  $('#tweetMessage').on('click', function () {
    tweetHandler($(msg).text())
  });
  


});


