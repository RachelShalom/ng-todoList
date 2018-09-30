import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `{{itemTitle.title}}`,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    @Input() itemTitle: any; 

  constructor() { }

  ngOnInit() {
  }

}
