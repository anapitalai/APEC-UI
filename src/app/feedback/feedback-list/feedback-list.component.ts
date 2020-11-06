import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/shared/services/feedback.service';
import  {Feedback} from 'src/app/shared/models/feedback';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {


  constructor(private service: FeedbackService) { }
  
  feedbacks:Feedback[];
  
  ngOnInit(): void {
     this.service.getFeedbacks()
     .subscribe(feedbacks=>this.feedbacks=feedbacks);

}

}

//