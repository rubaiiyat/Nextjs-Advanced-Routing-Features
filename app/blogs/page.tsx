import React from "react";
import MainContent from "./@maincontent/page";
import Latest from "./@latest/page";
import Popular from "./@popular/page";

const page = () => {
  return (
    <div>
      <h1>This is blogs page</h1>

      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-4">
          <MainContent></MainContent>
        </div>
        <div className="col-span-4">
          <Latest></Latest>
        </div>
        <div className="col-span-4">
          <Popular></Popular>
        </div>
      </div>
    </div>
  );
};

export default page;
