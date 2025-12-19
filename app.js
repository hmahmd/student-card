function Submit(e) {
  e.preventDefault();

  let nameInput = document.getElementById("nameInput");
  let rollNoInput = document.getElementById("rollNoInput");
  let batchNoInput = document.getElementById("batchNoInput");
  let showResult = document.getElementById("showResult");

  let name = nameInput.value.trim();
  let rollNo = rollNoInput.value.trim();
  let batchNo = batchNoInput.value.trim();

  // ❌ Empty input
  if (name === "" || rollNo === "" || batchNo === "") {
    showResult.innerHTML = `<div class="result">Plz Fill All input</div>`;
    return;
  }

  // ✅ REMOVE error message if exists
  let error = showResult.querySelector(".result");
  if (error) {
    error.remove();
  }

  let data = {
    name: name,
    rollNumber: rollNo,
    batch: batchNo,
    id: Date.now(),
  };

  saveData(data);

  // ✅ ADD new card (no replace)
  showResult.innerHTML += `
    <div class="Success">
      <h3>Student ID Card! ✓</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Roll Number:</strong> ${data.rollNumber}</p>
      <p><strong>Batch Number:</strong> ${data.batch}</p>
    </div>
  `;

  // Clear inputs
  nameInput.value = "";
  rollNoInput.value = "";
  batchNoInput.value = "";
}

function saveData(data) {
  let students = [];
  let saved = localStorage.getItem("students");
  if (saved) {
    students = JSON.parse(saved);
  }
  students.push(data);
  localStorage.setItem("students", JSON.stringify(students));
}
