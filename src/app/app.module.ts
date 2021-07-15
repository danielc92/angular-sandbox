import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AboutUsPageComponent,
    TodoListPageComponent,
    ProfileComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
