import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import 'rxjs/add/operator/map';
import { Notice } from '../models/tourism'
import { Http,Response } from '@angular/http'

import { PusherService } from './pusher.service';
import { map, catchError, tap } from 'rxjs/operators'
import config from '../../../config/keys'




@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  private notice:Notice[];
  private url = `${config.endPoint}/tourism`;
    




    //observable source
    private contactDeletedSource = new Subject();
    private contactCreatedSource = new Subject<Notice>();

    private config = { headers: { 'Content-Type': 'multipart/form-data' } };

    //observable stream
    contactCreated$ = this.contactCreatedSource.asObservable();
    contactDeleted$ = this.contactDeletedSource.asObservable();



    constructor(private http: Http) {
      
    }


    //all contacts
    getNotices(): Observable<Notice[]> {
        return this.http.get(this.url)
            .pipe(map(res => res.json().notices),
             catchError(this.handleError));
    }


    private handleError(err) {
        let errMessage: string;
        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);
            errMessage = `${err.status}-${err.statusText || ''} ${error}`;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable.throw(errMessage);
    }

    //get single contact
    getContact(id): Observable<Notice> {
        return this.http.get(`${this.url}/${id}`)
            .pipe(map(res => res.json()),
                catchError(this.handleError));
    }

    //update user details
    updateNotice(notice: Notice): Observable<Notice> {
        return this.http.put(`${this.url}/${notice._id}`, notice)
            .pipe(map(notice => notice.json()),
                catchError(this.handleError))
    }

    createTeacher(teacher: Notice): Observable<Notice> {
        return this.http.post(this.url, teacher)
            .pipe(map(res => res.json()),
                tap(teacher => this.teacherCreated(teacher)),
                catchError(this.handleError));
    }



    teacherDelete(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`)
            .pipe(tap(res => this.teacherDeleted()),
                catchError(this.handleError));
    }

    //messages
    teacherCreated(teacher: Notice) {
        console.log('New Property has been created!');
        this.contactCreatedSource.next(teacher);
    }

    teacherDeleted() {
        this.contactDeletedSource.next();
        console.log('Property has been deleted!');
    }


 sort(){
     // this.notice.sort();
     //this.notice.sort((a:Notice,b:Notice)=>{
         
         //return b.owner.valueOf() - a.owner.valueOf();
     //    return b.createdAt.valueOf() - a.createdAt.valueOf();
     //})
 }






}



