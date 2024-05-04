import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() src!: string;
  @Input() name!: string;
  @Input() role!: string;
  @Input() desc!: string;
}
