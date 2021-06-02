document.getElementById("bg").addEventListener("click",backgroundColor)
document.getElementById("change-text").addEventListener("click",how)



function backgroundColor () {
document.body.style.backgroundColor = "red"
}

function how () {
document.getElementById("title").innerHTML = "press this button"
}