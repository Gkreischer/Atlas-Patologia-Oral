import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico7PageRoutingModule } from './topico7-routing.module';

import { Topico7Page } from './topico7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico7PageRoutingModule
  ],
  declarations: [Topico7Page]
})
export class Topico7PageModule {}
