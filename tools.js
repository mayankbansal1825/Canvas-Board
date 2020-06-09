ctx.strokeStyle = "red";
ctx.lineWidth = 5;
var activetool = "pencil";
var pencil = document.querySelector(".pencil");
var eraser = document.querySelector(".eraser");
var penciloptions = document.querySelector(".pencil-option");
var eraseroptions=document.querySelector(".eraser-options")
function handletoolchange(tool) {
    if (tool == "eraser") {
            if(activetool=="eraser"){
          eraseroptions.classList.add("show");
        //   penciloptions.classList.remove("show");
            }
            else{
        eraser.classList.add("active");
        pencil.classList.remove("active");
        penciloptions.classList.remove("show");
        ctx.strokeStyle = "white";
        activetool = "eraser";
        
    }
}
    else if (tool == "pencil") {
        if (activetool == "pencil") {
            penciloptions.classList.add("show");
        } else {
            pencil.classList.add("active");
            eraser.classList.remove("active");
             eraseroptions.classList.remove("show");
            ctx.strokeStyle = "red";
            activetool = "pencil";
        }

    }
    else if(tool=="sticky")
    {
        createsticky();
    }
   
}
function changesize(value){
    ctx.lineWidth=value;
}
function handlecolourchange(value){
    ctx.strokeStyle=value;
}