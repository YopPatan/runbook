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
  currentYear = parseInt(moment().format("YYYY"));
  currentMonth = parseInt(moment().format("MM"));

  months = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  years = Array.from(Array(3).keys()).map( i => this.currentYear - i);

  //framework = '';
  //selected = ['','',''];

  constructor(
      private runbookService: RunbookService,
      private pickerCtrl: PickerController
  ) { }

  ngOnInit() {
    this.loadData(this.currentMonth, this.currentYear);
  }

  loadData(month, year) {
    this.runbookService.getToken().then(val => {
      let request = { token: val, month: month, year: year };
      this.runbookService.getRunbook(request).subscribe(data => {
        //console.log(data);
        this.runbook = data;
      });
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
        { text: 'Aceptar',
          handler: (value) => {
            this.loadData(value.month.value, value.year.value);
            //console.log(value);
          } }
      ],
      columns: [
        { name: 'month', options: this.months.map((v, i) => {return {text: v, value: i}}) },
        { name: 'year', options: this.years.map((v, i) => {return {text: v.toString(), value: v}}) }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
  }

}
