import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Runbook} from "../models/runbook";

@Injectable({
  providedIn: 'root'
})
export class RunbookService {

  constructor(private http: HttpClient) { }

  getMilestones(): Observable<Runbook> {
    return this.http.get<Runbook>('http://localhost:8080/runbook/runbook');
  }

}
