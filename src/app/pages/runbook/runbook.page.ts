import { Component, OnInit } from '@angular/core';
import {RunbookService} from "../../services/runbook.service";
import {Milestone} from "../../models/milestone";

import * as moment from 'moment';
import {Runbook} from "../../models/runbook";

@Component({
  selector: 'app-runbook',
  templateUrl: './runbook.page.html',
  styleUrls: ['./runbook.page.scss'],
})
export class RunbookPage implements OnInit {

  viewTimes = false;
  runbook: Runbook;
  milestonesByDate: Milestone[];

  constructor(
      private runbookService: RunbookService
  ) { }

  ngOnInit() {
    this.runbookService.getMilestones().subscribe(data => {
      // console.log(data);
      this.runbook = data;
    });
  }

  changeDate(event) {
    // console.log(event.detail.value);
    let todayInit = moment().subtract(1, 'days');
    let todayEnd = moment().add(1, 'days');
    if (event.detail.value == 'today') {
      this.milestonesByDate = this.runbook.milestones.filter(item => moment(item.date, "YYYY-MM-DD").isBetween(todayInit, todayEnd));
    }
    else if (event.detail.value == 'prev') {
      this.milestonesByDate = this.runbook.milestones.filter(item => moment(item.date, "YYYY-MM-DD").isBefore(todayInit));
    }
    else {
      this.milestonesByDate = this.runbook.milestones.filter(item => moment(item.date, "YYYY-MM-DD").isAfter(todayEnd));
    }
  }

  openTimes() {
    if (this.viewTimes) {
      this.viewTimes = false;
    }
    else {
      this.viewTimes = true;
    }
  }

}
