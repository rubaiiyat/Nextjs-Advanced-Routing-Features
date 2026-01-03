import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>This is gallery page</h1>
      <Link href={"gallery/photos"} className="btn btn-accent">
        Go to photos page
      </Link>
    </div>
  );
};

export default page;
