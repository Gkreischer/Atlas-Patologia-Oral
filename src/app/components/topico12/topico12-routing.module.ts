import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topico12Page } from './topico12.page';

const routes: Routes = [
  {
    path: '',
    component: Topico12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Topico12PageRoutingModule {}
