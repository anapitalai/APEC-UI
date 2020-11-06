import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
declare const Pusher: any;

import { Feedback } from '../models/feedback';
import 'rxjs/add/operator/map';
import { Observable,Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import config from '../../../config/keys';
import { environment } from 'src/environments/environment';

@Injectable()

export class FeedbackService{

    
    private url=`${config.endPoint}/feedbacks`;
    pusher: any;
    channel: any;
    //observable source
    private deletedProfessionalSource=new Subject();
    private createdProfessionalSource=new Subject<Feedback>();
    //observable stream
    createdProfessional$=this.createdProfessionalSource.asObservable();
    deletedProfessional$=this.deletedProfessionalSource.asObservable();
    
    constructor( private http: Http){

    }
    
 //all contacts
getFeedbacks():Observable<Feedback[]>{
    return this.http.get(`${this.url}`)
    .pipe(map(res=>res.json().feedbacks),
    catchError(this.handleError));
}

//

private handleError(err){
    let errMessage:string;
    if(err instanceof Response){
        let body=err.json() || '';
        let error=body.error || JSON.stringify(body);
        errMessage=`${err.status}-${err.statusText || ''} ${error}`;
    }
    else{
        errMessage = err.message ? err.message: err.toString();
    }
 return Observable.throw(errMessage);
}

//get single contact
getFeedback(id):Observable<Feedback>{
 return this.http.get(`${this.url}/${id}`)
 .pipe(map(res=>res.json()),
 catchError(this.handleError));
}

//update user details
updateFeedback(professional:Feedback):Observable<Feedback>{
return this.http.put(`${this.url}/${professional._id}`,professional)
.pipe(map(teacher=>teacher.json()),
catchError(this.handleError))
}


//create endpoint
createFeedback(feedback:Feedback):Observable<Feedback>{
    return this.http.post(this.url,feedback)
    .pipe(map(res=>res.json()),
    tap(feedback=>this.createdFeedback(feedback)),
    catchError(this.handleError));
}


deleteFeedback(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
    .pipe(tap(res=>this.deletedFeedback()),
    catchError(this.handleError));
}

//messages
createdFeedback(teacher:Feedback){
    console.log('New Feedback has been created!');
    this.createdProfessionalSource.next(teacher);
}

deletedFeedback(){
    this.deletedProfessionalSource.next();
    console.log('Feedback has been deleted!');
}




}