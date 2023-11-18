import Image from "next/image";
import Link from "next/link";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa6";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface AppButtonProps {
	name: String;
	icon: any;
	className?: String;
	iconBg?: String;
}

const AppButton = ({ name, icon: Icon, className, iconBg }: AppButtonProps) => {
	return (
		<Button
			variant="outline"
			className={cn(
				"rounded-full bg-[#2a3bad] text-white hover:bg-[#293486] hover:text-white border border-[#131B4D] pl-2 pr-6 py-[1.7rem] text-[.9rem] dark:text-white flex items-center gap-2",
				className
			)}
		>
			<span
				className={cn(
					"bg-blue-500 rounded-full text-white p-2 text-xl",
					iconBg
				)}
			>
				<Icon />
			</span>{" "}
			{name}
		</Button>
	);
};

const App = () => {
	return (
		<div className="py-5 relative overflow-x-hidden">
			<div className="container mx-auto px-5 md:px-10 flex items-center justify-between gap-20 md:gap-10 lg:gap-32 flex-col md:flex-row">
				<div className="flex flex-col gap-1 md:gap-3">
					<p className="uppercase text-lg text-blue-500 font-semibold">
						DOWNLOAD OUR APP
					</p>
					<h2 className="capitalize text-2xl lg:text-4xl font-semibold">
						The choice is yours, we&apos;ve got you covered
					</h2>
					<p className="max-w-2xl mx-auto text-sm md:text-base text-black/70 dark:text-white/70">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
						tristique, nisl ut viverra porttitor, dolor sem lacinia orci, et
						pretium quam mi a eros sed molestie est.
					</p>

					<Link
						href="https://naseemkhan.vercel.app/"
						target="_blank"
						className="flex items-center gap-4 mt-8 w-fit"
					>
						<AppButton icon={BsApple} name="App Store" />
						<AppButton
							icon={FaGooglePlay}
							name="Play Store"
							className="bg-transparent border-blue-500 hover:bg-blue-500 text-blue-500"
							iconBg="bg-[#2a3bad]"
						/>
					</Link>
				</div>

				<div className="w-full sm:w-[70%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-full">
					<Image
						src="/app-image.png"
						width={500}
						height={500}
						alt="team member"
						className="w-full h-full object-cover object-top"
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
