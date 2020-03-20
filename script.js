var now = JSON.stringify(moment());
var todaysDate = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment();
var currentHour = moment().hours();
// var currentHour = 12;
var timeBlock = document.querySelectorAll(".time-block");
    //display current date in current date id
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

var inputTask = document.querySelectorAll(".description");
var saveButtons = $(".saveBtn");
var tasks = [];
var placement =[];
init();

// check for value of time block in local storage
var time9 = localStorage.getItem("hour-9");
var time10 = localStorage.getItem("hour-10");
var time11 = localStorage.getItem("hour-11");
var time12 = localStorage.getItem("hour-12");
var time13 = localStorage.getItem("hour-13");
var time14 = localStorage.getItem("hour-14");
var time15 = localStorage.getItem("hour-15");
var time16 = localStorage.getItem("hour-16");
var time17 = localStorage.getItem("hour-17");

// set value of textaea in timeblock
$("#hour-9 textarea").val(time9);
$("#hour-10 textarea").val(time10);
$("#hour-11 textarea").val(time11);
$("#hour-12 textarea").val(time12);
$("#hour-13 textarea").val(time13);
$("#hour-14 textarea").val(time14);
$("#hour-15 textarea").val(time15);
$("#hour-16 textarea").val(time16);
$("#hour-17 textarea").val(time17);

saveButtons.on("click", function (event) {
    // grab the hour from the parent
    var hourGrab = $(this).parent().attr("id");
    console.log(hourGrab);
    // grab the user description
    var descriptionGrab = $(this).siblings("textarea").val().trim();
    console.log(descriptionGrab);
    // store the hour of the input
    // store the description the user input
    localStorage.setItem(hourGrab, descriptionGrab);
    // var taskText = inputTask.value.trim();

    // if (taskText === "") {
    //     return;
    // }

    // tasks.push(taskText);
    // inputTask.value = "";
  
    // storeTasks();
});
function storeTasks() {
    localStorage.setItem("description", JSON.stringify(tasks));
    localStorage.setItem(timeBlockHour.id, JSON.stringify(placement));
}
function init() {
    var storedTasks = JSON.parse(localStorage.getItem("description"));
    var storedID = JSON.parse(localStorage.getItem(timeBlockHour.id));
    if (storedTasks !== null) {
        tasks = storedTasks;
        $(placement).textContent = tasks;
    }
}