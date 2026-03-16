document.getElementsByTagName("form").addEventListener("submit", submissionCheck)

function submissionCheck() {
    let isValid = true;
    let errorMessage = "";

    //Name Validation
    const nameInput = document.getElementById("name").value.trim();
    if (nameInput.length < 3) {
            errorMessage += "Please enter a valid Full Name (at least 3 characters).\n";
            isValid = false;
        }

    //Department validation
    const departmentInput = document.getElementById("Department").value
    if (departmentInput === "") {
        errorMessage += "Please select a Department from the list.\n";
        isValid = false;
    }
}