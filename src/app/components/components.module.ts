import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivitiesComponent} from "./activities/activities.component";
import {IonicModule} from "@ionic/angular";
import {MilestonesComponent} from "./milestones/milestones.component";
import {TabbarComponent} from "./tabbar/tabbar.component";

@NgModule({
  declarations: [ActivitiesComponent, MilestonesComponent, TabbarComponent],
  exports: [ActivitiesComponent, MilestonesComponent, TabbarComponent],
  imports: [
    CommonModule, IonicModule
  ],
  entryComponents: [ActivitiesComponent, MilestonesComponent, TabbarComponent]
})
export class ComponentsModule { }
