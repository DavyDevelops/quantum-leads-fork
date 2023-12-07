import React from "react";

function LandingPageFooter() {
  return (
    <div className="border-t border-gray-200 bg-white px-5 py-4 text-right">
      <span className="text-gray-600">Contact: </span>
      <span className="font-bold text-yellow-500">
        <a
          href="mailto:customerservice@combsai.io"
          className="text-yellow-500 hover:underline"
        >
          customerservice@combsai.io
        </a>
      </span>
    </div>
  );
}

export default LandingPageFooter;
