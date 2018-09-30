import { Injectable } from '@angular/core';
const storageName = 'aah_todo_list';
@Injectable({
  providedIn: 'root'
})
export class TodoListStorageService {
    private todoList;

  constructor() {
      this.todoList=JSON.parse(localStorage.getItem(storageName))
   }
   //get an item
   get(){}
   //add a new item
   post(item){}
   //update an item
   put(item,changes){}

   //delete an item
   destroy(item){}
}
