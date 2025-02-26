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

// let white = document.getElementById("white");
// let red = document.getElementById("red");
// let orange = document.getElementById("orange");
// let green = document.getElementById("green");
// let blue = document.getElementById("blue");
// let purple = document.getElementById("purple");
// let pink = document.getElementById("pink");
// let gray = document.getElementById("gray");
// let black = document.getElementById("black");
let loginEmail = document.getElementById("indexEmailInp");
let loginPass = document.getElementById("indexPassInp");
let siUpFirst = document.getElementById("siUpFirst");
let siUpLast = document.getElementById("siUpLast");
let siUpEmail = document.getElementById("siUpEmail");
let siUpPass = document.getElementById("siUpPass");
let prof = document.getElementById("prof");
let sideMain = document.getElementById("sideMain");
let namePost = document.getElementById("namePost");
let postText = document.getElementById("postText");
let postsContainer = document.getElementById('postsContainer');
let blogUser = document.getElementById('blogUser');

function SignUp() {
    let user = {
        firstName: siUpFirst.value,
        lastName: siUpLast.value,
        email: siUpEmail.value,
        password: siUpPass.value,
    };
    
   if(siUpEmail.value!==""&&siUpPass.value!==""&&siUpFirst.value!==""&&siUpLast.value!==""){

       localStorage.setItem("user", JSON.stringify(user));
       alert("Sign-up successful! You can now log in.");
       
       window.location.href = "index.html";
   } else  {
    alert('Fill All The requirments')
   }
   } 
function Login() {
    let storedUser = localStorage.getItem("user");
    if (storedUser) {
        let userData = JSON.parse(storedUser);
        if (loginEmail.value === userData.email &&loginPass.value === userData.password) {
            alert("Login successful! Welcome, " + userData.firstName);
            localStorage.setItem("loggedInUser", userData.firstName+" "+userData.lastName);
            window.location.href = "homepg.html";
            
        } else {
            alert("Invalid email or password. Please try again.");
        }
    } else {
        alert("No user found. Please sign up first.");
        // window.location.href = "signup.html";
    }
}
let storedName = localStorage.getItem("loggedInUser");
if (storedName) {
    blogUser.innerText=storedName
    prof.innerText = storedName; 
    sideMain.innerText = storedName; 
    namePost.innerText = storedName; 
    

}
//************ 
// ye neeche wala commented code khud likha but local storage mai
//  save karane mai mushkil ho rhi thi baki shi hai
//******************* 

// var selectedColor='white'
// function changeColour(color){
//     selectedColor=color
//     postText.style.backgroundColor = color
// }

// function AddPost() {    
   
//     if (postText.value=="") {
//         alert('barai meherbani andar kuch likhe')
        
//     }else{
//     let newPost = document.createElement('div');
//     newPost.classList.add('card', 'p-3', 'mt-2', 'shadow-sm', 'mx-auto', 'w-75');
//     newPost.innerHTML = `<p class="fw-semibold">${storedName}</p><p>${postText.value}</p>`;
//     newPost.style.backgroundColor=selectedColor
//     postsContainer.prepend(newPost);
//     postText.value=""
//     document.getElementById('postText').style.backgroundColor = 'white'; 
//     selectedColor = 'white'; 
  
    
//     }

// }
//******************* 
// neeche wala code AI se likhawaya hai temporary will work on it myself later
//******************* 
var selectedColor = 'white';


// window.onload = function () {
    let savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    
    savedPosts.forEach(post => {
        let newPost = document.createElement('div');
        newPost.classList.add('card', 'p-3', 'mt-2', 'shadow-sm', 'mx-auto', 'w-75');
        newPost.innerHTML = `<p class="fw-semibold">${post.name}</p><p>${post.text}</p>`;
        newPost.style.backgroundColor = post.color;
        postsContainer.prepend(newPost);
    });
// };

function changeColour(color) {
    selectedColor = color;
    document.getElementById('postText').style.backgroundColor = color;
}

function AddPost() {
    if (document.getElementById('postText').value == "") {
        alert('barai meherbani andar kuch likhe');
    } else {
        let postText = document.getElementById('postText');
        

        let newPost = document.createElement('div');
        newPost.classList.add('card', 'p-3', 'mt-2', 'shadow-sm', 'mx-auto', 'w-75');
        newPost.innerHTML = `<p class="fw-semibold">${storedName}</p><p>${postText.value}</p>`;
        newPost.style.backgroundColor = selectedColor;
        postsContainer.prepend(newPost);

        
        let savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        savedPosts.unshift({
            name: storedName,
            text: postText.value,
            color: selectedColor
        });
        localStorage.setItem('posts', JSON.stringify(savedPosts));

        
        postText.value = "";
        postText.style.backgroundColor = 'white';
        selectedColor = 'white';
    }
}
