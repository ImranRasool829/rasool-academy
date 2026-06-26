
//⚠️ Replace YOUR_VIDEO_ID with your actual YouTube video IDs.

function YoutubeSection() {
  return (
    <section
      className="MDbn1JhAQKc"
    >

      <h2
        className="
        text-5xl
        font-bold
        mb-12
        "
      >
        Latest Tutorials
      </h2>

      <div
        className="
        grid
        md:grid-cols-3
        gap-8
        "
      >

        <iframe
          className="
          w-full
          h-64
          rounded-xl
          "
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="video1"
        />

        <iframe
          className="
          w-full
          h-64
          rounded-xl
          "
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="video2"
        />

        <iframe
          className="
          w-full
          h-64
          rounded-xl
          "
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="video3"
        />

      </div>

    </section>
  );
}

export default YoutubeSection;
