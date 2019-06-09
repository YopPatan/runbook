import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runbook',
  templateUrl: './runbook.page.html',
  styleUrls: ['./runbook.page.scss'],
})
export class RunbookPage implements OnInit {

  viewTimes = false;

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event) {
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
