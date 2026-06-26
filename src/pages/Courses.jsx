import { useState } from "react";

import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

import { courses } from "../data/courses";

function Courses() {

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const filteredCourses =
    courses.filter(course => {

      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All"
          ? true
          : course.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

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

        <h1
          className="
          text-5xl
          font-bold
          mb-8
          "
        >
          Explore Courses
        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="mt-6">
          <CategoryFilter
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          mt-10
          "
        >

          {filteredCourses.map(
            course => (
              <CourseCard
                key={course.id}
                course={course}
              />
            )
          )}

        </div>

      </div>
    </>
  );
}

export default Courses;