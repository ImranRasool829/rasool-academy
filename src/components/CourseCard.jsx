import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div
      className="
      glass
      rounded-3xl
      overflow-hidden
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      "
    >
      <img
        src={course.image}
        alt={course.title}
        className="
        w-full
        h-56
        object-cover
        "
      />

      <div className="p-6">

        <span
          className="
          text-purple-400
          text-sm
          font-semibold
          uppercase
          "
        >
          {course.category}
        </span>

        <h3
          className="
          text-2xl
          font-bold
          mt-2
          "
        >
          {course.title}
        </h3>

        <p
          className="
          text-slate-400
          mt-4
          text-sm
          "
        >
          {course.description}
        </p>

        <div
          className="
          flex
          justify-between
          mt-6
          text-sm
          text-slate-400
          "
        >
          <span>
            📚 {course.lessons} Lessons
          </span>

          <span>
            ⏱ {course.duration}
          </span>
        </div>

        <div
          className="
          flex
          justify-between
          mt-3
          text-sm
          text-slate-400
          "
        >
          <span>
            👨‍🏫 {course.instructor}
          </span>

          <span>
            👨‍🎓 {course.students}
          </span>
        </div>

        <Link
          to={`/course/${course.id}`}
          className="
          block
          text-center
          mt-6
          bg-purple-600
          hover:bg-purple-700
          transition
          py-3
          rounded-xl
          font-semibold
          "
        >
          Explore Course
        </Link>

      </div>
    </div>
  );
}

export default CourseCard;