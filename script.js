// contact form authentication
// alert("hello world");

// input fields
const username = document.getElementById("username");
const email = document.getElementById("email");
const textarea = document.getElementById("usertextarea");

// submit buttons

const GetInTouch_btn = document.getElementById("submit");

// checking for user inputs is valied unless shaow theme an error
GetInTouch_btn.addEventListener("click", () => {
    if(username.value == "" && email.value == "" && textarea.value == ""){
        username.style.border = "1px solid red";
        email.style.border = "1px solid red";
        textarea.style.border = "1px solid red";
       // alert("please, fill out the forms !")
    }
    else if(username.value == ""){
        username.style.border = "1px solid red";
        // alert("please, fill your username !");
    }
    else if(email.value == ""){
        email.style.border = "1px solid red";
        // alert("please, fill your email correctly !");
    }
    else if(textarea.value == ""){
        textarea.style.border = "1px solid red";
        // alert("please, say something in text area box")
    }
    else{
        alert("thanks for message us !")

        username.style.border = "1px solid rgb(230, 230, 230)";
        email.style.border = "1px solid rgb(230, 230, 230)";
        textarea.style.border = "1px solid rgb(230, 230, 230)";




        username.value = "";
        email.value = "";
        textarea.value = "";
    }
});

