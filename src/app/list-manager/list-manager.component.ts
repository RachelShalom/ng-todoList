import { TodoListService } from './../todo-list.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'todo-list-manager',
  template:`<div class="todo-app">
  <h1>My to do List</h1>
  
  <todo-input (submitTodo)="addTodo($event)"></todo-input>
  <ul>
    <li *ngFor= "let todo of todoList"><todo-item [itemTitle]="todo"></todo-item></li>
  </ul>

</div>`,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
    secondaryTitle = "Our MoinWorld and ngGrils";
    todoList;

    addTodo(newTodo: string): void {
        this.todoLsitService.addItem(newTodo);
    }


  constructor(private todoLsitService: TodoListService) { }

  ngOnInit() {
      this.todoList=this.todoLsitService.getTodoList();
  }

}
