import { Component, OnInit, Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {AuthHttp,JwtHelper} from 'angular2-jwt';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import config from '../../../config/keys';


@Injectable()

export class AuthSlyService {
   private authUrl=`${config.endPoint}/users/login`;
    private loggedIn: boolean=false;
     private token = localStorage.getItem('token');

  constructor( private authHttp:AuthHttp) {
    this.loggedIn=!!localStorage.getItem('token');
  }

  isLoggedIn(){
      return this.loggedIn;
  }


  login(email:string,password:string):Observable<string>{
    return this.authHttp.post(`${this.authUrl}`,{email,password})
    .pipe(map(res=>res.json()),
    tap(res=>{
      //const expiresAt=JSON.stringify(((this.jwtHelper.decodeToken(this.token)).exp) * 1000 + new Date().getTime());
      if (res.token) {
      localStorage.setItem('token',res.token);
      //localStorage.setItem('expiresAt',expiresAt);
      this.loggedIn=true;

      this.useJwtHelper();
      
    }
//
    })
    ,catchError(this.handleError));
    
  }
  
 //logout
 logout(){
   localStorage.removeItem('token');
   this.loggedIn=false;
 }


jwtHelper: JwtHelper = new JwtHelper();

useJwtHelper() {
  var token = localStorage.getItem('token');
  //var expirationDate=this.jwtHelper.getTokenExpirationDate(token);
  //const decodedTkn=this.jwtHelper.decodeToken(token).exp;
  console.log(
    this.jwtHelper.decodeToken(token),
    this.jwtHelper.getTokenExpirationDate(token),
    this.jwtHelper.isTokenExpired(token)
    
  );
}

    
//handle errors
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


ngOnInit() {}


}