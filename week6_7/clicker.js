let timer_started = false;

function reduceTime() {
    const time_el = $("#time");
    let time = +time_el.text();
    time--;
    time_el.text(time);
    if (time > 0) {
        setTimeout(reduceTime, 1000);
        if (time < 10) {
            time_el.css("color", "red");
        }
    }
    else {
        $("#inital_btn").off("click", click);
        alert("Game over!")
    }
}

function click() {
    if (!timer_started) {
        timer_started = true;
        reduceTime();
    }
    $("#inital_btn").hide();
    $("#pressed_btn").show();
    setTimeout(function () {
        $("#inital_btn").show();
        $("#pressed_btn").hide();
    }, 50);//0.05
    const count_el = $("#count");
    let number = +count_el.text();
    number++;
    count_el.text(number);
}

///Called on load
$(function () {
    $("#inital_btn").on("click", click);
    $("#pressed_btn").hide();
})