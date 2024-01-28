const timetable = [
    {
        subj : "CSE 310",
        room : "36-502",
        time : "9:00 am"
    },
    {
        subj : "CSE 422",
        room : "28-802",
        time : "10:00 am"
    },
    {
        subj : "CSE 399",
        room : "34-502",
        time : "11:00 am"
    },{
        subj : "CSE 323",
        room : "36-802",
        time : "12:00 am"
    }
]

function workingDay(){
    timetable.forEach((item)=>{
            const tt_display = document.querySelector('.tt_display');
            let box = document.createElement('div');
            box.classList.add('tt_display_box');
            box.innerHTML = `
                    <p class="subj">
                        ${item.subj}
                    </p>
                    <p class="room">
                        ${item.room}
                    </p>
                    <div class="time">
                        ${item.time}
                    </div>
            `;
            tt_display.append(box);
    });
}

function Holiday(){
    const tt_display = document.querySelector('.tt_display');
    tt_display.innerHTML = "";
    let box = document.createElement('p');
    box.classList.add('holiday_display');
    box.innerHTML = `No TimeTable Available`;
    tt_display.append(box);
}

let today = "w";
if(today == "w"){
    workingDay();
}
else{
    Holiday();
}
