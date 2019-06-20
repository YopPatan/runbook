import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "../../models/activity";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {

  @Input()
  activities: Activity[];

  constructor() { }

  ngOnInit() {}

}
