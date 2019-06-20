import { Component, OnInit } from '@angular/core';
import {RunbookService} from "../../services/runbook.service";
import {Activity} from "../../models/activity";

@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit {

  activities: Activity[];

  constructor(
      private runbookService: RunbookService
  ) { }

  ngOnInit() {
    this.runbookService.getPending().subscribe(data => {
      console.log(data);
      this.activities = data;
    });
  }

}
