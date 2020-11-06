import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../../shared/models/property';
import { PropertyService } from '../../shared/services/property.service';

@Component({
  templateUrl:'./property-update.component.html' 
})
export class PropertyUpdateComponent implements OnInit {
  constructor(private route: ActivatedRoute,private service:PropertyService) {}

  teacher:Property;
  successMessage:string='';
  errorMessage:string='';
  
  ngOnInit() {
    let _id=this.route.snapshot.params['id'];
    this.service.getContact(_id)
    .subscribe(teacher=>this.teacher=teacher);
  }
    
   updateContact(){
     this.service.updateContact(this.teacher)
     .subscribe(teacher=>{
       this.successMessage='Profile was updated.';
       console.log('Profile updated');
     },
     err=>{
      this.errorMessage='Contact can\'t be updated!';
      console.error(err);
     }
    );
    
    this.errorMessage='';
    this.successMessage='';

   }

}
