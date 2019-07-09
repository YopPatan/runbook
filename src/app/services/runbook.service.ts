import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Runbook} from "../models/runbook";
import {Activity} from "../models/activity";
import {Milestone} from "../models/milestone";
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class RunbookService {

  headers: HttpHeaders;

  constructor(
      private http: HttpClient,
      private storage: Storage
  ) {

  }

  setHeaders(token) {
    this.headers = new HttpHeaders({'Authorization': token});
  }

  getToken(): Promise<String> {
    return this.storage.get('token');
  }

  getRunbooks(): Observable<Runbook[]> {
    //return this.http.get<Runbook[]>('https://test-patan.firebaseio.com/runbooks.json?print=pretty&format=export', {headers: this.headers});
    return this.http.get<Runbook[]>('https://runbook.azurewebsites.net/api/runbook');
    //return this.http.get<Runbook[]>('http://localhost:8080/runbook/runbook', {headers: this.headers});
  }

  getRunbook(idRunbook): Observable<Runbook> {
    //return this.http.get<Runbook>('https://test-patan.firebaseio.com/runbook.json?print=pretty&format=export', {headers: this.headers});
    return this.http.get<Runbook>('https://runbook.azurewebsites.net/api/runbook/' + idRunbook);
    //return this.http.get<Runbook>('http://localhost:8080/runbook/runbook/' + idRunbook, {headers: this.headers});
  }

  getPending(): Observable<Activity[]> {
    return this.http.get<Activity[]>('https://test-patan.firebaseio.com/pending.json?print=pretty&format=export', {headers: this.headers});
    //return this.http.get<Activity[]>('http://localhost:8080/runbook/pending', {headers: this.headers});
  }

  getMilestone(idHito): Observable<Milestone> {
    return this.http.get<Milestone>('https://test-patan.firebaseio.com/milestone.json?print=pretty&format=export', {headers: this.headers});
    //return this.http.get<Milestone>('http://localhost:8080/runbook/milestone/' + idHito, {headers: this.headers});
  }

  signIn(auth: Object): Observable<Object> {
    return this.http.get<Milestone>('https://test-patan.firebaseio.com/signin.json?print=pretty&format=export', {headers: this.headers});
    //return this.http.post('http://localhost:8080/runbook/signin', auth, {headers: this.headers});
  }

}
