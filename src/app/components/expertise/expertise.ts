import { Component } from '@angular/core';
import { SafeHtmlPipe } from '../../shared/safe-html.pipe';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './expertise.html',
  styleUrl: './expertise.css'
})
export class Expertise {

  expertises = [
    {
      index: '01',
      color: '#2563eb',
      title: $localize`:@@expertise.fullstack.title:Développement Fullstack`,
      description: $localize`:@@expertise.fullstack.desc:Conception et développement d'applications robustes, scalables et maintenables de bout en bout — du backend Java / Spring Boot à l'interface Angular.`,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>`,
      tags: ['Java', 'Kotlin', 'Spring Boot', 'Angular', 'TypeScript', 'REST API'],
    },
    {
      index: '02',
      color: '#7c3aed',
      title: $localize`:@@expertise.techlead.title:Tech Lead`,
      description: $localize`:@@expertise.techlead.desc:Définition de l'architecture technique, animation des revues de code, montée en compétences de l'équipe et alignement avec les enjeux produit.`,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        <path d="M18 8l2 2 4-4"/>
      </svg>`,
      tags: ['Architecture', 'Code Review', 'Mentoring', 'Microservices'],
    },
    {
      index: '03',
      color: '#059669',
      title: $localize`:@@expertise.agile.title:Agilité & Scrum`,
      description: $localize`:@@expertise.agile.desc:Delivery structuré et orienté valeur produit. Animation des cérémonies, priorisation du backlog et pilotage par les indicateurs.`,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22V12"/>
        <path d="M12 12L4.93 7"/>
        <path d="M12 12l7.07-5"/>
        <path d="M12 2v4"/>
        <circle cx="12" cy="22" r="1" fill="currentColor"/>
        <circle cx="4" cy="7" r="1" fill="currentColor"/>
        <circle cx="20" cy="7" r="1" fill="currentColor"/>
      </svg>`,
      tags: ['Scrum', 'Kanban', 'Backlog', 'OKR', 'Delivery'],
    },
  ];
}
