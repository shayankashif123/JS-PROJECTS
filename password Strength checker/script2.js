function containsSpecialCharacter(password) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharPattern.test(password);
}

function containsNumber(password) {
    const numberPattern = /[0-9]/;
    return numberPattern.test(password);
}

function containsUpperAndLower(password) {
    const upperCasePattern = /[A-Z]/;
    const lowerCasePattern = /[a-z]/;
    return upperCasePattern.test(password) && lowerCasePattern.test(password);
}

const container = document.querySelector(".container");
let progress = 0;
const password_input = document.querySelector("input");
const progress_bar = document.querySelector(".progress-bar");

password_input.addEventListener("input", () => {
    progress = 0; // Reset progress for each input change
    const password = password_input.value;

    // Display alert if password is too short
    if (password.length < 8) {
        container.classList.add("active");
    } else {
        container.classList.remove("active");
    }

    // Calculate progress based on conditions
    if (password.length >= 8) {
        progress+=5;
        if (containsSpecialCharacter(password)) {
            progress += 34;
        }
        if (containsNumber(password)) {
            progress += 33;
        }
        if (containsUpperAndLower(password)) {
            progress += 33;
        }
    }

    // Ensure progress is capped at 100%
    progress = Math.min(progress, 100);

    // Set the progress bar width
    progress_bar.style.width = `${progress}%`;

    // Set progress bar color based on strength
    if (progress < 33) {
        progress_bar.style.backgroundColor = 'red';  // Weak password
    } else if (progress < 66) {
        progress_bar.style.backgroundColor = 'yellow';  // Medium strength password
    } else {
        progress_bar.style.backgroundColor = 'green';  // Strong password
    }
});
