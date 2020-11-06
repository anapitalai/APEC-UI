import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { User } from '../../shared/models/user';
import { DashboardService } from '../../shared/services/dashboard.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Property } from 'src/app/shared/models/property';
import config from '../../../config/keys';
@Component({
  styles: [`

 `],
  templateUrl: './dashboard-create.component.html'
})
export class DashboardCreateComponent implements OnInit {
  constructor(private http: Http, private router: Router, private service: DashboardService) { }


  form: FormGroup;
  user: User = { email: '', password: '', avatar: '' };
  errorMessage: string = '';
  successMessage: string = '';
  selectedFile: File = null;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      avatar: new FormControl('')
    });
  }

  onFileSelected(event) {

    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }


  createUser() {
    this.successMessage = '';
    this.errorMessage = '';
    console.log(this.form);
    console.log(this.form.value);

    //const files = this.filesToUpload;
    const fd = new FormData();

    fd.append("avatar", this.selectedFile, this.selectedFile.name);
    fd.append('email', this.form.value.email);
    fd.append('password', this.form.value.password);

    this.http.post(`${config.endPoint}/users/signup`, fd)
      .subscribe(res => {
        console.log(res);
      })
  }


}
