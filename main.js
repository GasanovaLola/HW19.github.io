var inp1;
var inp2;
var inp3;

setInterval(function() {
    inp1 = document.getElementById("inp1").value;
    inp2 = document.getElementById("inp2").value;
    inp3 = document.getElementById("inp3").value;

    document.getElementById("text").value += `${inp1}, ${inp2}, ${inp3}`;
}, 1000);