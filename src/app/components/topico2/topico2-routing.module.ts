import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topico2Page } from './topico2.page';

const routes: Routes = [
  {
    path: '',
    component: Topico2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Topico2PageRoutingModule {}
