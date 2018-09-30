import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
    template: `
<div style="text-align:center">
  <h1>
      Welcome to {{secondaryTitle}} !
  </h1>
  <h2>My to do List</h2>
  
  <app-input-button-unit (submitTodo)="addTodo($event)"></app-input-button-unit>
  <ul>
    <li *ngFor= "let todo of todoList"><todo-item [itemTitle]="todo"></todo-item></li>
  </ul>

</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  secondaryTitle="Our MoinWorld and ngGrils";
  todoList = [{title:"complete angular todo-list project"}]

  addTodo(newTodo: string):void {
    this.todoList.push({title:newTodo});
}

}
