import { cn } from "@/lib/utils";

interface TitleProps {
	title1: String;
	title2: String;
	desc: String;
	className?: String;
}

const Title = ({ title1, title2, desc, className }: TitleProps) => {
	return (
		<div className={cn("flex flex-col gap-1 md:gap-3 text-center", className)}>
			<p className="uppercase text-lg text-blue-500 font-semibold">
				{title1}
			</p>
			<h2 className="capitalize text-2xl md:text-3xl lg:text-4xl font-semibold">
				{title2}
			</h2>
			<p className="max-w-2xl mx-auto text-sm md:text-base text-black/70 dark:text-white/70">
				{desc}
			</p>
		</div>
	);
};

export default Title;
