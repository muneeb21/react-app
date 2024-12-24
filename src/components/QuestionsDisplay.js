// import React from "react";

// const QuestionsDisplay = ({ questions, onSubmit }) => {
//   const [answers, setAnswers] = React.useState({});

//   const handleChange = (questionId, answer) => {
//     setAnswers({ ...answers, [questionId]: answer });
//   };

//   const handleSubmit = () => {
//     onSubmit(answers);
//   };

//   return (
//     <div>
//       {questions.map((question, index) => (
//         <div key={question.id}>
//           <h3>
//             Question {index + 1}: {question.text}
//           </h3>
//           {question.options.map((option, optIndex) => (
//             <label key={optIndex}>
//               <input
//                 type="radio"
//                 name={question.id}
//                 value={option}
//                 onChange={() => handleChange(question.id, option)}
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default QuestionsDisplay;

import React from "react";
import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

const QuestionsDisplay = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = React.useState({});

  const handleChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  return (
    <Box sx={{ p: 4 }}>
      {questions.map((question, index) => (
        <Box key={question.id} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Question {index + 1}: {question.text}
          </Typography>
          <FormControl>
            <RadioGroup
              name={`question-${question.id}`}
              onChange={(e) => handleChange(question.id, e.target.value)}
            >
              {question.options.map((option, optIndex) => (
                <FormControlLabel
                  key={optIndex}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      ))}
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Submit Answers
      </Button>
    </Box>
  );
};

export default QuestionsDisplay;
