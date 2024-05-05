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
    new Img('images/img1.jpg'),
    new Img('images/img8.jpg'),
    new Img('images/img11.jpg'),
    new Img('images/img4.jpg'),
    new Img('images/img12.jpg'),
    new Img('images/img6.jpg'),
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
