import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  copied = false;

  copyEmail() {
    navigator.clipboard.writeText('contact@lasserre-consulting.fr').then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
