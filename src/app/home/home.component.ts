import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { ImgInfoComponent } from '../reusable/img-info/img-info.component';
import { MenuComponent } from './menu/menu.component';
import { QuestionComponent } from './question/question.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainComponent,
    ImgInfoComponent,
    MenuComponent,
    QuestionComponent,
    GalleryComponent,
    TestimonialsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
