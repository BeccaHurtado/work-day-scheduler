let rightNow = moment().format("dddd, MMM Do YYYY"); {
    currentDay.textContent = moment().format("dddd, MMMM Do YYYY");
};

// var task = document.querySelector(".description")
// var saveBtn = document.querySelector(".saveBtn")


// $(".description").on("click", "p", function(){
//     var text = $(this)
//         .text()
//         .trim();

//     var textInput = $("<textarea>").addClass("form-control").val(text);
//     $(this).replaceWith(textInput);

//     textInput.trigger("focus");
// });

// $(".description").on("blur", "textarea", function() {
//     var text = $(this)
//         .val()
//         .trim();
//     var status = $(this)
//         .closest(".list-group")
//         .attr("id")
//         .replace("list-", "");
//     var index = $(this)
//         .closest(".list-group-item")
//         .index();
//     tasks[status][index].text = text;
//     var taskP = $("<p>")
//         .addClass("m-1")
//         .text(text);
//     $(this).replaceWith(taskP);
// })



$(".save-btn").on("click", function() {
    var time = $(this).siblings(".description").attr("id");
    var task = $(this).siblings(".description").val();
    console.log(time,task)
    localStorage.setItem(time, task);
});




