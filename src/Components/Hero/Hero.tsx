import HeroImage from "/banner-stack.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 py-12 md:flex-row md:py-20"
    >
      {/* Content */}
      <div className="w-full">
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-[60px]">
          Build Your Ideal{" "}
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-gray-500">
          Explore frontend, backend, database, and tooling
          options, compare them side by side, and put together
          the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-2xl bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3 font-medium text-white transition hover:opacity-90">
            Explore Technologies
          </button>

          <button className="rounded-2xl border border-gray-400 px-5 py-3 text-gray-600 transition hover:border-pink-500 hover:text-pink-500">
            Learn More
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full">
        <img
          src={HeroImage}
          alt="Development stack illustration"
          className="mx-auto w-full max-w-xl"
        />
      </div>
    </section>
  );
}