import {Component, OnInit, Output, EventEmitter }from '@angular/core'; 
@Component( {
selector:'todo-input', 
template:` 
<input class="todo-input" #inputElementRef type="text" [value]= "todoValue" placeholder="write your todo here"
  (keyup.enter)="sendTodo($event.target.value)">
<button class="btn" (click)="sendTodo(inputElementRef.value)">Save</button>

`, 
styleUrls:['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
    @Output() submitTodo: EventEmitter<string> = new EventEmitter();
    title: string;
    todoValue: string = "Enter your todo here";
    setTitle(defaultTitle: string) {
        this.title = defaultTitle;
    }
    sendTodo(newTitle:string):void {
        this.submitTodo.emit(newTitle)
    }
    constructor() {

    }

    ngOnInit() {
    }

}
