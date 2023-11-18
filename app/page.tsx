import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import Hero from "@/components/Hero";
import Sponsers from "@/components/Sponsers";
import Team from "@/components/Team";

const HomePage = () => {
	return (
		<div>
			<Hero />
			<Sponsers />
			<Features />
			<Roadmap />
			<Team />
		</div>
	);
};

export default HomePage;
