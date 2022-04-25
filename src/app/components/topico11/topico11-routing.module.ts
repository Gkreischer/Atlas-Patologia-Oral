import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topico11Page } from './topico11.page';

const routes: Routes = [
  {
    path: '',
    component: Topico11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Topico11PageRoutingModule {}
