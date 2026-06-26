import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/courses";

function CourseDetails() {

  const { id } = useParams();

  const course =
    courses.find(
      c => c.id === Number(id)
    );

  if (!course) {
    return (
      <div>
        Course Not Found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        pt-32
        "
      >

        <img
          src={course.image}
          alt={course.title}
          className="
          w-full
          h-[500px]
          object-cover
          rounded-3xl
          "
        />

        <h1
          className="
          text-5xl
          font-bold
          mt-8
          "
        >
          {course.title}
        </h1>

        <p className="mt-4 text-slate-400">
          {course.description}
        </p>

        <div
          className="
          mt-8
          grid
          md:grid-cols-4
          gap-4
          "
        >

          <div className="glass p-4 rounded-xl">
            👨‍🏫 {course.instructor}
          </div>

          <div className="glass p-4 rounded-xl">
            📚 {course.lessons} Lessons
          </div>

          <div className="glass p-4 rounded-xl">
            ⏱ {course.duration}
          </div>

          <div className="glass p-4 rounded-xl">
            👨‍🎓 {course.students}
          </div>

        </div>

      </div>
    </>
  );
}

export default CourseDetails;