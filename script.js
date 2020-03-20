//display current date in current date id
var now = JSON.stringify(moment());
var todaysDate = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment();
// var currentHour = moment().hours();
var currentHour = 14;
var timeBlock = document.querySelectorAll(".time-block")
// var timeBlockHour = "";
$("#currentDay").text(todaysDate);
//select each time block div
$(timeBlock).each(function () {
    //select the id of that div
    //split the id
    timeBlockHour = parseInt(this.id.split("-")[1]);
    if (timeBlockHour < currentHour) {
        // then style as past
        $(this).attr("class", "row time-block past");
    }
    // if the hour value is equal to the current hour
    if (timeBlockHour === currentHour) {
        // then style as present 
        $(this).attr("class", "row time-block present");
    }
    // if hour value is greater than current hour
    if (timeBlockHour > currentHour) {
        //then style as future
        $(this).attr("class", "row time-block future");
    }
})


console.log("Final time hour block: " + timeBlockHour);
// if the hour value is less that current hour
//If user hits the save button

//store in local storage
