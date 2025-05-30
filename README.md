# Calm Nest

**Calm Nest** is an intelligent web-based application designed to assess an individual's mental health by analyzing responses to a scientifically validated 42-question assessment. Utilizing machine learning models trained on the **DASS-42 dataset**, Calm Nest predicts levels of **Anxiety**, **Depression**, and **Stress**, providing users with a summarized mental health report. The application serves as an accessible early screening tool to help individuals understand their mental well-being and seek assistance if needed.

## Features

- 42-question mental health assessment based on the DASS-42 scale  
- Machine Learning predictions for:
  - Depression
  - Anxiety
  - Stress  
- Summarized user-friendly report  
- Intuitive frontend built using modern web technologies  
- Follows Model-View-Controller (MVC) architecture for better structure  

## About the Dataset: DASS-42

The **DASS-42** (Depression Anxiety Stress Scales - 42 item version) is a set of three self-report scales designed to measure the emotional states of **depression**, **anxiety**, and **stress**.

- **Structure**: 42 items total  
  - 14 for Depression  
  - 14 for Anxiety  
  - 14 for Stress  
- **Rating Scale**: 4-point Likert scale (0–3)

Calm Nest integrates this standardized questionnaire with machine learning for predictive mental health assessment.

## Tech Stack

| Layer         | Technology             |
|---------------|------------------------|
| Frontend      | HTML, CSS, JavaScript  |
| Backend       | Node.js, Express.js    |
| ML Models     | Python (scikit-learn)  |
| Data Handling | Pandas, NumPy          |

## Project Structure

The project follows the **MVC (Model-View-Controller)** pattern for clean code organization.

## Setup & Installation

### Prerequisites

- Node.js and npm installed  
- Python 3.x installed

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/ShivamSaini09/Calm_Nest.git
cd Calm_Nest

./setup.sh

cd backend
node app.js



Mental Health Assessment Results Page
This HTML page dynamically generates a personalized mental health report based on a user's anxiety, depression, and stress levels. These levels are assessed using predefined values passed via URL parameters.

💡 Purpose
The purpose of this page is to provide users with a quick mental health overview and actionable coping strategies based on their responses in a prior assessment. It helps users better understand their current emotional state and suggests practical steps for self-care or professional support.

⚙️ How It Works
The page receives three mental health scores through URL query parameters:

anxiety

depression

stress

Each score is an integer (0 to 4), corresponding to:

0: Extremely Severe

1: Severe

2: Moderate

3: Mild

4: Normal

These scores are mapped to detailed descriptive labels and each label has:

A summary explaining the user's current state.

Coping strategies tailored to that level of severity.

Using JavaScript, the scores are extracted and rendered dynamically into three sections:

Anxiety Report

Depression Report

Stress Report

Each section includes:

The severity level.

A brief explanation of what the level means.

Practical coping strategies users can apply in real life.

🧩 Features
✅ Dynamic rendering of results based on query parameters.

✅ Personalized summaries and coping strategies.

✅ Clear structure for future enhancements (e.g., adding more conditions or user input validation).

✅ A button to retake the assessment (links back to index.html).


## 🐳 Docker Instructions

### Build Docker Image
bash
docker build -t calm_nest_image .


### Run Docker Container
bash
docker run -p 3004:3000 calm-nest-app


### Access the App
Visit: http://localhost:3000

### Test /api/student Route
Visit: http://localhost:3004/api/student

Expected output:
json
{
  "name": "YOUR_NAME",
  "studentId": "YOUR_STUDENT_ID"
}


---