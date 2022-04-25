import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topico5Page } from './topico5.page';

const routes: Routes = [
  {
    path: '',
    component: Topico5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Topico5PageRoutingModule {}
