import { Component, OnInit } from '@angular/core';
import { SectionComponent } from './section/section.component';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../reusable/page-header/page-header.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [SectionComponent, CommonModule, PageHeaderComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  img: string[] = [
    'sushi1.jpg',
    'sushi2.jpg',
    'sushi3.jpg',
    'sushi4.jpg',
    'sushi5.jpg',
    'sushi1.jpg',
    'sushi2.jpg',
    'sushi3.jpg',
    'sushi4.jpg',
    'sushi5.jpg',
    'sushi1.jpg',
    'sushi2.jpg',
    'sushi3.jpg',
    'sushi4.jpg',
    'sushi5.jpg',
  ];

  sections: section[] = [];

  ngOnInit(): void {
    var secCount = Math.ceil(this.img.length / 4);
    for (var s = 0; s < secCount; s++) {
      var imgs = [];
      for (var i = 0; i < 4; i++) {
        const id = 4 * s + i;
        if (id < this.img.length) {
          imgs.push(this.img[id]);
        }
      }
      this.sections.push(new section(imgs));
    }
  }

  showSrc = '';
  setImg(src: string) {
    this.showSrc = src;
  }

  hideImg() {
    this.showSrc = '';
  }
}

class section {
  img!: string[];
  isReverse!: boolean;
  static lastWasReverse = false;
  constructor(img: string[]) {
    this.img = img;
    this.isReverse = !section.lastWasReverse;
    section.lastWasReverse = this.isReverse;
  }
}
