import { Component } from '@angular/core';
import Presentation from '../../components/presentation/presentation';
import { Expertise } from '../../components/expertise/expertise';
import { Projets } from '../../components/projets/projets';
import { Stack } from '../../components/stack/stack';
import { About } from '../../components/about/about';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Presentation,
    Expertise,
    Projets,
    Stack,
    About,
    Contact
  ],
  template: `
    <app-presentation />
    <app-expertise />
    <app-projets />
    <app-stack />
    <app-about />
    <app-contact />
  `
})
export class Home {}
