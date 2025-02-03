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

type Props = {
  review: string;
};

function Review({ review }: Props) {
  return (
    <div className="h-full w-6/12 relative">
      <MarkdownPreview
        source={review}
        style={{ padding: 16, height: "100vh" }}
      />
    </div>
  );
}

export default Review;
