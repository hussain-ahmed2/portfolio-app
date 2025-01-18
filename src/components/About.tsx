
const About = () => {
  return (
    <section
      id="about"
      className="rounded-xl min-h-screen max-xl:mx-2 p-2 pt-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="text-center md:text-left">
          <img
            src='./profile-about.svg'
            alt="Hussain Ahmed"
            className="rounded-lg shadow-lg mx-auto md:mx-0 w-3/4 md:w-full"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 mb-4">
            Hi, I'm{" "}
            <span className="font-semibold text-gray-800">Hussain Ahmed</span>,
            a
            <span className="font-medium">
              {" "}
              Computer Science and Engineering graduate
            </span>{" "}
            passionate about crafting innovative tech solutions. I love
            exploring modern web technologies and building scalable
            applications.
          </p>
          <ul className="space-y-2">
            <li>
              💻 Skilled in{" "}
              <span className="font-medium">
                Python, JavaScript, React, and Next.js
              </span>
              .
            </li>
            <li>
              🛠️ Experienced with{" "}
              <span className="font-medium">Tailwind CSS</span>, responsive
              design, and modern UI frameworks.
            </li>
            <li>
              🚀 Building projects like{" "}
              <span className="font-medium">Emoji World</span> and a{" "}
              <span className="font-medium">Seasonal Events Website</span>.
            </li>
          </ul>
          <div className="mt-6">
            <a
              href="#projects"
              className="bg-teal-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-teal-700 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="ml-4 bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
