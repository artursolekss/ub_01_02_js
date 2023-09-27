let color_seq = 0;
const colors = ["white", "yellow", "red", "blue", "green"]

function changeColor() {
    $("body").css("background-color", colors[++color_seq]);
    // color_seq = color_seq == 4 ? -1 : color_seq;
    if (color_seq == 4) {
        color_seq = -1;
    }
}

function onLoad() {
    playDisco();
}

function playDisco() {
    setTimeout(() => {
        $("#changeColor").click();
        playDisco();
    }, 100);
}

$(document).ready(onLoad);

// function changeColor() {
//     switch (color_seq) {
//         case 0:
//             color_seq = 1;
//             $("body").css("background-color", "yellow");
//             break;
//         case 1:
//             color_seq = 2;
//             $("body").css("background-color", "red");
//             break;
//         case 2:
//             color_seq = 3;
//             $("body").css("background-color", "blue");
//             break;
//         case 3:
//             color_seq = 4;
//             $("body").css("background-color", "green");
//             break;
//         case 4:
//             color_seq = 0;
//             $("body").css("background-color", "white");
//             break;
//     }
// }