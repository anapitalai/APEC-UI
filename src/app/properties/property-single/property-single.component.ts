import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../../shared/models/property';
import { PropertyService } from '../../shared/services/property.service';
import { AuthSlyService } from 'src/app/shared/services/authsly.service';

@Component({
  styleUrls: ['./property-single.component.css'],
  templateUrl: './property-single.component.html'
})
export class PropertySingleComponent implements OnInit {

  showModal: boolean;
  content: string;
  title: string;
  //Bootstrap Modal Open event
  show() {
    this.showModal = true; // Show-Hide Modal Check
    this.content = "The image goes here"; // Dynamic Data
    this.title = "Property Images";    // Dynamic Data
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }



  constructor(private route: ActivatedRoute,
    private router: Router,
    private auth: AuthSlyService,
    private service: PropertyService) { }


  teachers: Property;
  ngOnInit() {
    let _id = this.route.snapshot.params['id'];
    this.service.getContact(_id)
      .subscribe(teachers => this.teachers = teachers);
  }

  teacherDelete() {
    this.service.teacherDelete(this.teachers._id)
      .subscribe(data => {
        this.router.navigate(['/properties']);
      })
  }

}
