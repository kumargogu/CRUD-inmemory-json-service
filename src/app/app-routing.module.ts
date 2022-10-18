import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { PostsComponent } from './fakeApi/posts/posts.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { StudentComponent } from './student/student/student.component';
import { StudentdetailsComponent } from './student/studentdetails/studentdetails.component';

const routes: Routes = [
  {
    path:'student/:id',
    component:StudentdetailsComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'posts',
    component:PostsComponent
  },
  {
    path:'reactive',
    component:ReactiveComponent
  },
  {
    path:'formbuilder',
    component:FormbuilderComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
    path:'child',
    component:ChildComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
