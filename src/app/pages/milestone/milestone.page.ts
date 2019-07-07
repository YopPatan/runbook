import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {RunbookService} from "../../services/runbook.service";
import {Milestone} from "../../models/milestone";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.page.html',
  styleUrls: ['./milestone.page.scss'],
})
export class MilestonePage implements OnInit {
  idMilestone: number;
  milestone: Milestone;

  constructor(
      private runbookService: RunbookService,
      public navCtrl: NavController,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idMilestone = parseInt(this.route.snapshot.paramMap.get('id'));
    this.runbookService.getToken().then(val => {
      this.runbookService.setHeaders(val);
      this.runbookService.getMilestone(this.idMilestone).subscribe(data => {
        //console.log(data);
        this.milestone = data;
      });
    });
  }

  goBack() {
    this.navCtrl.back();
  }

}
