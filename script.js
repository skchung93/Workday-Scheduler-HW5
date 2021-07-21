//variables
var timeBlockGoHere = document.getElementById('container');
var currentMoment = moment().format('dddd, MMMM Do, YYYY, h:mm:ss A');
// var scheduledTime = i;

// display of current day & time
$('#currentDay').text(currentMoment);


//code for timeblocks -- for loop to create a new row for every hour of the day
//i = 9 for 9 AM, to 17 for 5 pm.
function workdayCalendar(){
    for(i = 9; i <= 17; i++){
    // variable to track what 'i' is during the for loop in terms of hours
    var currentHour = moment(i, 'hh').format('LT');
    // creating the divs with class = row
    var row = document.createElement('div');
    row.classList.add('row');
   

    //creating the divs with class = hour
    var hour = document.createElement('div');
    hour.classList.add('hour', 'time-block', 'col-2');
    var text = document.createTextNode(currentHour);
    hour.appendChild(text);


    //creating the div with class = description
    var description = document.createElement('div');
    description.classList.add('description');

    //appending everything to make hierarchy relationships in DOM?
    timeBlockGoHere.append(row);
    row.append(hour);
    row.append(description);
    
    //code to indicate past, present or futurefunction ppF(){
    if (moment().hour() === currentHour){
        description.classList.add('present');
    }else if(moment().hour() < currentHour){
        description.classList.add('future');
    }else{
        description.classList.add('past');
    }
}
}   


//code to enter event

//submit/save button


//code to save into local storage

workdayCalendar()