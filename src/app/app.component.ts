import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  template: `<div style="text-align:center">
  <h1>
      Welcome to {{secondaryTitle}} !
  </h1>
  <h2>My to do List</h2>
  
  <app-input-button-unit></app-input-button-unit>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  secondaryTitle="Our MoinWorld and ngGrils";
}
