function startAssessment() {
  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("assessmentPage").style.display = "block";
}

document.getElementById("assessmentForm").addEventListener("submit", function (event) {
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

  fetch("/api/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answers),
  })
    .then((response) => response.json())
    .then((data) => {
      if (
        typeof data.anxiety === "number" &&
        typeof data.depression === "number" &&
        typeof data.stress === "number"
      ) {
        const queryString = `?anxiety=${data.anxiety}&depression=${data.depression}&stress=${data.stress}`;
        window.location.href = `results.html${queryString}`;
      } else {
        alert("Something went wrong. Please try again.");
        console.error("Invalid data format:", data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while getting your results. Please try again.");
    });
});
