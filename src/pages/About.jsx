import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-32">

        <h1 className="text-5xl font-bold">
          About Rasool Academy
        </h1>

        <p className="mt-8 text-slate-400 text-lg">
          Rasool Academy helps students learn
          Java, Kotlin, Flutter, Android,
          React Native and modern software
          development technologies through
          easy-to-understand tutorials.
        </p>

      </div>
    </>
  );
}

export default About;