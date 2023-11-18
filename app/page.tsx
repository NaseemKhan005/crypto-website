import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import Hero from "@/components/Hero";
import Sponsers from "@/components/Sponsers";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import App from "@/components/App";

const HomePage = () => {
	return (
		<div>
			<Hero />
			<Sponsers />
			<Features />
			<Roadmap />
			<Team />
			<Testimonials />
			<App />
		</div>
	);
};

export default HomePage;
