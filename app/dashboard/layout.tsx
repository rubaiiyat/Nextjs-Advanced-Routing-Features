import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 mx-24 gap-10">
      <div className="col-span-3 bg-base-200 min-h-screen rounded-xl p-6">
        <h1 className="text-2xl font-semibold tracking-wide text-accent mb-6 text-left">
          Dashboard
        </h1>

        <ul className="flex flex-col gap-2 text-sm font-medium text-left">
          <li>
            <Link
              href="/dashboard/overview/"
              className="block px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition duration-1000"
            >
              Overview
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/statistics/"
              className="block px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition duration-1000"
            >
              Statistics
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/report/"
              className="block px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition duration-1000"
            >
              Report
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/settings/"
              className="block px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition duration-1000"
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>

      <main className="col-span-9">{children}</main>
    </div>
  );
}
