import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Item, ItemComponent } from '../../reusable/item/item.component';
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
