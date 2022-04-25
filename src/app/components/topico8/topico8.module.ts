import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico8PageRoutingModule } from './topico8-routing.module';

import { Topico8Page } from './topico8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico8PageRoutingModule
  ],
  declarations: [Topico8Page]
})
export class Topico8PageModule {}
