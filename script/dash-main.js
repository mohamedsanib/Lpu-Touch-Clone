const grid_items = [
    {
        name: "Annouce",
        img: "image/dashboard-img/announce-img.png",
        pop: 10
    },
    {
        name: "Fee statement",
        img: "image/dashboard-img/fee-statement.png",
        pop: 0
    },
    {
        name: "Attendance",
        img: "image/dashboard-img/attendance.png",
        pop: 92
    },
    {
        name: "Assignment",
        img: "image/dashboard-img/assingment.png",
        pop: 12
    },
    {
        name: "Result",
        img: "image/dashboard-img/result.png",
        pop: 7.9
    },
    {
        name: "Exams",
        img: "image/dashboard-img/exams.png",
        pop: 7.9
    },
    {
        name: "Library",
        img: "image/dashboard-img/library.png",
        pop: 0
    },
    {
        name: "Teacher on Leave",
        img: "image/dashboard-img/teacherLeave.png",
        pop: 0
    },
    {
        name: "Time Table",
        img: "image/dashboard-img/timetable.png",
        pop: 0
    }
]

const grid = document.querySelector('.grid_bar');

grid_items.forEach((item) => {
    let box = document.createElement(`div`);
    box.classList.add('grid_box');
    box.innerHTML = `<div class="grid_img">
                        <img src="${item.img}" alt="">
                    </div>
                    <p class="grid_name">
                        ${item.name}
                    </p>`
    grid.append(box);
})

function showSidebar(){
    const side_bar = document.querySelector('.side_bar');
    const overlay = document.querySelector('.overlay');
    if(side_bar.classList.contains('js_show')){
        overlay.classList.remove('js_overlay');
        side_bar.classList.remove('js_show');
    }
    else{
        overlay.classList.add('js_overlay');
        side_bar.classList.add('js_show');
    }
}
const side_btn = document.querySelector('.side_panel_btn');
side_btn.addEventListener("click", showSidebar);


function logOut(){
    window.location.replace("login.html");
}
const log_out = document.querySelector('.log_out');
log_out.addEventListener("click", logOut);