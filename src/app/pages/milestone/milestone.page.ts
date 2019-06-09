import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.page.html',
  styleUrls: ['./milestone.page.scss'],
})
export class MilestonePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
