import { Component } from '@angular/core';
import { SafeHtmlPipe } from '../../shared/safe-html.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  stats = [
    { value: '10 ans', label: "d'expérience en développement" },
    { value: '40+',   label: 'projets livrés' },
    { value: '100%',  label: 'Fullstack pratiqué' },
  ];

  timeline = [
    {
      period: '2025 – présent',
      tag: 'Freelance',
      title: 'Consultant indépendant',
      description: 'Missions longue durée en tant que Tech Lead ou développeur senior. Focus sur la performance, la qualité et la valeur produit.',
    },
    {
      period: '2021 – 2025',
      tag: 'Consultant',
      title: 'ESN — Conseil & Intégration',
      description: 'Missions variées en Java / Angular / VueJS chez des clients grands comptes.',
    },
    {
      period: '2016 – 2021',
      tag: 'Client final',
      title: 'Développeur Fullstack',
      description: 'Développement, maintenance et déploiement d\'une quarantaine de projets au sein d\'une startup de 6 personnes en charge de l\'intégralité du périmètre métier.',
    },
  ];

  values = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Fiabilité',
      description: 'Engagements tenus, deadlines respectées, communication proactive.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>`,
      title: 'Performance',
      description: 'Code optimisé, architecture scalable, delivery orienté valeur.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: 'Transparence',
      description: 'Reporting clair, implication dans les décisions, pas de zone grise.',
    },
  ];
}
