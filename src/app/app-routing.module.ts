import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { CreateOfficeComponent } from './create-office/create-office.component';
import { ViewUserStoryComponent } from './view-user-story/view-user-story.component';
import { HeaderComponent } from './header/header.component';
import { CreateUserStoryComponent } from './create-user-story/create-user-story.component';
import { ApproveFormComponent } from './approve-form/approve-form.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ViewSubtaskComponent } from './view-subtask/view-subtask.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ProjectManageComponent } from './project-manage/project-manage.component';
import { UserStoryDetailComponent } from './user-story-detail/user-story-detail.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateSubtaskComponent } from './create-subtask/create-subtask.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { ViewOfficeComponent } from './view-office/view-office.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { ListOfficeComponent } from './list-office/list-office.component';
import { CreateProjectComponent } from './create-project/create-project.component';


const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"createStaff", component: CreateStaffComponent},
  {path:"createOffice", component: CreateOfficeComponent},
  {path:"viewUserStory/:id", component: ViewUserStoryComponent },
  {path:"viewSubtask/:id", component: ViewSubtaskComponent },
  {path:"viewTask/:id", component: ViewTaskComponent },
  {path:"createUserStory", component: CreateUserStoryComponent },
  {path:"createTask", component: CreateTaskComponent },
  {path:"createSubtask", component: CreateSubtaskComponent },
  {path:"header", component: HeaderComponent },
  {path:"approveForm", component: ApproveFormComponent },
  {path:"viewProject/:id", component: ViewProjectComponent },
  {path:"viewDetail/:id" , component: ViewDetailComponent},
  {path:"taskDetail/:id" , component: TaskDetailComponent},
  {path:"projectManage/:id", component: ProjectManageComponent},
  {path:"userStoryDetail/:id", component: UserStoryDetailComponent},
  {path:"viewStaff/:id", component: ViewStaffComponent},
  {path:"listStaff/:id", component: ListStaffComponent},
  {path:"listOffice/:id", component: ListOfficeComponent},
  {path:"viewOffice/:id", component: ViewOfficeComponent},
  {path:"createProject", component: CreateProjectComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
