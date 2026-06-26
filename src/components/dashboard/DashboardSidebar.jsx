import { Link } from "react-router-dom";

function DashboardSidebar() {

  return (
    <div
      className="
      w-64
      min-h-screen
      glass
      p-6
      "
    >

      <h2
        className="
        text-2xl
        font-bold
        text-purple-400
        "
      >
        Dashboard
      </h2>

      <div
        className="
        mt-8
        flex
        flex-col
        gap-4
        "
      >

        <Link
          to="/dashboard"
        >
          My Courses
        </Link>

        <Link
          to="/profile"
        >
          Profile
        </Link>

      </div>

    </div>
  );
}

export default DashboardSidebar;