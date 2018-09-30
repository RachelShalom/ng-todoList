import { ListManagerComponent } from './list-manager/list-manager.component';
import { Component } from '@angular/core';
@Component({
  selector: 'todo-root',
    template: `<todo-list-manager></todo-list-manager>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
}
