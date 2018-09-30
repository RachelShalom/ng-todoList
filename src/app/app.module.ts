import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { ItemComponent } from './item/item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
// this is a decorator. everything that starts with an @ is a decorator for example, 
//NgModule receives the AppModule class and adds to it methods 
//and members that later on will be used by Angular. 
//This way, Angular will recognize that this class represents an NgModule.
@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    ItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
