import { Component, ElementRef, ViewChild } from '@angular/core';
import { PageHeaderComponent } from '../reusable/page-header/page-header.component';
import { Item, ItemComponent } from '../reusable/item/item.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manu',
  standalone: true,
  imports: [
    PageHeaderComponent,
    ItemComponent,
    MenuListComponent,
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  group1 = new ItemGroup(
    'Sushi Rolls',
    ' These are one of the most well-known sushi dishes, consisting of rice rolled in nori (seaweed sheets) with fillings such as raw fish, vegetables, or seafood, and sometimes topped with avocado or cucumber. Rolls can come in various varieties such as California Roll, Spicy Tuna Roll, or Rainbow Roll.',
    [
      new Item('Item 1'),
      new Item('Item 2'),
      new Item('Item 3'),
      new Item('Item 4'),
      new Item('Item 5'),
    ]
  );
  group2 = new ItemGroup(
    'Sashimi',
    'These are slices of fresh raw fish or seafood served without rice. Sashimi is usually served as an elegant appetizer and is perfect for those who appreciate the taste and texture of raw fish.',
    [
      new Item('Item 6'),
      new Item('Item 7'),
      new Item('Item 8'),
      new Item('Item 9'),
      new Item('Item 10'),
    ]
  );
  group3 = new ItemGroup(
    'Nigiri-zushi',
    'These are small mounds of vinegared rice formed by hand, topped with a smear of wasabi paste, and then a slice of raw fish or seafood. Nigiri is a classic form of sushi that highlights the natural flavors and textures of the ingredients.',
    [
      new Item('Item 11'),
      new Item('Item 12'),
      new Item('Item 13'),
      new Item('Item 14'),
      new Item('Item 15'),
    ]
  );
  group4 = new ItemGroup(
    'Miso Soup',
    'This is a traditional Japanese soup made with miso paste, with various additions such as seaweed, tofu, or mushroom pieces.',
    [
      new Item('Item 16'),
      new Item('Item 17'),
      new Item('Item 18'),
      new Item('Item 19'),
      new Item('Item 20'),
    ]
  );
  groups: ItemGroup[] = [this.group1, this.group2, this.group3, this.group4];
  groupId = 0;

  @ViewChild('items') items!: ElementRef;

  async setGroup(id: number) {
    this.groupId = id;
  }
}

export class ItemGroup {
  name!: string;
  items!: Item[];
  description!: string;
  id!: number;
  static lastId = -1;
  constructor(name: string, desc: string, items: Item[]) {
    this.name = name;
    this.items = items;
    this.description = desc;
    this.id = ItemGroup.lastId + 1;
    ItemGroup.lastId++;
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
