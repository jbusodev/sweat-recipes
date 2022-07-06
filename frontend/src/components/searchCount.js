import React from "react";

export default function SearchCount({ count }) {
  let string = " recipe";
  if (count > 1) {
    string = " recipes";
  }
  return (
    <div id="recipe-count">
      <h4 className="mb-0">
        {count}
        {string}
      </h4>
    </div>
  );
}
