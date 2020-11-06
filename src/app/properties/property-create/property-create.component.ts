import { ElementRef, ViewChild, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
//import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { Property } from '../../shared/models/property';
import { PropertyService } from '../../shared/services/property.service';

import config from '../../../config/keys';


@Component({
  styles: [`
  input.ng-valid.ng-touched{
    border-left:5px solid green;
  }
  input.ng-invalid.ng-touched{
    border-left:5px solid red;
  }

 `],
  templateUrl: './property-create.component.html'
})

export class PropertyCreateComponent implements OnInit {
  constructor(private http: Http, private router: Router, private service: PropertyService, private fb: FormBuilder) {

  }

  form: FormGroup;
  teacher: Property = { location: '',price: '',status: '',type: '', description: '',avatarImage: '' };
  errorMessage: string = '';
  successMessage: string = '';
  filesToUpload: Array<File> = [];

  ngOnInit() {
     this.form = new FormGroup({
      location: new FormControl(''),
      price: new FormControl(''),
      status:new FormControl(''),
      type:new FormControl(''),
      description: new FormControl(''),
      avatarImage: new FormControl('')
    });
    
  }


  onFileSelected(event) {
    this.filesToUpload = <Array<File>>event.target.files;
  }


  createTeacher() {
    this.successMessage = '';
    this.errorMessage = '';
    console.log(this.form);
    console.log(this.form.value);

    const files: Array<File> = this.filesToUpload;
    const fd = new FormData();

    for (let i = 0; i < files.length; i++) {
      fd.append("avatarImage", files[i], files[i]['location']);
    }
    fd.append('location', this.form.value.location);
    fd.append('price', this.form.value.type);
    fd.append('status', this.form.value.status);
    fd.append('type', this.form.value.type);
    fd.append('description', this.form.value.description);


      this.http.post(`${config.endPoint}/teachers`,fd)  
      .subscribe(res => {
        this.successMessage='New Data created.';
        console.log(res);
      },
      err=>{
        this.errorMessage='Property can\'t be created!';
        console.error(err);
       }
      );
  }


  provinces: Array<string> = [
    'East New Britain',
    'West New Britain',
    'New Ireland',
    'Manus'
  ];

}

