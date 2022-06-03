document.getElementById("name").addEventListener("keyup", function() {
    var nameInput = document.getElementById('name').value;
    if (nameInput != "") {
        document.getElementById('send').removeAttribute("disabled");
    } else {
        document.getElementById('send').setAttribute("disabled", null);
    }
});