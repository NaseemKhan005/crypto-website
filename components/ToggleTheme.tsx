"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { TbSunFilled } from "react-icons/tb";

import { PiMoonStarsFill } from "react-icons/pi";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ToggleTheme() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			size="icon"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className="bg-white hover:bg-white dark:bg-[#1E2763] rounded-full w-[4.4rem] text-lg px-[.6rem] flex items-center justify-between relative h-9 dark:h-[2.1rem] transition-all duration-500"
		>
			<span
				className={cn(
					"block h-7 w-7 dark:h-[1.85rem] dark:w-[1.85rem] z-[0] absolute top-1/2 transition-all duration-500 -translate-y-1/2 rounded-full bg-blue-500",
					theme === "light" ? "left-1" : "left-[2.35rem]"
				)}
			/>
			<TbSunFilled className="z-[1] text-white dark:text-white/50" />
			<PiMoonStarsFill className="z-[1] text-black/80 dark:text-white" />
		</Button>
	);
}
