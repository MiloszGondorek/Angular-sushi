import { Component } from '@angular/core';
import { PageHeaderComponent } from '../reusable/page-header/page-header.component';
import { ImgInfoComponent } from '../reusable/img-info/img-info.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageHeaderComponent, ImgInfoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
