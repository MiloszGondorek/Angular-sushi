import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-info.component.html',
  styleUrl: './img-info.component.scss',
})
export class ImgInfoComponent {
  @Input() src!: string;
  @Input() reverse: boolean = false;
}
