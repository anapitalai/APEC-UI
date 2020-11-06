import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { NoticeService } from 'src/app/shared/services/tourism.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Notice } from 'src/app/shared/models/tourism';

import config from '../../../config/keys';
@Component({
  selector: 'app-notice-create',
  templateUrl: './notice-create.component.html',
  styleUrls: ['./notice-create.component.css']
})
export class NoticeCreateComponent implements OnInit {
  constructor(private http: Http, private router: Router, private service: NoticeService, private fb: FormBuilder) {

  }

  form: FormGroup;
  teacher: Notice = { site: '',description: '',contacts: '',tourId:'',address:'', productImage: '' };
  errorMessage: string = '';
  successMessage: string = '';
  filesToUpload: Array<File> = [];

  ngOnInit() {
     this.form = new FormGroup({
      site: new FormControl(''),
      description: new FormControl(''),
      contacts:new FormControl(''),
      productImage: new FormControl(''),
      tourId: new FormControl(''),
      address:new FormControl('')
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
      fd.append("productImage", files[i], files[i]['location']);
    }
    fd.append('site', this.form.value.site);
    fd.append('description', this.form.value.description);
    fd.append('contacts', this.form.value.contacts);
    fd.append('tourId', this.form.value.tourId);
    fd.append('address', this.form.value.address);
    //fd.append('location', this.form.value.location);




      this.http.post(`${config.endPoint}/tourism`,fd)  
      .subscribe(res => {
        this.successMessage='New Data created.';
        console.log(res);
      },
      err=>{
        this.errorMessage='Notice can\'t be created!';
        console.error(err);
       }
      );
  }




}
