// Javascript Code.
$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".posts").html(posts['posts'][0]['title']);
    $(".posts2").html(posts['posts'][0]['date']);
    $(".posts3").html(posts['posts'][0]['date']);
    $(".posts4").html(posts['posts'][0]['date']);
    $(".posts5").html(posts['posts'][0]['date']);
    //
  });
});
