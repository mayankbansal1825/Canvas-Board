const fileSelector = document.getElementById("fileSelector");
const fileInput = document.getElementById("fileInput");

fileSelector.addEventListener("click", function (event) {

    event.preventDefault();
    fileInput.click();

});

fileInput.addEventListener("change", function (event) {
    const body = document.querySelector("body");
    const file = event.currentTarget.files[0];
    const img = document.createElement("img");

    img.src = window.URL.createObjectURL(file);
    img.height = 500;
    img.width = 500;
    img.style.position = "absolute";
    img.style.top = "200px";
    img.style.left = "300px";

    body.appendChild(img);

});