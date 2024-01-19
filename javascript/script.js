function sendContact() {
    // Get form elements
    var firstName = document.getElementById("firstNameInput").value;
    var lastName = document.getElementById("lastNameInput").value;
    var emailAddress = document.getElementById("emailAddressInput").value;
    var phoneNumber = document.getElementById("phoneNumberInput").value;
    var department = document.getElementById("departmentInput").value;
    var subject = document.getElementById("subjectInput").value;
    var message = document.getElementById("messageInput").value;

    // Validation logic 
    var errorList = document.getElementById("errorList");
    errorList.innerHTML = "";

    if (firstName.trim() === "") {
        errorList.innerHTML += "<li>Please enter your first name.</li>";
    }

    if (lastName.trim() === "") {
        errorList.innerHTML += "<li>Please enter your last name.</li>";
    }

    if (emailAddress.trim() === "") {
        errorList.innerHTML += "<li>Please enter your email address.</li>";
    } else if (!isValidEmail(emailAddress)) {
        errorList.innerHTML += "<li>Please enter a valid email address.</li>";
    }

    if (phoneNumber.trim() === "") {
        errorList.innerHTML += "<li>Please enter your phone number.</li>";
    } else if (!isValidPhoneNumber(phoneNumber)) {
        errorList.innerHTML += "<li>Please enter a valid phone number (e.g., 1234 5678).</li>";
    }

    if (department === "Choose Service") {
        errorList.innerHTML += "<li>Please select a service.</li>";
    }

    if (subject.trim() === "") {
        errorList.innerHTML += "<li>Please enter a subject.</li>";
    }

    if (message.trim() === "") {
        errorList.innerHTML += "<li>Please enter a message.</li>";
    }

    if (errorList.innerHTML === "") {
        // Form is valid, you can submit it
        document.forms[0].submit();
    }
}


function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    var phonePattern = /^\d{4} \d{4}$/;
    return phonePattern.test(phoneNumber);
}

function resetErrors() {
    var errorList = document.getElementById("errorList");
    errorList.innerHTML = "";
}