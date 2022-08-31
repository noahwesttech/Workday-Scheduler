var userBlocks = [];
var hourBlocks = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];
//variable to save current time to reference if time slot has passed
var currentTime = moment().format("HH") + ":00";

var domContainer = document.querySelector("#timeslot-container");
//inserting time and day and time into Current day

window.setInterval(function () {
  $("#currentDay").text(moment().format("ddd MM/DD h:mm:ss a"));
}, 1000);

//creates row to store time block

var displayTimeBlocks = function () {
    localTasks();

  //for loop runs for each time stored in hourBlocks
  for (i = 0; i < hourBlocks.length; i++) {
    //creates div to hold task
    var taskRow = document.createElement("div");
    taskRow.classList = "row time-block justify-content-center";
    //sets id of each elemnt to index value
    taskRow.id = hourBlocks.indexOf(hourBlocks[i]);

    //create timeslot

    var timeSlot = document.createElement("h4");
    timeSlot.classList = "hour col-md-2";
    timeSlot.id = hourBlocks.indexOf(hourBlocks[i]);
    timeSlot.textContent = hourBlocks[i];
    //appending to task row
    taskRow.appendChild(timeSlot);

    //create input feild
    var taskInput = document.createElement("input");
    taskInput.classList = "time-block clearable col-md-9 description p-0";
    taskInput.id = "input" + hourBlocks.indexOf(hourBlocks[i]);

//space for local storage if statement to fill out info with parsed local storage
if (userBlocks[i]) {
    taskInput.value = userBlocks[i];
  }
  taskRow.appendChild(taskInput);

//adds task info to middle of taskrow
    taskRow.appendChild(taskInput);


    //create save button
    var saveBtn = document.createElement("button");
    saveBtn.classList = "saveBtn col-md-1";
    saveBtn.id = "btn" + hourBlocks.indexOf(hourBlocks[i]);
    saveBtn.innerHTML = "<i class='far fa-save fa-lg'></i>";
    
    //adds save button to task row
    taskRow.appendChild(saveBtn);

//adding created elements to the form displayed
    domContainer.appendChild(taskRow);

    if (currentTime === hourBlocks[i]){
    taskInput.classList = "present col-md-9 description p-0"
    }
    
    if (currentTime < hourBlocks[i]){
        taskInput.classList = "future col-md-9 description p-0"
        }
        
    if (currentTime > hourBlocks[i]){
        taskInput.classList = "past col-md-9 description p-0"
        }
  }
};


displayTimeBlocks();

//code for save button
$("button").on("click", function () {
    var tempTask = [];
    for (var i = 0; i < hourBlocks.length; i++){
        tempTask.push(document.getElementsByTagName("input")[i].value);
    }
    userBlocks = tempTask;
    localStorage.setItem("tasks", JSON.stringify(userBlocks));
});

//function to grab local storage
function localTasks() {
    if (JSON.parse(localStorage.getItem("tasks"))){
        userBlocks = JSON.parse(localStorage.getItem("tasks"));
    }
}