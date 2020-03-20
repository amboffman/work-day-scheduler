var now = JSON.stringify(moment());
var todaysDate = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment();
var currentHour = moment().hours();
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
var save = document.querySelectorAll(".saveBtn");
var tasks = [];
var placement =[];
init();

save.addEventListener("click", function (event) {
    event.preventDefault();

    var taskText = inputTask.value.trim();

    if (taskText === "") {
        return;
    }

    tasks.push(taskText);
    inputTask.value = "";
  
    storeTasks();
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