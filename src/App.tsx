import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Review from "./components/Review";

function App() {
  const [review, setReview] = useState("");
  const [state, setState] = useState<"idle" | "generating" | "generated">(
    "idle"
  );
  const handleGenerateReview = (code: string) => {
    try {
      setState("generating");
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
        })
        .finally(() => {
          setState("generated");
        });
    } catch (error) {
      alert("An error occurred while generating the review");
      console.log(error);
    }
  };
  const isGenerating = state === "generating";

  return (
    <div className="flex h-full items-center justify-center overflow-hidden">
      <Editor
        isGenerating={isGenerating}
        onGenerateReview={handleGenerateReview}
      />
      <Review isGenerating={isGenerating} review={review} />
    </div>
  );
}

export default App;
