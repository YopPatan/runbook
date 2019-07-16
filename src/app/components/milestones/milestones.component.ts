import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Milestone} from "../../models/milestone";
import { CallNumber } from '@ionic-native/call-number/ngx';
import {Person} from "../../models/person";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss'],
})
export class MilestonesComponent implements OnInit {

  @Input()
  milestones: Milestone[];

  @Input()
  images: Person[];

  constructor(
      public navCtrl: NavController,
      private callNumber: CallNumber,
      private _sanitizer: DomSanitizer
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

  loadImage(idPerson: number) {
    var person = this.images.find(item => idPerson == item.id);
    if (person != null) {
      return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
          + person.imagen);
    }
    else {
      return "";
    }
  }

}
