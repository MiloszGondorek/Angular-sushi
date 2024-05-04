import { Component } from '@angular/core';
import { ItemComponent } from '../../reusable/item/item.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../reusable/button/button.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ItemComponent, CommonModule, ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  items: Item[] = [
    new Item('Item 1'),
    new Item('Item 2'),
    new Item('Item 3'),
    new Item('Item 4'),
    new Item('Item 5'),
    new Item('Item 6'),
    new Item('Item 7'),
    new Item('Item 8'),
  ];
}

class Item {
  name!: string;
  price!: number;
  constructor(name: string) {
    this.name = name;
    this.price = Math.floor(Math.random() * 50) + 50;
  }
}
