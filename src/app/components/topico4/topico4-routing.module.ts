import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topico4Page } from './topico4.page';

const routes: Routes = [
  {
    path: '',
    component: Topico4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Topico4PageRoutingModule {}
