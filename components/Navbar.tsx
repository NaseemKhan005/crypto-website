"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { ToggleTheme } from "./ToggleTheme";
import { cn } from "@/lib/utils";

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	return (
		<div className=" w-full">
			<div className="flex items-center justify-between container px-5 md:px-10 py-3 mx-auto">
				<Link href="#home">
					<Image src="/logo.svg" alt="logo" width={170} height={170} />
				</Link>

				<ul
					className={cn(
						"flex lg:items-center gap-7 lg:gap-10 capitalize font-[500] lg:relative absolute top-0 bg-white backdrop-blur-2xl h-screen lg:w-fit lg:h-fit lg:bg-transparent z-[80] w-full sm:w-80 shadow-md flex-col lg:flex-row py-32 px-5 transition-all duration-500 lg:p-0 lg:shadow-none",
						menu ? "left-0" : "-left-full"
					)}
				>
					{["home", "features", "roadmap", "contact"].map((link) => (
						<li key={link}>
							<Link
								href={`#${link}`}
								className="hover:text-blue-600 border-b block lg:inline-block w-full lg:w-fit pb-2 relative before:absolute before:left-1/2 before:bottom-0 before:bg-blue-500 before:w-full before:h-[2px] before:-translate-x-1/2 before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 lg:border-none lg:p-0"
							>
								{link}
							</Link>
						</li>
					))}
					<Button
						size="icon"
						variant="outline"
						onClick={() => setMenu(false)}
						className="rounded-full text-2xl absolute top-8 right-5 lg:hidden"
					>
						<IoClose />
					</Button>
				</ul>

				<div className="flex items-center gap-3">
					<ToggleTheme />
					<Link href="/sign-in">
						<Button variant="outline" className="rounded-full">
							Sign In
						</Button>
					</Link>
					<Button
						size="icon"
						variant="outline"
						onClick={() => setMenu(true)}
						className="rounded-full text-2xl lg:hidden"
					>
						<HiOutlineMenu />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
