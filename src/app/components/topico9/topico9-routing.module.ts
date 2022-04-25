import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topico9Page } from './topico9.page';

const routes: Routes = [
  {
    path: '',
    component: Topico9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Topico9PageRoutingModule {}
