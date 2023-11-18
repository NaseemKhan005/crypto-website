"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

interface SponserImageProps {
	lightImg: string;
	darkImg: string;
}

const SponserImage = ({ lightImg, darkImg }: SponserImageProps) => {
	const { theme } = useTheme();

	return (
		<Image
			src={`${theme === "light" ? lightImg : darkImg}`}
			alt="sponsers"
			width={500}
			height={500}
			className="w-32 lg:w-36 xl:w-40 h-full object-contain grayscale hover:grayscale-0 cursor-pointer"
		/>
	);
};

const Sponsers = () => {
	return (
		<div className="md:py-16 lg:py-20">
			<div className="container mx-auto px-5 md:px-10">
				<h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
					Join the 20,000+ companies using the our platform
				</h2>

				<div className="flex items-center lg:flex-nowrap flex-wrap justify-center lg:justify-between mt-5 md:mt-10 lg:mt-16 lg:px-16 lg:gap-0 gap-5">
					<SponserImage
						lightImg="/sponsers/uideck.svg"
						darkImg="/sponsers/uideck-dark.svg"
					/>
					<SponserImage
						lightImg="/sponsers/tailgrids.svg"
						darkImg="/sponsers/tailgrids-dark.svg"
					/>
					<SponserImage
						lightImg="/sponsers/lineicons.svg"
						darkImg="/sponsers/lineicons-dark.svg"
					/>
					<SponserImage
						lightImg="/sponsers/ayroui.svg"
						darkImg="/sponsers/ayroui-dark.svg"
					/>
					<SponserImage
						lightImg="/sponsers/plainadmin.svg"
						darkImg="/sponsers/plainadmin-dark.svg"
					/>
				</div>
			</div>
		</div>
	);
};

export default Sponsers;
