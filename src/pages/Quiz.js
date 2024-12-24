// import React, { useState, useEffect } from "react";
// import QuestionsDisplay from "../components/QuestionsDisplay";

// const Quiz = () => {
//   const [questions, setQuestions] = useState([]);
//   const [timer, setTimer] = useState(300); // 5 minutes
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     // Fetch questions from local storage or backend
//     const savedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
//     setQuestions(savedQuestions);

//     const interval = setInterval(() => {
//       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleSubmit = (answers) => {
//     let calculatedScore = 0;
//     questions.forEach((question) => {
//       if (answers[question.id] === question.correctAnswer) {
//         calculatedScore++;
//       }
//     });
//     setScore(calculatedScore);
//   };

//   return (
//     <div>
//       <h1>Quiz</h1>
//       <p>
//         Time Left: {Math.floor(timer / 60)}:{timer % 60}
//       </p>
//       {timer > 0 ? (
//         <QuestionsDisplay questions={questions} onSubmit={handleSubmit} />
//       ) : (
//         <h2>
//           Time's up! Your score is: {score}/{questions.length}
//         </h2>
//       )}
//     </div>
//   );
// };

// export default Quiz;

import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import QuestionsDisplay from "../components/QuestionsDisplay";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [timer, setTimer] = useState(300); // 5 minutes
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
    setQuestions(savedQuestions);

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (answers) => {
    let calculatedScore = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Quiz
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Time Left: {Math.floor(timer / 60)}:
        {String(timer % 60).padStart(2, "0")}
      </Typography>
      {timer > 0 ? (
        <QuestionsDisplay questions={questions} onSubmit={handleSubmit} />
      ) : (
        <Typography variant="h5" sx={{ mt: 4 }}>
          Time's up! Your score is: {score}/{questions.length}
        </Typography>
      )}
    </Container>
  );
};

export default Quiz;
