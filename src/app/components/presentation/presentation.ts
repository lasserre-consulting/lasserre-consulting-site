import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './presentation.html',
  styleUrl: './presentation.css'
})
export default class Presentation {

  name = 'Arnaud Lasserre';

  roles = [
    'Développeur Fullstack Senior',
    'Tech Lead',
    'Consultant Freelance',
  ];

  description = `Freelance senior. J'interviens sur vos projets Java / Angular en tant que développeur ou Tech Lead — architecture, qualité de code, delivery. 10 ans d'expérience.`;

  particles = Array.from({ length: 40 }, () => ({
    style: `
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      --dur: ${3 + Math.random() * 5}s;
      --delay: ${Math.random() * 4}s;
      width: ${1 + Math.random() * 2}px;
      height: ${1 + Math.random() * 2}px;
    `
  }));
}
