let rightNow = moment().format("dddd, MMM Do YYYY"); {
    currentDay.textContent = moment().format("dddd, MMMM Do YYYY");
};

$(".save-btn").on("click", function() {
    var time = $(this).siblings(".description").attr("id");
    var task = $(this).siblings(".description").val();
    console.log(time,task)
    localStorage.setItem(time, task);
});

let currentHour = moment().hour()

for (let i = 8;i <=18;i++) {
    var task = localStorage.getItem(i)
    $("#" + i).val(task)
    if(i < currentHour ) {
        $("#" +i).addClass("past")
    } else if ( i == currentHour) {
        $("#" +i).addClass("present")
    } else {
        $("#" +i).addClass("future")
    }
}


