var inp = document.querySelectorAll("input");
var text = document.getElementById("text");

setInterval(function() {
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].value !== "") {
            text.value  += `${inp[i].value},`;
        }
    }
    
}, 1000);
