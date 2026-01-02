"use client";
import Link from "next/link";

const page = () => {
  return (
    <div className="grid grid-cols-12 mx-24 gap-10">
      <div className="col-span-3 bg-base-200 min-h-screen rounded-xl p-6">
        <h1 className="text-2xl font-semibold tracking-wide text-accent mb-6 text-left">
          Dashboard
        </h1>

        <ul className="flex flex-col gap-2 text-sm font-medium text-left">
          <li>
            <Link
              href="overview/"
              className="block px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition duration-1000"
            >
              Overview
            </Link>
          </li>

          <li>
            <Link
              href="statistics/"
              className="block px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition duration-1000"
            >
              Statistics
            </Link>
          </li>

          <li>
            <Link
              href="report/"
              className="block px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition duration-1000"
            >
              Report
            </Link>
          </li>

          <li>
            <Link
              href="settings/"
              className="block px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition duration-1000"
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>

      <div className="grid col-span-9">
        Content{" "}
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          reiciendis iste accusamus velit et architecto sapiente quo praesentium
          eaque! Delectus iste enim, alias recusandae pariatur, optio blanditiis
          excepturi mollitia maiores explicabo itaque repudiandae saepe quod
          atque, nobis eius ducimus velit. Voluptatibus quibusdam nulla velit
          fuga eum cumque magni, perferendis consectetur?
        </h1>
      </div>
    </div>
  );
};

export default page;
