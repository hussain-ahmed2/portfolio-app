import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
	name: string;
	email: string;
	message: string;
}

const Contact = () => {
	const mainRef = useRef<HTMLElement>(null);
	const formRef = useRef<HTMLFormElement>(null);

	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});
	const [formStatus, setFormStatus] = useState("");

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		setFormStatus("Thank you for reaching out! I'll get back to you soon.");
		setFormData({ name: "", email: "", message: "" });
	}

	useGSAP(
		() => {
			gsap.from(".text", {
				y: 100,
				opacity: 0,
				duration: 0.5,
				stagger: 0.2,
				scrollTrigger: {
					trigger: mainRef.current,
					start: "top 90%",
				},
			});

			gsap.from(formRef.current, {
				scale: 0,
				opacity: 0,
				duration: 0.5,
				scrollTrigger: {
					trigger: formRef.current,
					start: "top 90%",
				},
			});

			gsap.from(".label", {
				x: 50,
				opacity: 0,
				duration: 0.5,
				delay: 0.5,
				stagger: 0.1,
				scrollTrigger: {
					trigger: formRef.current,
					start: "top 90%",
				},
			});

			gsap.from(".input", {
				opacity: 0,
				duration: 0.5,
				delay: 0.5,
				stagger: 0.1,
				scrollTrigger: {
					trigger: formRef.current,
					start: "top 90%",
				},
			});

			gsap.from(".btn", {
				scale: 0,
				opacity: 0,
				duration: 0.5,
				delay: 0.5,
				scrollTrigger: {
					trigger: formRef.current,
					start: "top 90%",
				},
			});
		},
		{ scope: mainRef }
	);

	return (
		<section
			ref={mainRef}
			id="contact"
			className="rounded-xl min-h-screen max-xl:mx-2 p-2 pt-20"
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text text-3xl font-bold text-gray-900 text-center mb-8">
					Contact Me
				</h2>
				<p className="text text-lg text-gray-600 text-center mb-6">
					Got a question or just want to say hi? Feel free to reach
					out, and I'll get back to you as soon as possible!
				</p>
				<div className="flex justify-center">
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="w-full max-w-lg bg-white shadow-md rounded-lg p-8"
					>
						{/* Name Input */}
						<div className="mb-4">
							<label
								htmlFor="name"
								className="label block text-gray-700 text-sm font-medium mb-2"
							>
								Full Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
							/>
						</div>

						{/* Email Input */}
						<div className="mb-4">
							<label
								htmlFor="email"
								className="label block text-gray-700 text-sm font-medium mb-2"
							>
								Email Address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
							/>
						</div>

						{/* Message Input */}
						<div className="mb-4">
							<label
								htmlFor="message"
								className="label block text-gray-700 text-sm font-medium mb-2"
							>
								Your Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows={4}
								className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
							/>
						</div>

						{/* Submit Button */}
						<div className="btn">
							<button
								type="submit"
								className=" w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-600 transition"
							>
								Send Message
							</button>
						</div>

						{/* Form Status Message */}
						{formStatus && (
							<p className="mt-4 text-center text-teal-500 font-medium">
								{formStatus}
							</p>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};
export default Contact;
