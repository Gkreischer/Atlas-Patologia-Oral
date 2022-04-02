import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topico1Page } from './topico1.page';

const routes: Routes = [
  {
    path: '',
    component: Topico1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Topico1PageRoutingModule {}
