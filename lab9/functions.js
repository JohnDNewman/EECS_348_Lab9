function validate() {
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;


    if (p1.length < 8) {
        alert("First password is less than 8 letters!")
    } else if (p2.length < 8) {
        alert("Second password is less than 8 letters!")
    } else if (p1 != p2) {
        alert("Passwords don't match!")
    } else {
        alert("Passwords are Valid!")
    }
}

function update_prac2_color() {
    var bor_R = document.getElementById("bor_R").value;
    var bor_G = document.getElementById("bor_G").value;
    var bor_B = document.getElementById("bor_B").value;
    var width = document.getElementById("width").value;
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${bor_R},${bor_G},${bor_B})`;
    tag.style.borderWidth = width
    tag.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}
