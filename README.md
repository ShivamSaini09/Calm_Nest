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

