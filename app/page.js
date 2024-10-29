import Benefits from "@/containers/Benefits";
import Collaboration from "@/containers/Collaboration";
import Hero from "@/containers/Hero";
import Pricing from "@/containers/Pricing";
import Roadmap from "@/containers/Roadmap";
import Services from "@/containers/Services";

export default function Home() {
  return (
    <main className="pt-[4.75rem] lg:pt-[5.75rem] overflow-hidden">
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
    </main>
  );
}
