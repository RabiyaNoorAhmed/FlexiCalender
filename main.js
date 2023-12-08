const currentDate = document.querySelector(".current-date"),
    daysTag = document.querySelector(".days"),
    prevNextIcon = document.querySelectorAll(".icons span");
// new date, month, year
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"]

const renderCalender = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // first date of the month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // last date of the month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // last day of the month
        lastDateoflastMonth = new Date(currYear, currMonth, 0).getDate(); // last date of the month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateoflastMonth - i + 1}</li>`;
    }


    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }


    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalender();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;


        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();

        }else{
            date = new Date();
        }


        renderCalender();
    })
})