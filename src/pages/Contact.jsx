import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32">

        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <form className="mt-10 space-y-4">

          <input
            className="w-full p-4 bg-slate-900 rounded-xl"
            placeholder="Your Name"
          />

          <input
            className="w-full p-4 bg-slate-900 rounded-xl"
            placeholder="Email"
          />

          <textarea
            rows="5"
            className="w-full p-4 bg-slate-900 rounded-xl"
            placeholder="Message"
          />

          <button
            className="bg-purple-600 px-8 py-3 rounded-xl"
          >
            Send Message
          </button>

        </form>

      </div>
    </>
  );
}

export default Contact;