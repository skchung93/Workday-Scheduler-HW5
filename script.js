//variables
var timeBlockGoHere = document.getElementById('container');
var currentMoment = moment().format('dddd, MMMM Do, YYYY, h:mm:ss A');

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
    row.classList.add('row', 'time-block');   

    //creating the divs with class = hour
    var hour = document.createElement('div');
    hour.classList.add('hour', 'col-2');
    var text = document.createTextNode(currentHour);
    hour.appendChild(text);

    //creating the div with class = description
    var description = document.createElement('div');
    description.classList.add('description', 'col-9', 'd-flex');

    //creating <textarea> so user can input their text
    var userInput = document.createElement('textarea');
    userInput.classList.add('flex-fill');


    // creating the save button with class = saveBtn
    var saveButton = document.createElement('button');
    saveButton.classList.add('saveBtn', 'd-flex', 'col-1', 'justify-content-center', 'align-items-center');

    // creating the <i> tag so we can input the save button thing
    var buttonIcon = document.createElement("i");
    buttonIcon.classList.add('fas', 'fa-save');

    //appending everything to make hierarchy relationships in DOM?
    timeBlockGoHere.append(row);
    row.append(hour);
    row.append(description);
    row.append(saveButton);
    description.append(userInput);
    saveButton.append(buttonIcon);
    
    //code to indicate past, present or future (i represents the hour due to the FOR loop)
    if (moment().format('HH') == i){
        description.classList.add('present');
    }else if(moment().format('HH') < i){
        description.classList.add('future');
    }else{
        description.classList.add('past');
    }

}
}   

//code to save into local storage
var save_button = document.getElementsByTagName('button');
save_button.onclick = saveStuff;

function saveStuff(){
    var input = document.getElementsByTagName('textarea');
    localStorage.setItem('to-do', input.value);
    var inputValue = localStorage.getItem('to-do');
}


workdayCalendar()