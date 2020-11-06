import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Feedback } from 'src/app/shared/models/feedback';
import { Http } from '@angular/http';
import config from '../../../config/keys';
@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.css']
})
export class FeedbackCreateComponent implements OnInit {

  form: FormGroup;
  feedback: Feedback = { name: '',contacts: '',message: ''};
  errorMessage: string = '';
  successMessage: string = '';
  //filesToUpload: Array<File> = [];

  constructor(private http:Http) { }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl(''),
      contacts: new FormControl(''),
      message:new FormControl('')
    });
    
  }


  createFeedback() {
    this.successMessage = '';
    this.errorMessage = '';
    console.log(this.form);
    console.log(this.form.value);
    const fd={
    name: this.form.value.name,
    contacts: this.form.value.contacts,
    message:this.form.value.message
    }

    this.http.post(`${config.endPoint}/feedbacks`,fd)  
    .subscribe(res => {
      console.log(res);
    })
  }

}
