import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent implements AfterViewInit {
  pos: number = 0;

  @ViewChild('cont') cont!: ElementRef;
  @ViewChild('img') img!: ElementRef;

  ngAfterViewInit(): void {
    const cont = this.cont.nativeElement;
    const img = this.img;
    window.addEventListener('scroll', function () {
      var y = window.scrollY - cont.offsetTop;
      if (y > -100) {
        y = -100;
      }
      img.nativeElement.style.marginTop = y + 'px';
    });
  }
}
