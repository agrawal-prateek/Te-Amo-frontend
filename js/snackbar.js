function showSnackBar(message) {
    // Get the snackbar DIV
    var x = document.getElementById("contact-submit");
    x.className = "show";
    x.innerHTML = message;

    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}