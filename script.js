document.getElementById("exampleInputEmail1").addEventListener("click", checkForEmail)
document.getElementById("exampleInputPassword1").addEventListener("click", checkForPassword)
function checkForEmail() {
    let value = document.getElementById("exampleInputEmail1").value
    if (!value.includes("@")) {
        document.getElementById("incorrect-email").className = "d-block";
        document.getElementById("exampleInputEmail1").style.borderColor = "red";
    } else {
        document.getElementById("incorrect-email").className = "d-none";
        document.getElementById("exampleInputEmail1").style.borderColor = "gray";
    }
}

function checkForPassword() {
    let value = document.getElementById("exampleInputPassword1").value
    if (value.length <= 7) {
        isUpperCase()
        document.getElementById("incorrect-password").className = "d-block";
        document.getElementById("exampleInputPassword1").style.borderColor = "red";
    } else {
        isUpperCase()
        document.getElementById("incorrect-password").className = "d-none";
        document.getElementById("exampleInputPassword1").style.borderColor = "gray";
    }
}

function isUpperCase() {
    let value = document.getElementById("exampleInputPassword1").value
    for (let i = 0; i < value.length; i++) {
        if (value.charAt(i) === value.charAt(i).toUpperCase()) {
            document.getElementById("incorrect-password").className = "d-none";
            document.getElementById("exampleInputPassword1").style.borderColor = "gray";
        } else {
            document.getElementById("incorrect-password").className = "d-block";
            document.getElementById("exampleInputPassword1").style.borderColor = "red";
        }
    }
}
