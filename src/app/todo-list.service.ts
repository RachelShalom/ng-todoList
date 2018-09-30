import { TodoListStorageService } from './todo-list-storage.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private storage:TodoListStorageService) {

   }
  getTodoList(){
      return this.storage.get() 
  }
  addItem(item): void{
      this.storage.post({title:item})
  }
}
