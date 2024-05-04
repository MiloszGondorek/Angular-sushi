import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../reusable/button/button.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  src: string = '';
  imgs: string[] = [
    'sushi1.jpg',
    'locale.jpg',
    'main.jpg',
    'locale.jpg',
    'main.jpg',
    'sushi1.jpg',
  ];
  setImg(src: string) {
    this.src = src;
  }

  hideImg() {
    this.src = '';
  }
}
