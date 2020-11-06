import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { User } from '../../shared/models/user';
import { DashboardService } from '../../shared/services/dashboard.service';

@Component({
  templateUrl:'./dashboard-edit.component.html' 
})
export class DashboardEditComponent implements OnInit {
  constructor(private route: ActivatedRoute,private service:DashboardService) {}

  user:User;
  successMessage:string='';
  errorMessage:string='';
  
  ngOnInit() {
    let _id=this.route.snapshot.params['id'];
    this.service.getUser(_id)
    .subscribe(user=>this.user=user);
  }
    
   updateUser(){
     this.service.updateUser(this.user)
     .subscribe(user=>{
       //method to update date of edit
      this.updater();
        
       
       this.successMessage='Profile was updated.';
       console.log('Profile updated');
     },
     err=>{
      this.errorMessage='Contact cant be updated!';
      console.error(err);
     }
    );
    
    this.errorMessage='';
    this.successMessage='';

   }

   //date updater
   updater(){
    this.service.updater(this.user)
    .subscribe(user=>{
      //method to update date of edit

      this.successMessage='Update date logged.';
      console.log('Update date updated');
    },
    err=>{
     this.errorMessage='date cant be updated!';
     console.error(err);
    }
   );
   
   this.errorMessage='';
   this.successMessage='';

  }

}
