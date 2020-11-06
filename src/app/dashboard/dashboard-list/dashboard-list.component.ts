import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { DashboardService } from '../../shared/services/dashboard.service';
import { AuthSlyService } from 'src/app/shared/services/authsly.service';
@Component({
  styles:[`
   .user-card{cursor:pointer;
    align-items::center;
    margin:2px;
  }
  .user-card:hover{
    background:grey;
    border-radius:20px;
    
  }

  img{
    width:150px;
    height:150px;

  }

  .notice-thumbnail {
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,75,1) 35%, rgba(0,212,255,1) 100%);
    transition:all 5s ease-in-out;
    }
    
    .notice-thumbnail:hover{
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,97,1) 35%, rgba(0,212,255,1) 100%);
      
    }
  `],
  templateUrl:'./dashboard-list.component.html' 
})
export class DashboardListComponent implements OnInit {
  users:User[];
  ngOnInit(): void {
    this.service.getUsers()
    .subscribe(users=>this.users=users);
  }
    
  constructor(private service: DashboardService,public auth:AuthSlyService) {}

}
