import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  private _pusher: any;


  constructor(private http: Http) {
    this._pusher = new Pusher(environment.pusher.key, {
      //cluster: environment.pusher.cluster,
      encrypted: true
    });

  }

  getPusher() {
    return this._pusher;
  }
}


