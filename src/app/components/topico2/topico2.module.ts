import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico2PageRoutingModule } from './topico2-routing.module';

import { Topico2Page } from './topico2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico2PageRoutingModule
  ],
  declarations: [Topico2Page]
})
export class Topico2PageModule {}
