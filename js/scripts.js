$(document).ready(function() {
    $("#calculate").click(function(){
        var x = parseInt($("#from").val());
        var y = parseInt($("#to").val());
        var math = $("#math").val();
        if (math == "+") {
            var answer = x+y;
            $("#answer").val(answer);
        }
    });
});