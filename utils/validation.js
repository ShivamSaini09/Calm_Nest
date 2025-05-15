const validateAnswers = (answers) => {
    if (!Array.isArray(answers) || answers.length === 0) {
      return "Answers must be a non-empty array.";
    }
    for (let score of answers) {
      if (typeof score !== "number" || score < 0 || score > 3) {
        return "Each answer must be a number between 0 and 3.";
      }
    }
    return null;
  };
  
  module.exports = { validateAnswers };
  