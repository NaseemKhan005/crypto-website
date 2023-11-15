import Image from "next/image";

const Images = ({ imgSrc }: { imgSrc: string }) => {
	return (
		<Image
			src={imgSrc}
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
					<Images imgSrc="/sponsers/uideck.svg" />
					<Images imgSrc="/sponsers/tailgrids.svg" />
					<Images imgSrc="/sponsers/lineicons.svg" />
					<Images imgSrc="/sponsers/ayroui.svg" />
					<Images imgSrc="/sponsers/plainadmin.svg" />
				</div>
			</div>
		</div>
	);
};

export default Sponsers;
