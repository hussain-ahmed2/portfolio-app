
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen max-xl:mx-2 flex md:flex-row flex-col justify-center items-center max-md:gap-20 px-6 rounded-xl p-2"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Welcome to My World 🌍
        </h1>
        <p className="text-lg md:text-xl font-light mb-8">
          Hi, I'm <span className="font-medium">Hussain Ahmed</span>! A
          passionate developer, tech enthusiast, and lifelong learner. Dive into
          my projects, explore my journey, and let’s build the future together!
          🚀
        </p>
        <div className="space-x-4">
          <a
            href="#about"
            className="bg-white text-teal-500 font-medium py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Learn More About Me
          </a>
          <a
            href="#projects"
            className="bg-transparent border-2 border-white font-medium py-3 px-6 rounded-lg hover:bg-white hover:text-teal-500 transition"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
