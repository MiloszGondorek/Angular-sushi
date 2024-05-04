import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-info',
  standalone: true,
  imports: [],
  templateUrl: './img-info.component.html',
  styleUrl: './img-info.component.scss',
})
export class ImgInfoComponent {
  @Input() src!: string;
}
