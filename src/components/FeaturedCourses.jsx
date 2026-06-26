import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

function FeaturedCourses() {
  return (
    <section className="py-24">

      <div className="section-container">

        <div className="text-center mb-16">

          <span
            className="
            text-purple-400
            uppercase
            tracking-widest
            text-sm
            "
          >
            Featured Programs
          </span>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            mt-4
            "
          >
            Learn From Structured Courses
          </h2>

          <p
            className="
            text-slate-400
            max-w-2xl
            mx-auto
            mt-4
            "
          >
            Industry-focused programming
            courses designed to help you
            become a professional developer.
          </p>

        </div>

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default FeaturedCourses;