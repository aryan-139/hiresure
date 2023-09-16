import React from "react";
import "./App.css";
import { Box, InputAdornment, MenuItem, Select, Typography } from '@mui/material';

function App() {
  const questions = [
    {
      question: 'Describe a project where you had to manage a tight budget. How did you handle it?',
      answer: 'I managed a project with a limited budget by carefully allocating resources and...'
    },
    {
      question: 'Tell me about a time when you had to deal with a difficult client or customer. How did you resolve the situation?',
      answer: 'I encountered a challenging client situation by actively listening to their concerns and...'
    },
    {
      question: 'Give an example of a situation where you had to learn a new technology or skill quickly. How did you approach it?',
      answer: 'In my previous role, I had to learn a new programming language in a short time, so I...'
    },
    {
      question: 'Describe a time when you had to make a tough decision under pressure. What was the outcome?',
      answer: 'I faced a high-pressure decision-making situation, and I relied on data analysis and...'
    },
    {
      question: 'Tell me about a project where you had to collaborate with cross-functional teams. What was your role and contribution?',
      answer: 'I played a key role in a project that required collaboration with various teams, and I...'
    },
    {
      question: 'Give an example of a time when you had to prioritize multiple tasks with conflicting deadlines. How did you manage your time?',
      answer: 'I encountered a situation where I had multiple tasks with tight deadlines, and I...'
    },
    {
      question: 'Describe a situation where you had to provide constructive feedback to a colleague or team member. How did you handle it?',
      answer: 'I believe in open communication, and when I had to provide feedback, I...'
    },
    {
      question: 'Tell me about a time when you identified a problem in a process or workflow and suggested improvements.',
      answer: 'I noticed inefficiencies in our workflow and proposed changes that resulted in...'
    },
    {
      question: 'Give an example of a project where you had to adapt to unexpected changes. How did you handle it?',
      answer: 'In a project, we faced unexpected changes, and I adapted our strategy by...'
    },
    {
      question: 'Describe a situation where you had to motivate and lead a team during a challenging project.',
      answer: 'I motivated and led my team during a challenging project by...'
    },
    // Add more questions and answers as needed
  ];
  

  return (
    <div className="App">
      <Box sx={{marginTop: '2%', marginX: '2%'}}></Box>
      <Typography variant="h2">HireSure</Typography>
      <Typography variant="h7">Be Interview Ready</Typography>
      <Box sx={{marginTop: '1%', marginX: '2%'}}></Box>

      <Select
        labelId="dropdown-label"
        id="dropdown"
        startAdornment={
          <InputAdornment position="start">
           Select the question which you want to practice
          </InputAdornment>
        }
      >
        {questions.map((q, index) => (
          <MenuItem key={index} value={q.question}>
            {q.question}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default App;
