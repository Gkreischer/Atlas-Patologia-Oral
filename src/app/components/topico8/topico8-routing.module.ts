import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topico8Page } from './topico8.page';

const routes: Routes = [
  {
    path: '',
    component: Topico8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Topico8PageRoutingModule {}
