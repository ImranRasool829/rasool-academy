import ChannelCard from "./ChannelCard";
import { channels } from "../../data/channels";

function ChannelsSection() {
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
            Follow My Work
          </span>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            mt-4
            "
          >
            Explore My Content Ecosystem
          </h2>

          <p
            className="
            text-slate-400
            max-w-2xl
            mx-auto
            mt-4
            "
          >
            Learn programming, follow my journey
            and stay updated with quick tech insights.
          </p>

        </div>

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >
          {channels.map((channel) => (
            <ChannelCard
              key={channel.id}
              channel={channel}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default ChannelsSection;