

function showdata() {

    document.getElementById("update").style.display = "none";
    var studentlist;
    if (localStorage.getItem("studentlist") == null) {
        studentlist = [];
        return false;

    }
    else {
        studentlist = JSON.parse(localStorage.getItem("studentlist"))
    }


    var student = "";

    studentlist.forEach(function (element) {

        student += `
        

        <tr>
        
        <td><img src="${element.image}" alt="img" width="30px"></td>
        <td>${element.firstname}</td>
        <td>${element.lastname}</td>
        <td>${element.email}</td>
        <td>${element.password}</td>
        <td>${element.gender}</td>
        <td>${element.city}</td>
        <td>${element.hobbie}</td>
        <td>
        <button type="button" onclick="onEdit()" class="btn btn-outline-light">Edit</button>
        <button type="button" onclick="onDelete()" class="btn btn-outline-light">Delete</button>
        </td>

        </tr>
        `

    });
    document.getElementById("Student").innerHTML = student;

    
}

document.onload = showdata();




function AddData() {

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let hobbie = document.getElementById("Playing" && "Travelling").value;
    let city = document.querySelector('#City').value;
    let image = document.getElementById('file').value;

    var studentlist;

    if (localStorage.getItem("studentlist") == null) {
        studentlist = [];

    }
    else {
        studentlist = JSON.parse(localStorage.getItem("studentlist"));
    }

    studentlist.push({
        firstname : firstname,
        lastname: lastname,
        email: email,
        password:password,
        gender: gender,
        Playing:Playing,
        Travelling :Travelling,
        city:city,
        hobbie:hobbie,
        image:image


    });

    localStorage.setItem("studentlist", JSON.stringify(studentlist));
    window.onload = showdata();
    resetForm();

}

function onEdit(index) { 
    var studentlist;
    if (localStorage.getItem("studentlist") == null) {
        studentlist = [];
        return false;
        
    }

    else {
        studentlist = JSON.parse(localStorage.getItem("studentlist"));
        console.log(studentlist);
    }

    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";

    document.getElementById("firstname").value = studentlist[index].firstname;
    document.getElementById("lastname").value = studentlist[index].lastname;
    document.getElementById("email").value = studentlist[index].email;
    document.getElementById("password").value = studentlist[index].password;
    document.querySelector('input[name="gender"]:checked').value = studentlist[index].gender;
    document.getElementById("Playing" && "Travelling").value = studentlist[index].hobbie;
    document.querySelector('#City').value = studentlist[index].city;
    document.getElementById('file').value = studentlist[index].image;
    

}


function onDelete(index) {
    
    var studentlist;
    
    if (localStorage.getItem("studentlist") == null) {
        studentlist = [];
        return false;
        
    }
    else {
        studentlist = JSON.parse(localStorage.getItem("studentlist"))
    }

    alert(`Are you sure to delete this record?`);

    studentlist.splice(index, 1);
    localStorage.setItem("studentlist", JSON.stringify(studentlist));
    document.onload =  showdata();

}

function resetForm() {

    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("Playing" && "Travelling").checked = false;
    document.querySelector('#City').value = "";
    document.getElementById('file').value = "";
}

