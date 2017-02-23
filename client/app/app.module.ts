import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TodosComponent }   from './components/todos.component';

import { TodoService } from './services/todo.service';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,  HttpModule ],
  declarations: [ AppComponent, TodosComponent ],
  providers: [ TodoService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

