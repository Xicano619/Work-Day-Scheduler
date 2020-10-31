$(document).ready(function(){
    // Create variable for moment live date.
    var m = moment();
      
    // Display Live-date.
    $("#currentDay").text(m.format('LLL'));
    
    //Coordinate the classes .past .present .future time block with live date.
    setInterval(function(){ 
    $(".time-block").each(function(){
       var time = moment().hour();
        var data = $(this).data("time");
        if (data < time){
            $(this).addClass("past");
        }else if (data === time){
            $(this).addClass("present");
            $(this).removeClass("past");
        }else{
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
        
     });},2000);
    
    
    // Get saveBtn to work.
    $(".saveBtn").on("click",function(){
        var saveNote = $(this).parent().data("time");
        var textarea = $(this).siblings("textarea").val();

        localStorage.setItem(saveNote, textarea);
    });
    // get local stored data and populace textarea.
    // $(".time-block[data-time='9'] textarea").val(localStorage.getItem("9"));
    
});
     
       
