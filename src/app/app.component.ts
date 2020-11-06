
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Property } from './shared/models/property';
import {PropertyService} from './shared/services/property.service';  
import { User } from './shared/models/user';
import { AuthSlyService } from './shared/services/authsly.service';
import { DashboardService } from './shared/services/dashboard.service';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'

})
export class AppComponent implements OnInit {


  teachers: Property[];
  users: User[];

  constructor(private service: PropertyService, private authService: AuthSlyService, private dashboardService: DashboardService
    , private router: Router) { }

  ngOnInit(): void {
    this.service.getContacts()
      .subscribe(teachers => this.teachers = teachers,

      );
  }

 profile(){
   console.log(this.dashboardService.getUsers());
   
 }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
