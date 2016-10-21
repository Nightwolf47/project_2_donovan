$(document).ready(function () {
    var replacePrisonerDoor = $("#replacePrisonerDoor").html();
    var replaceMoriaDoor = $("#replaceMoriaDoor").html();
    var replaceLabyrinthDoor = $("#replaceLabyrinthDoor").html();

    $("#prisonerDoor").click(function replacePrisoner() {
        $("#start").html(replacePrisonerDoor);
    });

    $("#moriaDoor").click(function replaceMoria() {
        $("#start").html(replaceMoriaDoor);
    });

    $("#labyrinthDoor").click(function replaceLabyrinth() {
        $("#start").html(replaceLabyrinthDoor);
    });

    var theVial = $("#theVial").html();
    $(document).on("click", "#Vial", function () {
        $("#Vial").click(function () {
            $("#start").html(theVial);
        });
    });
    
    var theHammer = $("#theHammer").html();
    $(document).on("click", "#Hammer", function () {
        $("#Hammer").click(function () {
            $("#start").html(theHammer);
        });
    });
    
    var left = $("#left").html();
    $(document).on("click", "#Left", function () {
        $("#Left").click(function () {
            $("#start").html(left);
        });
    });
    
    var right = $("#right").html();
    $(document).on("click", "#Right", function () {
        $("#Right").click(function () {
            $("#start").html(right);
        });
        
        datetoday = new Date();
        timenow=datetoday.getTime();
        datetoday.setTime(timenow);
        time = datetoday.getHours();
        if (time > 18){
            $("#greeting").html("Good Evening")
        }else if (time > 12){
            $("#greeting").html("Good Afternoon")
        }else {
            $("#greeting").html("Good Morning")
        };
    });
    
    var dontLetGo = $("#dontLetGo").html();
    $(document).on("click", "#dont", function () {
        $("#dont").click(function () {
            $("#start").html(dontLetGo);
        });
    });
    
    var youCanLetGo = $("#youCanLetGo").html();
    $(document).on("click", "#letGo", function () {
        $("#letGo").click(function () {
            $("#start").html(youCanLetGo);
        });
    });
});
