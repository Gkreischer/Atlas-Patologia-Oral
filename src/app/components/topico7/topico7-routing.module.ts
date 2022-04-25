import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topico7Page } from './topico7.page';

const routes: Routes = [
  {
    path: '',
    component: Topico7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Topico7PageRoutingModule {}
