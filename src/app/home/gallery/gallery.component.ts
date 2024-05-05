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
  imgs: Img[] = [
    new Img('sushi1.jpg'),
    new Img('locale.jpg'),
    new Img('main.jpg'),
    new Img('locale.jpg'),
    new Img('main.jpg'),
    new Img('sushi1.jpg'),
  ];
  setImg(src: string) {
    this.src = src;
  }

  hideImg() {
    this.src = '';
  }
}

class Img {
  src!: string;
  id = 0;
  static lastId = -1;
  constructor(src: string) {
    Img.lastId++;
    this.id = Img.lastId;
    this.src = src;
  }
}
