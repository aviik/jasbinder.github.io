
$("#demonstrate").hide();
$("#mytoggy2").hide();


$("#mytoggy").click(function(){
  $("#demonstrate").show();
  $("#mytoggy").hide();
  $("#mytoggy2").show();
});

$("#mytoggy2").click(function(){
  $("#demonstrate").hide();
  $("#mytoggy").show();
  $("#mytoggy2").hide();
});
