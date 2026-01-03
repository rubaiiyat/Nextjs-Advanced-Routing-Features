import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>This is gallery page</h1>
      <Link href={"images/546"} className="btn btn-accent">
        Go to images page
      </Link>
    </div>
  );
};

export default page;
