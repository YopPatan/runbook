import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'runbook',
    loadChildren: './pages/runbook/runbook.module#RunbookPageModule'
  },
  {
    path: 'pending',
    loadChildren: './pages/pending/pending.module#PendingPageModule'
  },
  {
    path: 'milestone/:id',
    loadChildren: './pages/milestone/milestone.module#MilestonePageModule'
  }
  /*
  {
    path: 'runbook',
    children:
        [
          {
            path: 'tab1',
            loadChildren: './pages/runbook/runbook.module#RunbookPageModule'
          },
          {
            path: 'tab2',
            loadChildren: './pages/runbook/runbook.module#RunbookPageModule'
          },
          {
            path: '',
            loadChildren: './pages/runbook/runbook.module#RunbookPageModule'
          }
        ]
  }
  */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
