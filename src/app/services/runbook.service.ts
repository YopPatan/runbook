import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Runbook} from "../models/runbook";
import {Activity} from "../models/activity";

@Injectable({
  providedIn: 'root'
})
export class RunbookService {

  constructor(private http: HttpClient) { }

  getRunbook(): Observable<Runbook> {
    return this.http.get<Runbook>('http://localhost:8080/runbook/runbook');
  }

  getPending(): Observable<Activity[]> {
    return this.http.get<Activity[]>('http://localhost:8080/runbook/pending');
  }

}
