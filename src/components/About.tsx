import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const mainRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const aboutTl = gsap.timeline({
				delay: 0.2,
				scrollTrigger: {
					trigger: mainRef.current,
					start: "top 90%",
				},
			});

			aboutTl.from(".image", {
				y: 100,
				opacity: 0,
				duration: 0.5,
			})
      .from('.text', {
        x: 50, 
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      });
		},
		{ scope: mainRef }
	);

	return (
		<section
			ref={mainRef}
			id="about"
			className="rounded-xl min-h-screen max-xl:mx-2 p-2 pt-20"
		>
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* Image Section */}
				<div className="image text-center md:text-left">
					<img
						src="./profile-about.svg"
						alt="Hussain Ahmed"
						className="rounded-lg shadow-lg mx-auto md:mx-0 w-3/4 md:w-full"
					/>
				</div>

				{/* Text Content */}
				<div>
					<h2 className="text text-3xl font-bold text-gray-900 mb-4">
						About Me
					</h2>
					<p className="text text-lg text-gray-600 mb-4">
						Hi, I'm{" "}
						<span className="text font-semibold text-gray-800">
							Hussain Ahmed
						</span>
						, a
						<span className="text font-medium">
							{" "}
							Computer Science and Engineering graduate
						</span>{" "}
						passionate about crafting innovative tech solutions. I
						love exploring modern web technologies and building
						scalable applications.
					</p>
					<ul className="space-y-2">
						<li className="text">
							💻 Skilled in{" "}
							<span className="text font-medium">
								Python, JavaScript, React, and Next.js
							</span>
							.
						</li>
						<li className="text">
							🛠️ Experienced with{" "}
							<span className="text font-medium">
								Tailwind CSS
							</span>
							, responsive design, and modern UI frameworks.
						</li>
						<li className="text">
							🚀 Building projects like{" "}
							<span className="text font-medium">
								Emoji World
							</span>{" "}
							and a{" "}
							<span className="text font-medium">
								Seasonal Events Website
							</span>
							.
						</li>
					</ul>
					<div className="mt-6 flex ">
						<span className="text">
							<a
								href="#projects"
								className="bg-teal-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-teal-700 transition"
							>
								View My Work
							</a>
						</span>
						<span className="text">
							<a
								href="#contact"
								className="ml-4 bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition"
							>
								Contact Me
							</a>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
