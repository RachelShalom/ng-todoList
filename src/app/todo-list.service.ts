import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private todoList  = [{ title: "complete angular todo-list project" }]

  constructor() { }
  getTodoList(){
      return this.todoList 
  }
  addItem(item): void{
      this.todoList.push({title:item})
  }
}
