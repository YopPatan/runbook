import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PendingPage } from './pending.page';
import {ActivitiesComponent} from '../../components/activities/activities.component';
import {TabbarComponent} from '../../components/tabbar/tabbar.component';

const routes: Routes = [
  {
    path: '',
    component: PendingPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
  declarations: [PendingPage, ActivitiesComponent, TabbarComponent]
})
export class PendingPageModule {}
