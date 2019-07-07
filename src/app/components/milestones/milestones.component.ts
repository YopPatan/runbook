import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Milestone} from "../../models/milestone";
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss'],
})
export class MilestonesComponent implements OnInit {

  @Input()
  milestones: Milestone[];

  constructor(
      public navCtrl: NavController,
      private callNumber: CallNumber
  ) { }

  ngOnInit() {}

  openDetails(idMilestone) {
    this.navCtrl.navigateForward('milestone/' + idMilestone);
  }

  callOwner(phone) {
    this.callNumber.callNumber(phone, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
  }

}
