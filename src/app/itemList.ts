export class ItemsInShop {
  items: Item[] = [
    new Item(`Dragon's Delight`, 10, 'rolls', 'rolls/rolls1.jpg'),
    new Item('Oceanic Symphony', 12, 'rolls', 'rolls/rolls2.jpg'),
    new Item('Sunrise Surprise', 16, 'rolls', 'rolls/rolls3.jpg'),
    new Item('Zen Garden', 13, 'rolls', 'rolls/rolls4.jpg'),
    new Item('Tokyo Twilight', 11, 'rolls', 'rolls/rolls5.jpg'),
    new Item('Rainbow Fusion', 23, 'rolls', 'rolls/rolls6.jpg'),
    new Item('Golden Gate', 18, 'rolls', 'rolls/rolls7.jpg'),
    new Item('Sakura Blossom', 15, 'rolls', 'rolls/rolls8.jpg'),

    new Item('Sunrise Selection', 11, 'sashimi', 'sashimi/sashimi1.jpg'),
    new Item('Ocean Symphony', 15, 'sashimi', 'sashimi/sashimi2.jpg'),
    new Item('Zen Garden Sampler', 16, 'sashimi', 'sashimi/sashimi3.jpg'),
    new Item(`Emperor's Delight`, 12, 'sashimi', 'sashimi/sashimi4.jpg'),
    new Item('Sakura Blossom', 23, 'sashimi', 'sashimi/sashimi5.jpg'),
    new Item('Golden Harvest', 19, 'sashimi', 'sashimi/sashimi6.jpg'),
    new Item('Midnight Moon', 14, 'sashimi', 'sashimi/sashimi7.jpg'),

    new Item('Crimson Sunset', 17, 'nigiri', 'nigiri/nigiri1.jpg'),
    new Item('Azure Wave', 14, 'nigiri', 'nigiri/nigiri2.jpg'),
    new Item('Whispering Bamboo', 12, 'nigiri', 'nigiri/nigiri3.jpg'),
    new Item('Royal Lotus', 22, 'nigiri', 'nigiri/nigiri4.jpg'),
    new Item('Amber Breeze', 14, 'nigiri', 'nigiri/nigiri5.jpg'),
    new Item('Enchanted Garden', 17, 'nigiri', 'nigiri/nigiri6.jpg'),
    new Item('Moonlit Mirage', 23, 'nigiri', 'nigiri/nigiri7.jpg'),

    new Item('Lotus Blossom', 22, 'miso', 'miso/miso1.jpg'),
    new Item('Misty Mountain', 25, 'miso', 'miso/miso2.jpg'),
    new Item('Bamboo Grove', 23, 'miso', 'miso/miso3.jpg'),
    new Item('Crimson Sky', 19, 'miso', 'miso/miso4.jpg'),
    new Item('Whispering Stream', 17, 'miso', 'miso/miso5.jpg'),
    new Item('Jade Serenity', 24, 'miso', 'miso/miso6.jpg'),
  ];

  public getItems(group?: string) {
    return this.items.filter((a) => a.group == group);
  }

  public getItemById(id: number) {
    const length = this.items.length;
    if (id >= 0 && id < length) {
      return this.items[id];
    }
    return this.items[0];
  }
}

export class Item {
  name!: string;
  price!: number;
  img!: string;
  group!: string;
  constructor(name: string, price?: number, group?: string, img?: string) {
    this.name = name;
    this.price = Math.floor(Math.random() * 50) + 50;
    if (group != null) {
      this.group = group;
    }
    if (price != null) {
      this.price = price;
    }
    if (img != null) {
      this.img = img;
    }
  }
}
