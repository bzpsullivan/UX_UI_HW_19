console.log("Hello, World.");
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
  });
  $(document).ready(function(){
    $("#flipUp").click(function(){
      $("#panel").slideUp("slow");
    });
  });