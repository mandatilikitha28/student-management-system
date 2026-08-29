function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    if (name === "" || roll === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentList");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = roll;
    row.insertCell(2).innerHTML = course;

    row.insertCell(3).innerHTML =
        '<button onclick="deleteStudent(this)">Delete</button>';

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}

function deleteStudent(button) {
    let row = button.parentNode.parentNode;
    row.remove();
}