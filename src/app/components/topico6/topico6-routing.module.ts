import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topico6Page } from './topico6.page';

const routes: Routes = [
  {
    path: '',
    component: Topico6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Topico6PageRoutingModule {}
