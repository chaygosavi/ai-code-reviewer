// import React from "react";

// type Props = {};

// const Review = (props: Props) => {
//   return(
//   <div className="h-full w-6/12 relative">
//    <MarkdownPreview source={{"# Review your code"}} style={{ padding: 16 }} />;
//   </div>)
// };

import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Loader from "./Loader";

type Props = {
  review: string;
  isGenerating: boolean;
};

function Review({ review, isGenerating }: Props) {
  console.log(isGenerating);
  return (
    <div className="h-full w-6/12 relative overflow-scroll">
      {!isGenerating ? (
        <MarkdownPreview
          source={review}
          style={{ padding: 16, height: "100vh", margin: "20px" }}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Review;
