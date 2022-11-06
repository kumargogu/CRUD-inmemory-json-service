import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './student/student.service';
import { StudentComponent } from './student/student/student.component';
import { StudentdetailsComponent } from './student/studentdetails/studentdetails.component';
import { PostsComponent } from './fakeApi/posts/posts.component';
import{HttpClientModule} from '@angular/common/http'
import { PostserviceService } from './fakeApi/postservice.service';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildOutputComponent } from './child-output/child-output.component';
import { PostdetailsComponent } from './fakeApi/postdetails/postdetails.component';
import { UsersComponent } from './fakeapi-users/users/users.component';
import { UserdetailsComponent } from './fakeapi-users/userdetails/userdetails.component';
import { PhotosComponent } from './photosapi/photos/photos.component';
import { PhotodetailsComponent } from './photosapi/photodetails/photodetails.component';
import { TodoComponent } from './todoApi/todo/todo.component';
import { TodedetailComponent } from './todoApi/todedetail/todedetail.component';
import { TableComponent } from './tabledynamic/table/table.component';
import { FilterdataPipe } from './student/student/filterdata.pipe';
/* import { EmployeeModule } from './employee/employee.module'; */
import { NotfoundComponent } from './notfound/notfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { StudentfulldetailsComponent } from './student/studentfulldetails/studentfulldetails.component';

@NgModule({
  declarations: [
   AppComponent,
    StudentComponent,
      StudentdetailsComponent,
    PostsComponent,
    ReactiveComponent,
    FormbuilderComponent,
    ParentComponent,
    ChildComponent,
      ChildOutputComponent,
    PostdetailsComponent,
    UsersComponent,
    UserdetailsComponent,
    PhotosComponent,
    PhotodetailsComponent,
      TodoComponent,
    TodedetailComponent,
    TableComponent,
    NotfoundComponent,
    WelcomeComponent,
    UnauthorizedComponent,
    StudentfulldetailsComponent,
    FilterdataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StudentService,PostserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
