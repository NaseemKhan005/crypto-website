"use client";

import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

import Title from "./common/Title";
import Image from "next/image";
import { cn } from "@/lib/utils";

const FaqCard = ({ question }: { question: String }) => {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div
			onClick={() => setShowDetails(!showDetails)}
			className={cn(
				"bg-white p-5 md:p-7 rounded-lg max-w-3xl w-full mx-auto cursor-pointer select-none overflow-hidden transition-all duration-500 dark:bg-[#1a1e57]",
				showDetails ? "h-fit" : "h-16 md:h-20"
			)}
		>
			<div className="flex items-center justify-between">
				<h2 className="text-[#131B4D] dark:text-white font-semibold md:text-lg">
					{question}
				</h2>
				<span
					className={cn(
						"p-[2px] bg-[#637381] text-white  rounded transition-all",
						showDetails ? "rotate-180" : "rotate-0"
					)}
				>
					<IoIosArrowUp />
				</span>
			</div>
			<div>
				<p className="text-[.9rem] text-black/70 dark:text-white/80 mt-5">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don&apos;t look even slightly
					believable. If you are going to use a passage of Lorem Ipsum, you need
					to be sure there isn&apos;t anything.
				</p>
			</div>
		</div>
	);
};

const Faq = () => {
	return (
		<div className="py-16 md:py-20 lg:py-28 my-10 md:my-16 relative bg-[#F5F8FF] dark:bg-[#131B4D]">
			<Image
				src="/team/testimonial-shape.svg"
				width={500}
				height={500}
				alt="shape"
				className="w-full h-full absolute top-0 -right-96 opacity-30 dark:opacity-60 -z-20"
			/>
			<Image
				src="/faq-shape.svg"
				width={500}
				height={500}
				alt="shape"
				className="w-full h-full absolute bottom-0 -left-[30rem] opacity-70 -z-20"
			/>
			<div>
				<div className="container mx-auto px-5 md:px-10 z-10">
					<Title
						title1="Faq"
						title2="Frequently Asked Questions"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel."
					/>

					<div className="flex flex-col mt-10 md:mt-16 gap-5 md:gap-8">
						<FaqCard question="How can I get benifits from it?" />
						<FaqCard question="What is ICO Crypto?" />
						<FaqCard question="How can i get the Token?" />
						<FaqCard question="How can i purchase bitcoin?" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
