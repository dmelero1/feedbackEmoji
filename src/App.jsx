import { useState } from "react";
import "./App.css";
import FeedbackList from "./FeedbackList/FeedbackList";

const initialEmojis = [
  {
    id: 0,
    emoji: "😊",
    text: "Happy",
  },
  {
    id: 1,
    emoji: "😐",
    text: "Neutral",
  },
  {
    id: 2,
    emoji: "😢",
    text: "Sad",
  },
  {
    id: 3,
    emoji: "🤔",
    text: "Thinking",
  },
];

function App() {
  const [feedback, setFeedback] = useState(null);

  const onFeedbackChangeHandler = (feedback) => {
    setFeedback(feedback);
  };

  return (
    <div>
      <h2>How was your experience?</h2>
      <div className="emoji-container">
        <FeedbackList
          emojis={initialEmojis}
          onFeedbackChangeHandler={onFeedbackChangeHandler}
        />
      </div>
    </div>
  );
}

export default App;
