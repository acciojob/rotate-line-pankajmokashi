//your JS code here. If required.
let line = document.getElementById("line")
let degrees = 1
setInterval(function() {
    degrees = degrees + 1
    line.style.transform = 'rotate(' + degrees + 'deg)'
}, 10);