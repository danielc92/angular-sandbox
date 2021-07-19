import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ConditionalsComponent } from './conditionals/conditionals.component';
import { EventsComponent } from './events/events.component';
import { PipesPageComponent } from './pipes-page/pipes-page.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsPageComponent,
  },
  {
    path: 'todo-list',
    component: TodoListPageComponent,
  },
  {
    path: 'profile/:profile_id',
    component: ProfileComponent,
  },
  {
    path: 'pipes',
    component: PipesPageComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'conditionals',
    component: ConditionalsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
