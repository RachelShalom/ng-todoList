import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-manager',
  template:`<div style="text-align:center">
  <h1>
      Welcome to {{secondaryTitle}} !
  </h1>
  <h2>My to do List</h2>
  
  <app-input-button-unit (submitTodo)="addTodo($event)"></app-input-button-unit>
  <ul>
    <li *ngFor= "let todo of todoList"><todo-item [itemTitle]="todo"></todo-item></li>
  </ul>

</div>`,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
    secondaryTitle = "Our MoinWorld and ngGrils";
    todoList = [{ title: "complete angular todo-list project" }]

    addTodo(newTodo: string): void {
        this.todoList.push({ title: newTodo });
    }


  constructor() { }

  ngOnInit() {
  }

}
