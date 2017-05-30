console.log("HI JS");

var body = document.getElementById("page");
var leftarrow = document.getElementById("leftside");
var rightarrow = document.getElementById("rightside");

$(document).ready(function() {
    $("#page").mousedown(function() {
        $("#leftside").hide();
        $("#rightside").hide();
    });
});
$(document).ready(function() {
    $("#page").mouseup(function() {
        if (Math.floor(Math.random() * 899 + 100) % 2 === 0) {
            $("#leftside").hide();
            $("#rightside").show();
        } else{
        	$("#leftside").show();
        	$("#rightside").hide();
        }
    })
})
