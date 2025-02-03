import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Review from "./components/Review";

function App() {
  const [review, setReview] = useState("");
  const handleGenerateReview = (code: string) => {
    fetch("http://localhost:3000/api/v1/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        setReview(data.review);
      });
  };
  return (
    <div className="flex h-full items-center justify-center overflow-hidden">
      <Editor onGenerateReview={handleGenerateReview} />
      <Review review={review} />
    </div>
  );
}

export default App;
