import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Milestone} from "../../models/milestone";

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss'],
})
export class MilestonesComponent implements OnInit {

  @Input()
  milestones: Milestone[];

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  openDetails() {
    this.navCtrl.navigateForward('milestone');
  }

}
