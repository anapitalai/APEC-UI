import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertyCreateComponent } from './properties/property-create/property-create.component';
import { PropertySingleComponent } from './properties/property-single/property-single.component';
import { PropertyUpdateComponent } from './properties/property-update/property-update.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardListComponent } from './dashboard/dashboard-list/dashboard-list.component';
import { DashboardCreateComponent } from './dashboard/dashboard-create/dashboard-create.component';
import { DashboardSingleComponent } from './dashboard/dashboard-single/dashboard-single.component';
import { DashboardEditComponent } from './dashboard/dashboard-edit/dashboard-edit.component';
//feedback route
//email
import {EmailComponent} from './email/email.component';
import {EmailListComponent} from './email/email-list/email-list.component';
import {EmailCreateComponent} from './email/email-create/email-create.component';



import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { FeedbackCreateComponent } from './feedback/feedback-create/feedback-create.component';
import { FeedbackSingleComponent } from './feedback/feedback-single/feedback-single.component';
import { FeedbackUpdateComponent } from './feedback/feedback-update/feedback-update.component';
import { HomeComponent } from './home/home.component';
import { NoticeComponent } from './tourism/notice.component';
import { NoticeListComponent } from './tourism/notice-list/notice-list.component';
import { NoticeCreateComponent } from './tourism/notice-create/notice-create.component';
import { NoticeSingleComponent } from './tourism/notice-single/notice-single.component';
import { NoticeUpdateComponent } from './tourism/notice-update/notice-update.component';
import { LectureComponent } from './lecture/lecture.component';
import { LectureListComponent } from './lecture/lecture-list/lecture-list.component';
import { AuthGuard } from './shared/guards/guards.service';
import { DownloadsComponent } from './downloads/downloads.component';
import { DownloadsListComponent } from './downloads/downloads-list/downloads-list.component';


const routes: Routes = [
 // {
 //   path:'',
 //   redirectTo:'',
 //   pathMatch: 'full'
//},
{
    path:'',
    component:HomeComponent,
},
{
    path:'login',
    component:AuthComponent,
},
//{
//    path:'home',
//    component:HomeComponent,
//},

{
    path:'properties',
   // canActivate:[AuthGuard],
    component:PropertiesComponent,
    // canActivateChild:[AuthGuard],
    children:[{
        path:'',
        component:PropertiesListComponent
    }
    ,
    {
        path:'create',
        component:PropertyCreateComponent,
        //canActivate:[AuthGuard],
    },
    {
        path:':id',
        component:PropertySingleComponent
    }
    ,
    {
        path:':id/edit',
        component:PropertyUpdateComponent
    }

    ]   
},
{
    path:'email',
   // canActivate:[AuthGuard],
    component:EmailComponent,
    // canActivateChild:[AuthGuard],
    children:[{
        path:'',
        component:EmailListComponent
    }
    ,
    {
        path:'create',
       component:EmailCreateComponent,
        //canActivate:[AuthGuard],
    },
    {
        path:':id',
        component:PropertySingleComponent
    }
    ,
    {
        path:':id/edit',
        component:PropertyUpdateComponent
    }

    ]   
},
  
{
    path:'tourism',
   
    component:NoticeComponent,
   
    children:[{
        path:'',
        component:NoticeListComponent
    }
    ,
    {
        path:'create',
        component:NoticeCreateComponent,
       
    },
    {
        path:':id',
        component:NoticeSingleComponent
    }
    ,
    {
        path:':id/edit',
        component:NoticeUpdateComponent
    }

    ]   
},
//
{
    path:'lecture',
   // canActivate:[AuthGuard],
    component:LectureComponent,
    //canActivateChild:[AuthGuard],
    children:[{
        path:'',
        component:LectureListComponent
    },

    ]   
},
{
    path:'downloads',
   // canActivate:[AuthGuard],
    component:DownloadsComponent,
    //canActivateChild:[AuthGuard],
    children:[{
        path:'',
        component:DownloadsListComponent
    },



    ]   
},

{
    path:'dashboard',
    canActivate:[AuthGuard],
    component:DashboardComponent,
    children:[
        {
        path:'',
        component:DashboardListComponent
    },
    {
        path:'create',
        component:DashboardCreateComponent
    }
    ,
    {
        path:':id',
        component:DashboardSingleComponent
    },
    {
        path:':id/edit',
        component:DashboardEditComponent
    }


    ]

    
},
{
    path:'feedback',
    //canActivate:[AuthGuard],
    component:FeedbackComponent,
    children:[
        {
        path:'',
        component:FeedbackListComponent
    },
    {
        path:'create',
        component:FeedbackCreateComponent
    }
    ,
    {
        path:':id',
        component:FeedbackSingleComponent
    },
    {
        path:':id/edit',
        component:FeedbackUpdateComponent
    }


    ]

    
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
