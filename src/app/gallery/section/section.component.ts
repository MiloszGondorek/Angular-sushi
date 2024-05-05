import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  @Input() reverse!: boolean;
  @Input() img: string[] = [];

  @Output() clickSrc: EventEmitter<any> = new EventEmitter();

  showImg(src: string) {
    this.clickSrc.emit(src);
  }
}
