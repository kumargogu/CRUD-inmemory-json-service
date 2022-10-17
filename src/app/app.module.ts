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
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentdetailsComponent,
    PostsComponent,
    ReactiveComponent,
    FormbuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [StudentService,PostserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
