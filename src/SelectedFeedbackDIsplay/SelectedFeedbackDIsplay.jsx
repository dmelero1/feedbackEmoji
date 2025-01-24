// SelectedFeedbackDisplay/SelectedFeedbackDisplay.jsx
import React from "react";
import "./SelectedFeedbackDisplay.css";

const SelectedFeedbackDisplay = ({ feedback }) => {
  return (
    <div className="selected-feedback">
      <h3>Your feedback:</h3>
      <div className="feedback-display">
        <span className="emoji">{feedback.emoji}</span>
        <span className="text">{feedback.text}</span>
      </div>
    </div>
  );
};

export default SelectedFeedbackDisplay;