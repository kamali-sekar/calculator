let totalStudents = 0;
let grandTotal = 0;

function addStudent() {

    // Get Input Values
    let name = document.getElementById("name").value.trim();

    let tamil = Number(document.getElementById("tamil").value);
    let english = Number(document.getElementById("english").value);
    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);
    let social = Number(document.getElementById("social").value);

    // Validation
    if (
        name === "" ||
        document.getElementById("tamil").value === "" ||
        document.getElementById("english").value === "" ||
        document.getElementById("maths").value === "" ||
        document.getElementById("science").value === "" ||
        document.getElementById("social").value === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    // Check Marks Range
    if (
        tamil < 0 || tamil > 100 ||
        english < 0 || english > 100 ||
        maths < 0 || maths > 100 ||
        science < 0 || science > 100 ||
        social < 0 || social > 100
    ) {
        alert("Marks should be between 0 and 100.");
        return;
    }

    // Total & Average
    let total = tamil + english + maths + science + social;
    let average = (total / 5).toFixed(2);

    // Grade
    let grade = "";

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B+";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    // Pass / Fail
    let result =
        tamil >= 35 &&
        english >= 35 &&
        maths >= 35 &&
        science >= 35 &&
        social >= 35
            ? "Pass"
            : "Fail";

    // Update Overall
    totalStudents++;
    grandTotal += total;

    let overallAverage = (
        grandTotal / (totalStudents * 5)
    ).toFixed(2);

    // Add Row
    let row = `
        <tr>
            <td>${name}</td>
            <td>${tamil}</td>
            <td>${english}</td>
            <td>${maths}</td>
            <td>${science}</td>
            <td>${social}</td>
            <td><b>${total}</b></td>
            <td>${average}</td>
            <td>${grade}</td>
            <td class="${result === "Pass" ? "pass" : "fail"}">
                ${result}
            </td>
        </tr>
    `;

    document.getElementById("tableBody").innerHTML += row;

    // Update Summary
    document.getElementById("students").textContent = totalStudents;
    document.getElementById("grandTotal").textContent = grandTotal;
    document.getElementById("overallAverage").textContent = overallAverage;

    // Clear Form
    clearForm();
}

function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("tamil").value = "";
    document.getElementById("english").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("science").value = "";
    document.getElementById("social").value = "";

    document.getElementById("name").focus();
}
