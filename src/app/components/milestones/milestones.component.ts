import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss'],
})
export class MilestonesComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  openDetails() {
    this.navCtrl.navigateForward('milestone');
  }

}
