import { redirect } from "next/navigation";

export default function Dashboard() {
  const isLogin = false;
  if (!isLogin) {
    redirect("/login");
  }
  return (
    <div className="">
      <h1>This is dashboard home</h1>
    </div>
  );
}
