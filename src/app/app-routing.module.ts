import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { UserdetailsComponent } from './fakeapi-users/userdetails/userdetails.component';
import { UsersComponent } from './fakeapi-users/users/users.component';
import { PostdetailsComponent } from './fakeApi/postdetails/postdetails.component';
import { PostsComponent } from './fakeApi/posts/posts.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ParentComponent } from './parent/parent.component';
import { PhotodetailsComponent } from './photosapi/photodetails/photodetails.component';
import { PhotosComponent } from './photosapi/photos/photos.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { StudentComponent } from './student/student/student.component';
import { StudentdetailsComponent } from './student/studentdetails/studentdetails.component';
import { TableComponent } from './tabledynamic/table/table.component';
import { TodedetailComponent } from './todoApi/todedetail/todedetail.component';
import { TodoComponent } from './todoApi/todo/todo.component';

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
    path:'posts/:id',
    component:PostdetailsComponent
  },
  {
    path:'posts',
    component:PostsComponent
  }, {
    path: 'users/:id',
    component:UserdetailsComponent
  },
  {
    path: 'users',
    component:UsersComponent
  },
  {
    path: 'photos/:id',
    component:PhotodetailsComponent
  },
  {
    path: 'photos',
    component:PhotosComponent
  },
  {
    path: 'todo/:id',
    component:TodedetailComponent
  },
  {
    path: 'todo',
    component:TodoComponent
  },
  {
    path: 'dtable',
    component:TableComponent
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
