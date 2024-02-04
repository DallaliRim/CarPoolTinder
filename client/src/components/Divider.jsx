import React from "react";

function Divider({ title }) {
  return (
    <div>
      {/* <div className="w-75 border border-2 mx-auto m-4"></div> */}
      <h2 className="text-center">{title}</h2>
      <div className="w-75 border border-2 mx-auto m-4"></div>
    </div>
  );
}

export default Divider;
