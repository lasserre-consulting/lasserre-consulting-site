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

  projets = [
    {
      color: '#2563eb',
      title: 'Mission Tracker',
      description: 'Agrégateur de missions freelance scraping 24 plateformes en temps réel. Centralise les offres, dédoublonne et présente un flux unifié de missions.',
      tags: ['Kotlin', 'Ktor', 'Angular', 'PostgreSQL'],
    },
    {
      color: '#7c3aed',
      title: "Carnet d'Route",
      description: 'Simulateur de trajet multi-motorisations avec streaming temps réel via Kafka. Compare coûts et émissions selon le type de véhicule.',
      tags: ['Kotlin', 'Ktor', 'Angular', 'Kafka'],
    },
    {
      color: '#059669',
      title: 'Qualidoc',
      description: 'Plateforme de gestion de documents qualité avec authentification JWT, gestion des rôles et workflow de validation documentaire.',
      tags: ['Spring Boot', 'Angular', 'PostgreSQL'],
    },
  ];
}
