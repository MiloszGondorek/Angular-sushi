import { Component, ElementRef, ViewChild } from '@angular/core';
import { ItemComponent } from '../../reusable/item/item.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../reusable/button/button.component';
import { Item, ItemsInShop } from '../../itemList';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ItemComponent, CommonModule, ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  shop = new ItemsInShop();
  items: Item[] = [
    this.shop.getItemById(0),
    this.shop.getItemById(2),
    this.shop.getItemById(5),
    this.shop.getItemById(9),
    this.shop.getItemById(11),
    this.shop.getItemById(14),
    this.shop.getItemById(15),
    this.shop.getItemById(18),
    this.shop.getItemById(22),
    this.shop.getItemById(23),
  ];

  @ViewChild('itemsCont') itemsDiv!: ElementRef;
  @ViewChild('item') itemData!: ElementRef;

  moveX = 0;
  static testowy: MenuComponent;

  constructor() {
    MenuComponent.testowy = this;
    window.addEventListener('resize', function () {
      MenuComponent.testowy.move();
    });
  }

  moveRight() {
    this.moveX--;
    this.move();
  }

  moveLeft() {
    this.moveX++;
    this.move();
  }

  move() {
    if (this.moveX > 0) {
      this.moveX = this.itemsInView() - this.items.length;
    }
    if (this.moveX < this.itemsInView() - this.items.length) {
      this.moveX = 0;
    }

    this.itemsDiv.nativeElement.style.transform = `translateX(${
      this.moveX * (this.itemData.nativeElement.offsetWidth + 20)
    }px)`;
  }

  itemsInView(): number {
    const width = window.innerWidth;
    if (width > 1280) {
      return 5;
    }
    if (width > 1024) {
      return 4;
    }
    if (width > 768) {
      return 3;
    }
    if (width > 640) {
      return 2;
    }
    return 1;
  }
}
