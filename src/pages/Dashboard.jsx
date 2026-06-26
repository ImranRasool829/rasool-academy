import DashboardSidebar
from "../components/dashboard/DashboardSidebar";

import ProgressCard
from "../components/dashboard/ProgressCard";

function Dashboard() {

  return (
    <div className="flex">

      <DashboardSidebar />

      <div
        className="
        flex-1
        p-10
        "
      >

        <h1
          className="
          text-5xl
          font-bold
          "
        >
          My Learning
        </h1>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          mt-10
          "
        >

          <ProgressCard
            title="Java"
            progress={70}
          />

          <ProgressCard
            title="Kotlin"
            progress={45}
          />

          <ProgressCard
            title="Flutter"
            progress={20}
          />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;