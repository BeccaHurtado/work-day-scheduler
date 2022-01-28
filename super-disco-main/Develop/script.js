$(".day-btn").on("click", function() {
    let current = new Date();
    let currentDay = String(current.getDate()).padStart(2, '0');
    let currentMonth = String(current.getMonth()+1).padStart(2, '0');
    let currentYear = current.getFullYear();
    let currentDate = currentMonth + '/ ' + currentDay +'/ ' + currentYear;
    
    document.querySelector('.day-btn').textContent = currentDate;
})

$(".description").on("click", "p", function(){
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

$(".description").on("blur", "textarea", function() {
    var text = $(this)
        .val()
        .trim();
    var status = $(this)
        .closest(".list-group")
        .attr("id")
        .replace("list-", "");
    var index = $(this)
        .closest(".list-group-item")
        .index();
    tasks[status][index].text = text;
    var taskP = $("<p>")
        .addClass("m-1")
        .text(text);
    $(this).replaceWith(taskP);
})





