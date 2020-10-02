const singleForm = document.getElementsByTagName("form")[0];

singleForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Default preevebted");
});

console.log("Hello WORLD");

const phoneField = document.getElementById("exampleInputphone1");
const emailField = document.getElementById("exampleInputEmail1");

//for this keyword i am using function here
phoneField.addEventListener("keyup", function () {
    var phonepattern = /\+[0-9]{3}98\d+/g;
    var res = this.value.match(phonepattern);
    if (!res) {
        this.style.borderColor = "red";
    } else {
        this.style.borderColor = "green";
    }
});

//for this keyword i am using function here
emailField.addEventListener("keyup", function () {
    var phonepattern = /[a-z0-9/_]+@/g;
    var res = this.value.match(phonepattern);
    if (!res) {
        this.style.borderColor = "red";
    } else {
        this.style.borderColor = "green";
    }
});
