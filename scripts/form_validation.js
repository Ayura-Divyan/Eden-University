document.getElementById("enquiryForm").addEventListener("submit", submissionCheck);

function submissionCheck(event) {
    let isValid = true;
    let errorMessage = "";

    //Name Validation
    const nameInput = document.getElementById("name").value.trim();
    if (nameInput.length < 3) {
        errorMessage += "Please enter a valid Full Name (at least 3 characters).\n";
        isValid = false;
    }

    //Department validation
    const departmentInput = document.getElementById("Department").value;
    if (departmentInput === "") {
        errorMessage += "Please select a Department from the list.\n";
        isValid = false;
    }

    //Level of Study Validation
    const levelSelected = document.querySelector('input[name="level"]:checked');
    if (!levelSelected) {
        errorMessage += "Please select a Level of study.\n";
        isValid = false;
    }

    //Intake validation
    const intake = document.querySelectorAll('input[name="intake"]:checked');
    if (intake.length === 0) {
        errorMessage += "Please select at least one preferred Intake season.\n";
        isValid = false;
    }

    //Message Validation
    const messageInput = document.getElementById("message").value.trim();
    if (messageInput.length < 10) {
        errorMessage += "Your message is too short. Please provide at least 10 characters.\n";
        isValid = false;
    }

    //Final Check
    if (!isValid) {
        event.preventDefault();
        alert("Please fix the following errors:\n\n" + errorMessage);
    }
}