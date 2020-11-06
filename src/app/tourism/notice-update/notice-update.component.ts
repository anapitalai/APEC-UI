import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notice } from 'src/app/shared/models/tourism';
import { NoticeService } from 'src/app/shared/services/tourism.service';

@Component({
  selector: 'app-notice-update',
  templateUrl: './notice-update.component.html',
  styleUrls: ['./notice-update.component.css']
})
export class NoticeUpdateComponent implements OnInit{
  constructor(private route: ActivatedRoute,private service:NoticeService) {}

  notice:Notice;
  successMessage:string='';
  errorMessage:string='';
  

  //
  ngOnInit() {
    let _id=this.route.snapshot.params['id'];
    this.service.getContact(_id)
    .subscribe(notice=>this.notice=notice);
  }
    
   updateContact(){
     this.service.updateNotice(this.notice)
     .subscribe(notice=>{
       this.successMessage='Profile was updated.';
       console.log('Notice updated');
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
