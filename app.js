// // let indexEmailInp = document.getElementById('indexEmailInp')
// // let indexPassInp = document.getElementById('indexPassInp')
// // function storeInLocal(){
// //         localStorage.setItem("email",indexEmailInp.value)
// //         localStorage.setItem("password",indexPassInp.value)
// //     }
// // let savedEmail = localStorage.getItem("email")
// // let savedPassword = localStorage.getItem("password")
// // console.log(savedEmail);
// // console.log(savedPassword);

// // let list =document.getElementById("list")
//     // let name=[]
//     // function storeInLocal() {
//     //     let indexEmailInp = document.getElementById('indexEmailInp')
//     //     name.push(indexEmailInp.value);
//     //         list.innerHTML+= `<li>${indexEmailInp.value}</li>`
//     //         localStorage.setItem('name',JSON.stringify(name))
//     // indexEmailInp.value=""
//     // }
//     // let SavedName= localStorage.getItem("name")
//     // SavedName= JSON.parse(SavedName)
//     // if(SavedName){
//     //     name=SavedName
//     //     for (let i = 0; i < SavedName.length; i++) {
//     //         list.innerHTML+=`<li>${SavedName[i]} </li>`

//     //     }
//     // }
// let siUpFirst = document.getElementById('siUpFirst')
// let siUpLast = document.getElementById('siUpLast')
// let siUpEmail = document.getElementById('siUpEmail')
// let siUpPass = document.getElementById('siUpPass')
// function SignUp(){
//     localStorage.setItem('FirstName', siUpFirst.value)
// localStorage.setItem('LastName', siUpLast.value)
//     localStorage.setItem('Email',siUpEmail.value)
//     localStorage.setItem('Password',siUpPass.value)

//     let SavedsiUpFirst=localStorage.getItem('FirstName')
//     let SavedsiUpLast=localStorage.getItem('LastName')
//     let SavedsiUpEmail=localStorage.getItem('Email')
//     let SavedsiUpPass=localStorage.getItem('Password')
//     console.log(SavedsiUpEmail);
//     console.log(SavedsiUpLast);
//     console.log(SavedsiUpFirst);
//     console.log(SavedsiUpPass);
// }

let loginEmail = document.getElementById("indexEmailInp");
let loginPass = document.getElementById("indexPassInp");
let siUpFirst = document.getElementById("siUpFirst");
let siUpLast = document.getElementById("siUpLast");
let siUpEmail = document.getElementById("siUpEmail");
let siUpPass = document.getElementById("siUpPass");

function SignUp() {
    let user = {
        firstName: siUpFirst.value,
        lastName: siUpLast.value,
        email: siUpEmail.value,
        password: siUpPass.value,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Sign-up successful! You can now log in.");

    window.location.href = "index.html";
}

function Login() {
    let storedUser = localStorage.getItem("user");

    if (storedUser) {
        let userData = JSON.parse(storedUser);

        if (
            loginEmail.value === userData.email &&
            loginPass.value === userData.password
        ) {
            alert("Login successful! Welcome, " + userData.firstName);

            window.location.href = "homepage.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    } else {
        alert("No user found. Please sign up first.");
        // window.location.href = "signup.html";
    }
}
