import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession();
  if (!session) {
    return (
      <div className="p-10">
        <a className="underline" href="/login">Go to login</a>
      </div>
    );
  }

  return <div className="p-10">Welcome, {session.user?.email}</div>;
}
