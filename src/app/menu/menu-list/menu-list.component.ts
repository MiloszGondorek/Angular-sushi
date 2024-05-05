import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemGroup } from '../menu.component';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
})
export class MenuListComponent implements OnInit {
  @Input() groups!: ItemGroup[];
  selected!: number;

  @Output() groupEmit: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.selected = this.groups[0].id;
  }

  selectGroup(newGroup: number) {
    this.selected = newGroup;
    this.groupEmit.emit(newGroup);
  }
}
