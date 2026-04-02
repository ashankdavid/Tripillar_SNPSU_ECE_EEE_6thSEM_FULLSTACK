// change the Main Heading
document.getElementById("MainHeading").innerHTML = "Welcome to Coder Arcade"

// Validating the form in Contact us
function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name == ""){
        alert("Name is Required!");
    }else if(email == ""){
        alert("Email is Required!");
    }else{
        alert("Form Submitted Successfully")
    }
}

// display a greeting message
function showGreeting(){
    let hour = new Date().getHours();
    let message = "";

    if(hour < 12){
        message = "Good Morning ☀️";
    }else if (hour < 18){
        message = "Good Afternoon 🌤️";
    }else{
        message = "Good Evening 🌙";
    }

    alert(message);
}

showGreeting();

// Dark Mode
function toggleMode(){
    document.body.classList.toggle("dark");
}

// Saving the Data into Browser Local Storage
function saveData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    // Get existing data
    let data = JSON.parse(localStorage.getItem("formData")) || [];

    // Add new entry
    data.push({ name, email, message });

    // Save back
    localStorage.setItem("formData", JSON.stringify(data));

    alert("Data Saved!");

    return false; // prevent page reload
}

// loadData 

function loadData() {
    let data = JSON.parse(localStorage.getItem("formData")) || [];
    let table = document.getElementById("dataTable");

    data.forEach((item, index) => {
        let row = table.insertRow();

        row.insertCell(0).innerHTML = item.name;
        row.insertCell(1).innerHTML = item.email;
        row.insertCell(2).innerHTML = item.message;

        row.insertCell(3).innerHTML =
            `<button onclick="deleteData(${index})">Delete</button>`;
    });
}

function deleteData(index) {
    let data = JSON.parse(localStorage.getItem("formData"));

    data.splice(index, 1);

    localStorage.setItem("formData", JSON.stringify(data));

    location.reload(); // refresh page
}