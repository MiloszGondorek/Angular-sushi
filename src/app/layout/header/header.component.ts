import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('links') links!: ElementRef;

  showHeader() {
    this.links.nativeElement.classList.remove('max-lg:translate-x-[100%]');
  }
  hideHeader() {
    this.links.nativeElement.classList.add('max-lg:translate-x-[100%]');
  }
}
