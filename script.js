let studentform = document.getElementById('studnet_details');

studentform.addEventListener('submit', (e)=>{
e.preventDefault();


let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let Gender = document.querySelector('input[name="gender"]:checked');
let hobbie = document.getElementById("Playing" && "Travelling");
let city = document.querySelector('#City');

    console.log(`Hello ${firstname.value}`);
    console.log(`Hello ${lastname.value}`);
    console.log(`Hello ${email.value}`);
    console.log(`Hello ${password.value}`);
    console.log(`Hello ${Gender.value}`);
    console.log(`Hello ${hobbie.value}`);
    console.log(`Hello ${city.value}`);
});

