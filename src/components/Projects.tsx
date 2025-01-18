import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string,
  description: string,
  link: string,
  image: string,
}

const Projects = () => {

  const mainRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const addToRef = (el: HTMLDivElement) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  }

  const projects: Project[] = [
    {
      title: "Emoji World",
      description:
        "A fun and interactive platform to explore and use emojis, built with Next.js and Tailwind CSS.",
      link: "#",
      image: "./project-alt.svg",
    },
    {
      title: "Seasonal Events Website",
      description:
        "A platform showcasing events across all six seasons of Bangladesh, with user reviews and rating features.",
      link: "#",
      image: "./project-alt.svg",
    },
    {
      title: "Weather App",
      description:
        "A simple weather forecasting app that provides real-time weather updates, built with React.",
      link: "https://weather-app-by-hussain.netlify.app/",
      image: "./project-alt.svg",
    },
  ];

  useGSAP(() => {

    gsap.from(titleRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top 90%'
      }
    })
    
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        }
      });
      gsap.from(`.image-${index}`, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 0.25,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        }
      });

      gsap.from(`.content-${index}`, {
        x: 50,
        opacity: 0,
        duration: 0.5,
        delay: 0.25,
        stagger: 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        }
      });
    });

  }, { scope: mainRef });

  return (
		<section
			ref={mainRef}
			id="projects"
			className="rounded-xl min-h-screen max-xl:mx-2 p-2 pt-20"
		>
			<div className="max-w-6xl mx-auto">
				<h2 ref={titleRef} className="text-3xl font-bold text-gray-900 text-center mb-8">
					Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							ref={addToRef}
							key={index}
							className="bg-white shadow-md rounded-lg overflow-hidden border-t-4 border-teal-500"
						>
							<img
								src={project.image}
								alt={project.title}
								className={`image-${index} w-full h-48 object-cover`}
							/>
							<div className="p-6">
								<h3
									className={`content-${index} text-xl font-semibold text-gray-800 mb-2`}
								>
									{project.title}
								</h3>
								<p
									className={`content-${index} text-gray-600 mb-4`}
								>
									{project.description}
								</p>
								<div className={`content-${index}`}>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block bg-teal-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition"
									>
										View Project
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
  );
}
export default Projects 