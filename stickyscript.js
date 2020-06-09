let flag = false;
function createsticky() {
    //html elements are created
    const body = document.querySelector("body");
    const stickypad = document.createElement("div");
    const nav = document.createElement("div");
    const minimize = document.createElement("div");
    const close = document.createElement("div");
    const textarea = document.createElement("textarea");
    //attributes   
    stickypad.setAttribute("class", "sticky-pad");
    nav.setAttribute("class", "nav");
    minimize.setAttribute("class", "minimize");
    close.setAttribute("class", "close");
    textarea.setAttribute("class", "writing-pad");
    //added to dom
    close.addEventListener("click", onclose);
    minimize.addEventListener("click", onminimize);
    nav.appendChild(minimize);
    nav.appendChild(close);
    stickypad.appendChild(nav);
    stickypad.appendChild(textarea);
    body.appendChild(stickypad);
    //move a sticky
    console.log("adding events")
    stickypad.addEventListener("mousedown",onmousedown);
    stickypad.addEventListener("mousemove", onmousemove);
    stickypad.addEventListener("mouseup", onmouseup);
    console.log("added events")
}
let initialX = null;
let initialY = null;
var isDown = false;



function onmousedown(event) {
    console.log("in mouse down..")
    initialX = event.clientX;
    initialY = event.clientY;
    isDown = true;
    console.log("in mouse down")



}
function onmousemove(event) {
    const stickypad = event.currentTarget;
    if (!isDown) return;
    let finalX = event.clientX;
    let finalY = event.clientY;
    let distX = finalX - initialX;
    let distY = finalY - initialY;
    let { top, left } = stickypad.getBoundingClientRect();// sticky pad's original top and left

    stickypad.style.top = top + distY + "px";
    stickypad.style.left = left + distX + "px";

    initialX = finalX;
    initialY = finalY;
    console.log("on mouse move")


}
function onmouseup(event) {
    isDown = false;
}




function onclose(event) {
    const stickypad = event.target.parentElement.parentElement;
    const body = event.target.parentElement.parentElement.parentElement;
    body.removeChild(stickypad);
}
// var flag = false;

function onminimize(event) {
    if (flag == false) {
        event.target.parentElement.parentElement.children[1].style.display = "none";
        flag = true;
    }
    else if (flag) {
        event.target.parentElement.parentElement.children[1].style.display = "block";
        flag = false;



    }
}
