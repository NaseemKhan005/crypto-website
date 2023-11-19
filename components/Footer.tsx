"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { BiWorld } from "react-icons/bi";

import { cn } from "@/lib/utils";
import { FooterLinks1, FooterLinks2 } from "@/constants/FooterLinks";

interface SocailIconsProps {
	link: String;
	icon: any;
}

interface FooterLinksProps {
	title: String;
	links: Object[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
	return (
		<div>
			<h2 className="whitespace-nowrap text-xl sm:text-2xl font-semibold capitalize mb-5">
				{title}
			</h2>
			<div className="flex flex-col gap-3">
				{links.map((link: any) => (
					<Link
						key={link.name}
						href={`${link.link}`}
						target="_blank"
						className="text-neutral-600 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 text-sm sm:text-base font-[500] hover:underline whitespace-nowrap"
					>
						{link.name}
					</Link>
				))}
			</div>
		</div>
	);
};

const SocialIcons = ({ link, icon: Icon }: SocailIconsProps) => {
	return (
		<Link
			href={`${link}`}
			target="_blank"
			className="text-lg bg-[#f3f6ff] text-neutral-600 rounded-full hover:bg-blue-500 hover:text-white p-3 dark:bg-[#131B4D] dark:text-white dark:hover:bg-blue-500"
		>
			<Icon />
		</Link>
	);
};

const Footer = () => {
	const { theme } = useTheme();

	return (
		<div className="mt-10 md:mt-0 md:pt-20 relative before:absolute before:bg-[url('/footer-shape-1.svg')] before:bg-contain before:w-full before:-top-20 before:left-0 before:h-full before:bg-no-repeat overflow-hidden before:right-0 after:absolute after:bg-[url('/footer-shape-2.svg')] after:bg-cover after:w-80 lg:after:-right-20 after:right-0 after:h-full after:bg-no-repeat sm:after:block after:hidden after:-bottom-20 lg:after:-bottom-32 after:-rotate-12 after:-z-40 before:-z-40">
			<div className="container mx-auto px-5 md:px-10 flex items-start justify-between flex-wrap lg:flex-nowrap gap-y-10 gap-x-5 sm:gap-10 lg:gap-16">
				<div className="w-full lg:max-w-sm flex flex-col gap-5 mb-5 lg:mb-0">
					<Link href="/">
						<Image
							src={cn(theme === "light" ? "/logo.svg" : "/logo-dark.svg")}
							alt="logo"
							width={170}
							height={170}
							className="dark:text-white"
						/>
					</Link>
					<p className="text-neutral-600 dark:text-white font-[500]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
						quam nec ante fringilla vel at erat convallis elit.
					</p>
					<div className="flex items-center gap-2 lg:my-4">
						<SocialIcons
							link="https://www.linkedin.com/in/naseemkhann"
							icon={FaLinkedin}
						/>
						<SocialIcons
							link="https://github.com/NaseemKhan005"
							icon={FaGithub}
						/>
						<SocialIcons
							link="https://www.upwork.com/freelancers/~01a320b86f9044dd91?viewMode=1"
							icon={SiUpwork}
						/>
						<SocialIcons link="https://naseemkhan.vercel.app/" icon={BiWorld} />
					</div>
				</div>

				<FooterLinks title="Quick Links" links={FooterLinks1} />
				<FooterLinks title="Supports" links={FooterLinks2} />
				<FooterLinks title="Quick Links" links={FooterLinks2} />
			</div>

			<div className="text-center border-t w-full py-8 md:py-10 mt-10 md:mt-20 text-neutral-600 dark:text-white font-[500] text-sm sm:text-base">
				<p>
					© Crypto {new Date().getFullYear()} - all Rights Reserved, Created by{" "}
					<Link
						href="https://naseemkhan.vercel.app/"
						target="_blank"
						className="hover:underline text-blue-500"
					>
						Naseem Khan
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Footer;
