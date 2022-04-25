import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topico10Page } from './topico10.page';

const routes: Routes = [
  {
    path: '',
    component: Topico10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Topico10PageRoutingModule {}
