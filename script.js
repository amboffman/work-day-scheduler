//display current date in current date id
var now = JSON.stringify(moment());
var todaysDate = moment().format("LL");
$("#currentDay").text(todaysDate);
console.log(now);
// display 8am to 5pm
// style past as past
// style present as present
// style future as future
//user can enter text into timeslot
//when user hits save button on that timeslot
// store in local storage