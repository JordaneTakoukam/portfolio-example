import { AccueilHero } from "@/components/Section/Accueil-Hero";
import { AccueilHero2 } from "@/components/Section/Accueil-Hero2";
import { AccueilInterventions } from "@/components/Section/Accueil-Interventions";
import { AccueilRessources } from "@/components/Section/Accueil-Ressources";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 lg:p-24">
      <AccueilHero />
      <AccueilInterventions />
      <AccueilRessources />
      <AccueilHero2 />
    </main>
  );
}
