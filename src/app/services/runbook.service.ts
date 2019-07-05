import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Runbook} from "../models/runbook";
import {Activity} from "../models/activity";
import {Milestone} from "../models/milestone";
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class RunbookService {

  //token: string;

  constructor(
      private http: HttpClient,
      private storage: Storage
  ) {

    /*
    this.storage.get('token').then((val) => {
      console.log('token', val);
    });
     */

  }

  getToken(): Promise<String> {
    return this.storage.get('token');
  }

  getRunbook(request): Observable<Runbook> {
    //return this.http.get<Runbook>('https://test-patan.firebaseio.com/runbook.json?print=pretty&format=export');
    return this.http.post<Runbook>('http://localhost:8080/runbook/runbook', request);
  }

  getPending(request): Observable<Activity[]> {
    //return this.http.get<Activity[]>('https://test-patan.firebaseio.com/pending.json?print=pretty&format=export');
    return this.http.post<Activity[]>('http://localhost:8080/runbook/pending', request);
  }

  getMilestone(request): Observable<Milestone> {
    //return this.http.get<Milestone>('https://test-patan.firebaseio.com/milestone.json?print=pretty&format=export');
    return this.http.post<Milestone>('http://localhost:8080/runbook/milestone', request);
  }

  signIn(auth: Object): Observable<Object> {
    return this.http.post('http://localhost:8080/runbook/signin', auth);
  }

}
