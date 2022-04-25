import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico4PageRoutingModule } from './topico4-routing.module';

import { Topico4Page } from './topico4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico4PageRoutingModule
  ],
  declarations: [Topico4Page]
})
export class Topico4PageModule {}
