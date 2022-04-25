import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topico3Page } from './topico3.page';

const routes: Routes = [
  {
    path: '',
    component: Topico3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Topico3PageRoutingModule {}
