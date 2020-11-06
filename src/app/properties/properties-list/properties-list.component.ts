import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/shared/services/property.service';
import { Property } from 'src/app/shared/models/property';
import { AuthSlyService } from 'src/app/shared/services/authsly.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit {
  
  constructor(private service: PropertyService,public auth:AuthSlyService) {}

  teachers:Property[];
  successMessage:string='';
  errorMessage:string='';

  ngOnInit(): void {


      this.service.getContacts()
     .subscribe(teachers=>{this.teachers=teachers;
      this.successMessage='All properties!';},

      err=>{
        this.errorMessage='No data available!Check network connectivity!';
        console.error(err);
       }
      
      );
  }


    
  
}
