$(function () {
  var current = dayjs().hour();
  var time = $(".time-block");
  var save = $(".saveBtn");
  time.each(function () {
    var hour = $(this).attr("id");
    if (current < hour) {
      $(this)
        .children(".col-8")
        .attr("class", "col-8 col-md-10 description future");
    }
    if (current > hour) {
      $(this)
        .children(".col-8")
        .attr("class", "col-8 col-md-10 description past");
    }
    if (current == hour) {
      $(this)
        .children(".col-8")
        .attr("class", "col-8 col-md-10 description present");
    }
  });

  save.on("click", function (event) {
    event.preventDefault();
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".col-8").val().replace(key);

    localStorage.setItem(key, JSON.stringify(value));
  });

  for (let i = 9; i <= 17; i++) {
    $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)));
  }
});
