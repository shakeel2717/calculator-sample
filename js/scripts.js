$(document).ready(function () {
    $("#calculate").click(function () {
        console.log("calculate button clicked");
        var fromInput = $("#from").val();
        var mathInput = $("#math").val();
        var toInput = $("#to").val();
        console.log("from: " + fromInput);
        console.log("Math: " + mathInput);
        console.log("To: " + toInput);
        // if (mathInput == "/") {
        //     alert("/");

        // } else if(mathInput == "-") {
        //     alert("-");
        // } else if(mathInput == "*"){
        //     alert("*");
        // }
    });
});