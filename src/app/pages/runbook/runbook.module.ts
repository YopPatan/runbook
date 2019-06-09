import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RunbookPage } from './runbook.page';
import {MilestonesComponent} from '../../components/milestones/milestones.component';
import {TabbarComponent} from '../../components/tabbar/tabbar.component';

const routes: Routes = [
  {
    path: '',
    component: RunbookPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RunbookPage, MilestonesComponent, TabbarComponent]
})
export class RunbookPageModule {}
