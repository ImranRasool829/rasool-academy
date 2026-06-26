function ChannelCard({ channel }) {
  return (
    <div
      className="
      glass
      rounded-3xl
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-purple-500/50
      h-full
      flex
      flex-col
      "
    >
      {/* Channel Icon */}

      <div className="text-5xl mb-6">
        {channel.icon}
      </div>

      {/* Channel Title */}

      <h3 className="text-2xl font-bold">
        {channel.title}
      </h3>

      {/* Channel Category */}

      <p className="text-purple-400 mt-2 font-medium">
        {channel.type}
      </p>

      {/* Description */}

      <p className="text-slate-400 mt-4 leading-7 flex-grow">
        {channel.description}
      </p>

      {/* Action Button */}

      <div className="mt-8">
        <a
          href={channel.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-flex
          items-center
          justify-center
          gap-2
          px-6
          py-3
          rounded-xl
          bg-purple-600
          hover:bg-purple-700
          transition-all
          duration-300
          font-semibold
          w-full
          "
        >
          Visit Channel
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

export default ChannelCard;