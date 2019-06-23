import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { CreateOfficeComponent } from './create-office/create-office.component';
import { CreateUserStoryComponent } from './create-user-story/create-user-story.component';
import { HeaderComponent } from './header/header.component';
import { ViewUserStoryComponent } from './view-user-story/view-user-story.component';
import { ApproveFormComponent } from './approve-form/approve-form.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ViewSubtaskComponent } from './view-subtask/view-subtask.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { MenuUserStoryComponent } from './menu-user-story/menu-user-story.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateSubtaskComponent } from './create-subtask/create-subtask.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ProjectManageComponent } from './project-manage/project-manage.component';
import { UserStoryDetailComponent } from './user-story-detail/user-story-detail.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { ViewOfficeComponent } from './view-office/view-office.component';
import { CreateProjectComponent } from './create-project/create-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateStaffComponent,
    CreateOfficeComponent,
    CreateUserStoryComponent,
    HeaderComponent,
    ViewUserStoryComponent,
    ApproveFormComponent,
    ViewTaskComponent,
    ViewSubtaskComponent,
    ViewProjectComponent,
    MenuUserStoryComponent,
    CreateTaskComponent,
    CreateSubtaskComponent,
    ViewDetailComponent,
    TaskDetailComponent,
    ProjectManageComponent,
    UserStoryDetailComponent,
    ViewStaffComponent,
    ViewOfficeComponent,
    CreateProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
