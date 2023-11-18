import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { BiWorld } from "react-icons/bi";

import Title from "./common/Title";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
	imgSrc: String;
}

const Card = ({ imgSrc }: CardProps) => {
	return (
		<div className="bg-[#F5F8FF] dark:bg-[#131B4D] p-3 rounded-xl text-center flex flex-col items-center">
			<Image
				src={`${imgSrc}`}
				width={500}
				height={500}
				alt="team member"
				className="w-full h-80 sm:h-64 rounded-xl object-cover object-top"
			/>
			<h2 className="mt-4 text-lg font-semibold">Naseem Khan</h2>
			<p className="text-sm text-black/70 dark:text-white/70">
				FullStack Developer
			</p>
			<div className="flex items-center gap-4 my-4">
				<Link
					href="https://www.linkedin.com/in/naseemkhann"
					target="_blank"
					className="text-lg"
				>
					<FaLinkedin />
				</Link>
				<Link
					href="https://github.com/NaseemKhan005"
					target="_blank"
					className="text-lg"
				>
					<FaGithub />
				</Link>
				<Link
					href="https://www.upwork.com/freelancers/~01a320b86f9044dd91?viewMode=1"
					target="_blank"
					className="text-lg"
				>
					<SiUpwork />
				</Link>
				<Link
					href="https://naseemkhan.vercel.app/"
					target="_blank"
					className="text-lg"
				>
					<BiWorld />
				</Link>
			</div>
		</div>
	);
};

const Team = () => {
	return (
		<div className="py-16 relative">
			<div className="container mx-auto px-5 md:px-10">
				<Title
					title1="our team"
					title2="meet our team"
					desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel."
				/>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5">
					<Card imgSrc="/team/image-01.jpg" />
					<Card imgSrc="/team/image-02.jpg" />
					<Card imgSrc="/team/image-03.jpg" />
					<Card imgSrc="/team/image-04.jpg" />
				</div>
			</div>
		</div>
	);
};

export default Team;
