
const birthyearSelect = document.getElementById("birthyear");
const ageInput = document.getElementById("age");


function calculateAge() {
    const birthYear = parseInt(birthyearSelect.value);
    const currentYear = new Date().getFullYear();
    
    if (birthYear) {
        const age = currentYear - birthYear;
        ageInput.value = age; 
    } else {
        ageInput.value = ''; 
    }
}


for (let year = 2005; year <= 2025; year++) {
    let option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    birthyearSelect.appendChild(option);
}


birthyearSelect.addEventListener('change', calculateAge);


document.getElementById("registrationform").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let birthyear = document.getElementById("birthyear").value;

    if (name.trim() === "" || age.trim() === "" || email.trim() === "" || birthyear === "") {
        alert("All fields are Required!!");
        return;
    }

    
    const validEmailDomains = ["@gmail.com", "@yahoo.com", "@outlook.com"];
    let isValidEmail = validEmailDomains.some(domain => email.endsWith(domain));

    if (!isValidEmail) {
        alert("Please enter a valid email address (Gmail, Yahoo, or Outlook).");
        return;
    }

   
    if (parseInt(birthyear) < 2005 || parseInt(birthyear) > 2025) {
        alert("Invalid Birthyear! Please select a year between 2005 and 2025.");
        return;
    }

    alert("Mission Successful!!! Form Submitted.");
});
