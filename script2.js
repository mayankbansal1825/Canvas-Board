var pencil = document.querySelector(".pencil");
var eraser = document.querySelector(".eraser");
var undo = document.querySelector(".undo");
var redo = document.querySelector(".redo");
var undoStack = [];
var redoStack = [];
//mousedown
//mousemove
//mouseup
var isDown = false;
board.addEventListener("mousedown", function (event) {
    var { x, y } = getLocation(event)
    ctx.beginPath();
    ctx.moveTo(x, y);
    isDown = true;
    const point = {
        x, y,
        effect: ctx.globalCompositeOperation,
        color: ctx.strokeStyle,
        width: ctx.lineWidth,
        type: "begin"
    }
    undoStack.push(point);
})

board.addEventListener("mousemove", function (event) {
    if (!isDown) return;
    var { x, y } = getLocation(event);
    ctx.lineTo(x, y);
    ctx.stroke();
    const point = {
        x, y,
        effect: ctx.globalCompositeOperation,
        color: ctx.strokeStyle,
        width: ctx.lineWidth,
        type: "end"
    }
    undoStack.push(point);

})
board.addEventListener("mouseup", function (event) {
    isDown = false;


})

function getLocation(event) {
    console.log(board.getBoundingClientRect());
    console.log(event.clientY);
    return {
        x: event.clientX - board.getBoundingClientRect().left,

        y: event.clientY - board.getBoundingClientRect().top
    };
}
let interval = null;

undo.addEventListener("mousedown", function () {
    interval = window.setInterval(function () {
        if (undoStack.length <= 0) return;
        redoStack.push(undoStack.pop());
        redraw();
    }, 50);
});

undo.addEventListener("mouseup", function () {
    clearInterval(interval);
    interval = null;

});
redo.addEventListener("mousedown", function () {
    interval = window.setInterval(function () {
        if (redoStack.length <= 0) return;
        undoStack.push(redoStack.pop());
        redraw();
    }, 50);
});
redo.addEventListener("mouseup", function () {
    clearInterval(interval);
    interval = null;

});



// undo.addEventListener("mousedown",function(){
//     undoStack.pop();
//     redraw();
// })
function redraw() {
    if (undoStack.length <= 0) return;
    console.log("in strt")

    ctx.clearRect(0, 0, board.width, board.height);
    console.log(undoStack.length);
    console.log(redoStack.length);
    for (let i = 0; i < undoStack.length; i++) {
        if (!undoStack[i]) return;
        console.log("aa")
        let { x, y, effect, color, width, type } = undoStack[i];
        if (type == "begin") {
            console.log("in begin")

            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.globalCompositeOperation = effect;
            ctx.beginPath();
            ctx.moveTo(x, y);//mouse down
        }
        else if (type == "end") {
            console.log("in end")

            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.globalCompositeOperation = effect;
            ctx.lineTo(x, y);
            ctx.stroke();//mouse move

        }
    }
}