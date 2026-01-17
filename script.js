function markAttendance() {
  let name = document.getElementById("name").value;
  if (name === "") {
    alert("Enter student name");
    return;
  }

  let list = document.getElementById("list");
  let item = document.createElement("li");
  item.textContent = name + " - Present";
  list.appendChild(item);

  document.getElementById("name").value = "";
}
