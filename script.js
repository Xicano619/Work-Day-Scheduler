$(document).ready(function(){
    // Create variable for moment live date.
    var m = moment();
      
    // Display Live-date.
    $("#currentDay").text(m.format('LLL'));
    
    });
//    Coordinate the .past .present .future time block with live date.
    // var colorTimeBlock = $("row time-block").css(past.present.future).text(m);
     
       
