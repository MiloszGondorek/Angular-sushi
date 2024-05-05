import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() name!: string;
  @Input() price!: number;
}

export class Item {
  name!: string;
  price!: number;
  constructor(name: string) {
    this.name = name;
    this.price = Math.floor(Math.random() * 50) + 50;
  }
}
