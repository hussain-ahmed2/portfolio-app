import { FaBars } from "react-icons/fa6";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
	const [open, setOpen] = useState(false);
	const mainRef = useRef<HTMLElement>(null);

	const handleClick = () => {
		setOpen((prev) => !prev);
	};

	useGSAP(
		() => {
			const tl = gsap.timeline();
			const mm = gsap.matchMedia();

			tl.from(mainRef.current, { y: -100, opacity: 0, duration: 0.5 });
			tl.from(".logo", { x: -50, opacity: 0, duration: 0.5 });

			mm.add("(min-width: 768px)", () => {
				tl.from(
					".link",
					{ x: 50, opacity: 0, duration: 0.5, stagger: 0.1 },
					"<"
				);
			});

      mm.add("(max-width: 767px)", () => {
        tl.from(
          ".nav-toggle-btn",
          { x: 50, opacity: 0, duration: 0.5 },
          "<"
        );
      });

		},
		{ scope: mainRef }
	);

	return (
		<header ref={mainRef} className="fixed top-0 w-full px-2 pt-2  z-50">
			<nav
				className={`flex justify-between items-center backdrop-blur-sm h-16 rounded-t-[32px] rounded-b-[32px] border border-teal-500 bg-teal-100 px-4 md:px-8 relative transition-all  ease-linear delay-100 duration-100 max-w-screen-xl mx-auto ${
					open &&
					"max-md:rounded-b-none max-md:rounded-t-[32px] delay-100 duration-300"
				}`}
			>
				<a
					className="logo text-2xl font-bold max-md:ps-4 text-teal-800"
					href="#"
					onClick={() => setOpen(false)}
				>
					Hussain
				</a>
				<div
					className={`flex bg-teal-100 bg-opacity-90 max-md:border-teal-500 md:gap-10 md:items-center absolute top-16 right-0 md:static flex-col md:flex-row max-md:w-full text-center max-md:backdrop-blur-2xl  max-md:*:py-2 max-md:border max-md:h-0 max-md:opacity-0 overflow-hidden transition-all duration-300 ease-linear ${
						open &&
						"max-md:h-[200px] max-md:opacity-100 max-md:rounded-b-[32px] delay-100"
					}`}
				>
					<a
						className="link max-md:hover:bg-teal-300 transition-colors duration-300 ease-linear md:after:content-[''] md:after:block md:after:h-px md:hover:after:bg-teal-500 md:after:transition-all md:after:w-0 md:hover:after:w-full md:after:duration-300 md:after:rounded md:hover:text-teal-500 max-md:hover:text-teal-800"
						href="#home"
						onClick={handleClick}
					>
						Home
					</a>
					<a
						className="link max-md:hover:bg-teal-300 transition-colors duration-300 ease-linear md:after:content-[''] md:after:block md:after:h-px md:hover:after:bg-teal-500 md:after:transition-all md:after:w-0 md:hover:after:w-full md:after:duration-300 md:after:rounded md:hover:text-teal-500 max-md:hover:text-teal-800"
						href="#about"
						onClick={handleClick}
					>
						About
					</a>
					<a
						className="link max-md:hover:bg-teal-300 transition-colors duration-300 ease-linear md:after:content-[''] md:after:block md:after:h-px md:hover:after:bg-teal-500 md:after:transition-all md:after:w-0 md:hover:after:w-full md:after:duration-300 md:after:rounded md:hover:text-teal-500 max-md:hover:text-teal-800"
						href="#skills"
						onClick={handleClick}
					>
						Skills
					</a>
					<a
						className="link max-md:hover:bg-teal-300 transition-colors duration-300 ease-linear md:after:content-[''] md:after:block md:after:h-px md:hover:after:bg-teal-500 md:after:transition-all md:after:w-0 md:hover:after:w-full md:after:duration-300 md:after:rounded md:hover:text-teal-500 max-md:hover:text-teal-800"
						href="#projects"
						onClick={handleClick}
					>
						Projects
					</a>
					<a
						className="link max-md:hover:bg-teal-300 transition-colors duration-300 ease-linear md:after:content-[''] md:after:block md:after:h-px md:hover:after:bg-teal-500 md:after:transition-all md:after:w-0 md:hover:after:w-full md:after:duration-300 md:after:rounded md:hover:text-teal-500 max-md:hover:text-teal-800"
						href="#contact"
						onClick={handleClick}
					>
						Contact
					</a>
				</div>
				<button
					onClick={handleClick}
					className="nav-toggle-btn md:hidden text-2xl text-teal-800"
				>
					<FaBars />
				</button>
			</nav>
		</header>
	);
};
export default Header;
