function startAssessment() {
  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("assessmentPage").style.display = "block";
}

document
  .getElementById("assessmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let allAnswered = true;

    for (let i = 1; i <= 42; i++) {
      const question = document.querySelector(`input[name="q${i}"]:checked`);
      if (!question) {
        allAnswered = false;
        break;
      }
    }

    const errorMessage = document.getElementById("errorMessage");
    if (!allAnswered) {
      errorMessage.style.display = "block";
      return;
    } else {
      errorMessage.style.display = "none";
    }

    const answers = {};
    for (let i = 1; i <= 42; i++) {
      const value = document.querySelector(`input[name="q${i}"]:checked`).value;
      answers[`q${i}`] = parseInt(value);
    }

    console.log("Answers:", answers);
    alert(
      "Thank you for completing the assessment! Your answers have been submitted."
    );
  });