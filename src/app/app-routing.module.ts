import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { EmployeeModule } from './employee/employee.module';
import { UserdetailsComponent } from './fakeapi-users/userdetails/userdetails.component';
import { UsersComponent } from './fakeapi-users/users/users.component';
import { PostdetailsComponent } from './fakeApi/postdetails/postdetails.component';
import { PostsComponent } from './fakeApi/posts/posts.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { PhotodetailsComponent } from './photosapi/photodetails/photodetails.component';
import { PhotosComponent } from './photosapi/photos/photos.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { StudentComponent } from './student/student/student.component';
import { StudentdetailsComponent } from './student/studentdetails/studentdetails.component';
import { StudentfulldetailsComponent } from './student/studentfulldetails/studentfulldetails.component';
import { TableComponent } from './tabledynamic/table/table.component';
import { TodedetailComponent } from './todoApi/todedetail/todedetail.component';
import { TodoComponent } from './todoApi/todo/todo.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component:WelcomeComponent
  },
  /* {
    path:'student/:id',
    component:StudentdetailsComponent
  },
  {
    path:'student',
    component:StudentComponent
  }, I CAN USE CHILD ROUTE below*/
  {
    path: 'student',
    children: [
      {
        path: '',
        component:StudentComponent
      },
      {
        path: ':id',
        children: [
          {
            path: '', redirectTo: 'basic-details', pathMatch: 'full'
          },
          {
            path: 'basic-details', component: StudentdetailsComponent
          },
          {
            path: 'full-details',
            component: StudentfulldetailsComponent
          }
        ]
      }
    ]
  },/////////////////////////
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
  },
  {
    path: 'employee',
    loadChildren:()=>EmployeeModule
  },
  //////////////  ng g m faculty --route faculty --module app.module.ts
  {
    path: 'faculty',
    loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule)
  },
  //////////////
  {
    path: 'unauthorized',
    component:UnauthorizedComponent
  },
  {
    path: '**',
    component:NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
