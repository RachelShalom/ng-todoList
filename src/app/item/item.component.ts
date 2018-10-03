import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  <div class="todo-item">
    {{itemTitle.title}}
    <button class= btn btn-red (click)="removeItem()">delete</button>
  </div>`,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    @Input() itemTitle: any; 

  constructor() { }

  ngOnInit() {
  }

}
