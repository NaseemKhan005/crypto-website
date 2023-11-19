import { IoMdSend } from "react-icons/io";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
	return (
		<div className="py-5 sm:py-10 relative overflow-hidden">
			<div className="container mx-auto p-7 sm:p-10 md:p-12 xl:p-14 md:rounded-lg flex flex-col lg:flex-row items-center justify-between gap-5 xl:gap-20 bg-[#131B4D] text-white w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl relative before:absolute before:bg-[url('/newsletter-shape.svg')] before:bg-cover before:w-[40%] before:h-full before:bg-no-repeat overflow-hidden before:right-0">
				<div>
					<h2 className="text-3xl sm:text-4xl mb-3 md:text-[2.5rem] font-semibold">
						Newsletter
					</h2>
					<p className="text-sm sm:text-[.9rem] font-[500]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
						quam nec ante aliquet fringilla vel at erat.
					</p>
				</div>
				<div className="w-full relative">
					<Input
						placeholder="Enter your email address"
						name="email"
						id="email"
						required
						className="py-7 dark:text-white sm:py-8 text-sm sm:text-base px-5 sm:px-7 rounded-full text-black pr-16 sm:pr-36"
					/>
					<Button
						type="submit"
						className="rounded-full bg-blue-600 hover:bg-blue-700 hover:text-white sm:pl-2 sm:px-6 px-3 py-6 sm:py-[1.6rem] text-[.9rem] dark:text-white flex items-center gap-1 absolute top-1/2 -translate-y-1/2 right-1 sm:right-2"
					>
						<span className="hidden sm:block">Submit</span>
						<span className="text-2xl sm:text-xl">
							<IoMdSend />
						</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
