import { Component, OnInit } from '@angular/core';
import {RunbookService} from "../../services/runbook.service";
import {Milestone} from "../../models/milestone";

import * as moment from 'moment';
import {Runbook} from "../../models/runbook";
import {PickerController} from "@ionic/angular";

import { PickerOptions} from '@ionic/core';

@Component({
  selector: 'app-runbook',
  templateUrl: './runbook.page.html',
  styleUrls: ['./runbook.page.scss'],
})
export class RunbookPage implements OnInit {

  viewTimes = false;
  runbook: Runbook;
  milestonesByDate: Milestone[];

  months = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  years = [2019, 2018, 2017];

  framework = '';
  selected = ['','',''];

  constructor(
      private runbookService: RunbookService,
      private pickerCtrl: PickerController
  ) { }

  ngOnInit() {
    this.runbookService.getRunbook().subscribe(data => {
      console.log(data);
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

  async changeRunbook() {
    let opts: PickerOptions = {
      mode: 'ios',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Aceptar' }
      ],
      columns: [
        { name: 'month', options: this.months.map((item, i) => {return {text: item, value: i}}) },
        { name: 'year', options: this.years.map((item, i) => {return {text: item.toString(), value: i}}) }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(data => {
      console.log(data);
      /*
      let game = await picker.getColumn('game');
      let cat = await picker.getColumn('category');
      let rating = await picker.getColumn('rating');
      this.selected = [
        game.options[game.selectedIndex].text,
        cat.options[cat.selectedIndex].text,
        rating.options[rating.selectedIndex].text
      ];
       */
    });
  }

}
