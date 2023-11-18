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
		<div className="bg-white dark:bg-[#1a225c] p-5 lg:p-8 rounded-xl relative overflow-hidden">
			<Image
				src="/team/testimonial-shape.svg"
				width={500}
				height={500}
				alt="Testimonials member"
				className="w-full h-full absolute top-0 -right-20 opacity-30 dark:opacity-60"
			/>
			<div className="flex items-center gap-3 md:gap-5">
				<Image
					src={`${imgSrc}`}
					width={500}
					height={500}
					alt="Testimonials member"
					className="w-20 aspect-square rounded object-cover object-top"
				/>
				<div className="capitalize">
					<h3 className="text-lg font-semibold">Naseem Khan</h3>
					<p className="text-xs md:text-sm font-[500] text-black/70 dark:text-white/90">
						CEO & Founder @ CryptoX.
					</p>
				</div>
			</div>
			<div className="mt-5">
				<p className="text-xs md:text-sm font-[500] text-black/70 dark:text-white">
					“I believe in lifelong learning and Learn. is a great place to learn
					from experts. I&apos;ve learned a lot and recommend it to all my
					friends and familys.”
				</p>
			</div>
			<div className="flex items-center gap-4 mt-4">
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

const Testimonials = () => {
	return (
		<div className="py-16 md:py-20 lg:py-28 my-10 md:my-16 relative bg-[#F5F8FF] dark:bg-[#131B4D]">
			<div className="container mx-auto px-5 md:px-10">
				<Title
					title1="Testimonials"
					title2="What Our Client Say's"
					desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel."
				/>

				<div className="grid md:grid-cols-2 mt-10 md:mt-16 gap-5">
					<Card imgSrc="/team/image-01.jpg" />
					<Card imgSrc="/team/image-02.jpg" />
					<Card imgSrc="/team/image-03.jpg" />
					<Card imgSrc="/team/image-04.jpg" />
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
