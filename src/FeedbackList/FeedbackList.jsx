import React from "react";
import "./Feedback.css";

function FeedbackList({ emojis, onFeedbackChangeHandler }) {
  return (
    <ul className="feedbackList">
      {emojis.map((emoji) => (
        <li key={emoji.id}>
          <button onClick={() => onFeedbackChangeHandler(emoji)}
            title={emoji.text} 
            className="feedbackButton"
          >
            {emoji.emoji}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FeedbackList;
