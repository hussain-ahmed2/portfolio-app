import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Skill = {
	category: string;
	items: string[];
};

type ContentType = HTMLDivElement;

const Skills = () => {
	const mainRef = useRef<HTMLElement>(null);
	const contentRefs = useRef<ContentType[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

	const addToRef = (el: ContentType) => {
		if (el && !contentRefs.current.includes(el)) {
			contentRefs.current.push(el);
		}
	};

	const skills: Skill[] = [
		{
			category: "Languages",
			items: ["Python", "Java", "C++", "PHP", "TypeScript"],
		},
		{
			category: "Frontend",
			items: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Next.js",
				"Tailwind CSS",
			],
		},
		{
			category: "Backend",
			items: ["Node.js", "Express", "MySQL", "MongoDB"],
		},
		{ category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
	];

	useGSAP(
		() => {
			

			contentRefs.current.forEach((content, index) => {
				gsap.from(content, {
					y: 100,
					opacity: 0,
					duration: 0.5,
					scrollTrigger: {
						trigger: content,
						start: "top 90%",
					},
				})
        gsap.from(`.list-item-${index}`, {
					x: 50,
					opacity: 0,
					duration: 0.5,
					stagger: 0.1,
          scrollTrigger: {
            trigger: content,
            start: "top 90%",
          }
				});
			});
		},
		{ scope: mainRef }
	);

	return (
		<section
			ref={mainRef}
			id="skills"
			className="rounded-xl min-h-screen max-xl:mx-2 p-2 pt-20"
		>
			<div className="max-w-6xl mx-auto">
				<h2
					ref={titleRef}
					className="text-3xl font-bold text-gray-900 text-center mb-8"
				>
					Skills
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					{skills.map((skillSet, index) => (
						<div
							key={index}
							ref={addToRef}
							className="bg-gray-50 shadow-md rounded-lg p-6 border-t-4 border-teal-500"
						>
							<h3 className="text-xl font-semibold text-gray-800 mb-4">
								{skillSet.category}
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-600">
								{skillSet.items.map((skill, idx) => (
									<li
										className={`list-item-${index}`}
										key={idx}
									>
										{skill}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Skills;
