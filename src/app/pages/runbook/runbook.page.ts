import { Component, OnInit } from '@angular/core';
import {RunbookService} from "../../services/runbook.service";
import {Milestone} from "../../models/milestone";

import * as moment from 'moment';
import {Runbook} from "../../models/runbook";
import {PickerController} from "@ionic/angular";

import { PickerOptions} from '@ionic/core';
import {Person} from "../../models/person";

@Component({
  selector: 'app-runbook',
  templateUrl: './runbook.page.html',
  styleUrls: ['./runbook.page.scss'],
})
export class RunbookPage implements OnInit {

  viewTimes = false;
  runbook: Runbook;
  runbooks: Runbook[];
  milestonesByDate: Milestone[];
  imagesPerson: Person[];

  constructor(
      private runbookService: RunbookService,
      private pickerCtrl: PickerController
  ) { }

  ngOnInit() {
    this.runbookService.getImages().then(val => {
      console.log(val);
      this.imagesPerson = val;
    });
    this.runbookService.getToken().then(val => {
      this.runbookService.setHeaders(val);
      this.runbookService.getRunbooks().subscribe(data => {
        console.log(data);
        this.runbooks = data.sort((a, b) => {
          return moment(a.periodo, "M-YYYY").isBefore(moment(b.periodo, "M-YYYY")) ? 1 : -1;
        });
        this.loadData(data[0].id);
      });
    });
  }

  loadData(idRunbook) {
    this.runbookService.getRunbook(idRunbook).subscribe(data => {
      console.log(data);
      this.runbook = data;
      this.changeTab(null);
    });
  }

  changeTab(event) {
    // console.log(event.detail.value);
    let todayInit = moment().subtract(1, 'days');
    let todayEnd = moment().add(1, 'days');
    if (event != null && event.detail.value == 'prev') {
      this.milestonesByDate = this.runbook.hitos.filter(item => moment(item.fecha, "YYYY-MM-DD").isBefore(todayInit));
    }
    else if (event != null && event.detail.value == 'next') {
      this.milestonesByDate = this.runbook.hitos.filter(item => moment(item.fecha, "YYYY-MM-DD").isAfter(todayEnd));
    }
    else {
      this.milestonesByDate = this.runbook.hitos.filter(item => (item.fecha == "") || moment(item.fecha, "YYYY-MM-DD").isBetween(todayInit, todayEnd));
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
            this.loadData(value.idRunbook.value);
            //console.log(value);
          } }
      ],
      columns: [
        { name: 'idRunbook', options: this.runbooks.map(item => {return {text: item.nombre, value: item.id}}) } ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
  }

}
