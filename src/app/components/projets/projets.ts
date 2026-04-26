import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './projets.html',
  styleUrl: './projets.css'
})
export class Projets {

  projets: { color: string; title: string; url?: string; description: string; tags: string[] }[] = [
    {
      color: '#2563eb',
      title: 'Entrevia',
      url: 'https://entrevia.dev',
      description: $localize`:@@projets.entrevia.desc:Plateforme de préparation aux entretiens techniques pour développeurs. Flashcards en répétition espacée, simulation d'entretien, scoring IA et 100+ stacks couvertes (Java, Angular, React, Kotlin, DevOps, IA…).`,
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'IA', 'SaaS'],
    },
    {
      color: '#2563eb',
      title: 'Mission Tracker',
      url: 'https://lasserre-consulting.fr/mission-tracker/',
      description: $localize`:@@projets.mission.desc:Agrégateur de missions freelance scraping 24 plateformes en temps réel. Centralise les offres, dédoublonne et présente un flux unifié de missions.`,
      tags: ['Kotlin', 'Ktor', 'Angular', 'PostgreSQL'],
    },
    {
      color: '#7c3aed',
      title: "Carnet d'Route",
      url: 'https://www.lasserre-consulting.fr/carnetroute/simulation',
      description: $localize`:@@projets.carnet.desc:Simulateur de trajet multi-motorisations avec streaming temps réel via Kafka. Compare coûts et émissions selon le type de véhicule.`,
      tags: ['Kotlin', 'Ktor', 'Angular', 'Kafka'],
    },
  ];
}
