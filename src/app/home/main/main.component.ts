import { Component } from '@angular/core';
import { ButtonComponent } from '../../reusable/button/button.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
