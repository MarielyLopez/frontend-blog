// Javascript Code.
$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });






//Dates and hours in coments....
    $(".button1").click(function() {
    var m = new Date();
    var dateString =
    m.getUTCFullYear() +"/"+
    ("0" + (m.getUTCMonth()+1)).slice(-2) +"/"+
    ("0" + m.getUTCDate()).slice(-2) + " " +
    ("0" + m.getUTCHours()).slice(-2) + ":" +
    ("0" + m.getUTCMinutes()).slice(-2) + ":" +
    ("0" + m.getUTCSeconds()).slice(-2);
        var toAdd2 = $("input[name=checkListItem2P1]").val();
        var toAdd = $("input[name=checkListItemP1]").val();
        $("input").val("");
        $(".list1").append("<div class='item'>" +"Usuario: "+ toAdd +"<br/>"+"comment: "+toAdd2+ "<br/>"+ dateString+"</div>" );
        });

    $(".button2").click(function() {
    var m = new Date();
    var dateString =
    m.getUTCFullYear() +"/"+
    ("0" + (m.getUTCMonth()+1)).slice(-2) +"/"+
    ("0" + m.getUTCDate()).slice(-2) + " " +
    ("0" + m.getUTCHours()).slice(-2) + ":" +
    ("0" + m.getUTCMinutes()).slice(-2) + ":" +
    ("0" + m.getUTCSeconds()).slice(-2);
        var toAdd2 = $("input[name=checkListItem2P2]").val();
        var toAdd = $("input[name=checkListItemP2]").val();
        $("input").val("");
        $(".list2").append("<div class='item'>" +"Usuario: "+ toAdd +"<br/>"+"comment: "+toAdd2+ "<br/>"+ dateString+"</div>" );
        });


    $(".button3").click(function() {
    var m = new Date();
    var dateString =
    m.getUTCFullYear() +"/"+
    ("0" + (m.getUTCMonth()+1)).slice(-2) +"/"+
    ("0" + m.getUTCDate()).slice(-2) + " " +
    ("0" + m.getUTCHours()).slice(-2) + ":" +
    ("0" + m.getUTCMinutes()).slice(-2) + ":" +
    ("0" + m.getUTCSeconds()).slice(-2);
        var toAdd2 = $("input[name=checkListItem2]").val();
        var toAdd = $("input[name=checkListItem]").val();
        $("input").val("");
        $(".list3").append("<div class='item'>" +"Usuario: "+ toAdd +"<br/>"+"comment: "+toAdd2+ "<br/>"+ dateString+"</div>" );
        });

  $(this).load("_posts/posts.json", function(data){

//posts information
    var posts = JSON.parse(data);
    $(".titlePost1").html(posts['posts'][0]['title']);
    $(".contentPost1").html(posts['posts'][0]['content']);
    $(".datePost1").html(posts['posts'][0]['date']);

    $(".titlePost2").html(posts['posts'][1]['title']);
    $(".contentPost2").html(posts['posts'][1]['content']);
    $(".datePost2").html(posts['posts'][1]['date']);

    $(".titlePost3").html(posts['posts'][1]['title']);
    $(".contentPost3").html(posts['posts'][1]['content']);
    $(".datePost3").html(posts['posts'][1]['date']);


    //
  });
});




//This is the search box on the page!!!! 
jQuery.fn.extend({
    mark: function(search0, classCCSSsearch){
        var regex = new RegExp("(<[^>]*>)|("+ search0.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1") +')', 'ig');
        var newHtml=this.html(this.html().replace(regex, function(a, b, c){
            return (a.charAt(0) == "<") ? a : "<span class=\""+ classCCSSsearch +"\">" + a + "</span>"; //add to
        }));
        return newHtml;
    }

});

//To highlight text
function highlightText(){
    $('.searchValue1').mark(searButt.value,"searchColor");
    $('.searchValue2').mark(searButt.value,"searchColor");
    $('.searchValue3').mark(searButt.value,"searchColor");
    $('.searchValue4').mark(searButt.value,"searchColor");
    $('.searchValue5').mark(searButt.value,"searchColor");
    $('.searchValue6').mark(searButt.value,"searchColor");
  }